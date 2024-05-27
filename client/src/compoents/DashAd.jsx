/* eslint-disable react/no-unescaped-entities */
import  { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {  Table ,Modal ,Button} from 'flowbite-react';
import { Link } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function Dashpost() {
    const { currentUser } = useSelector((state) => state.user);
    const [userAds, setUserAds] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [AdIdToDelete, setAdIdToDelete] = useState('');
    useEffect(() => {
        const fetchAds = async () => {
            try {
                const res = await fetch(`/api/Ad/getAds?userId=${currentUser._id}`);
                const data = await res.json();
                if (res.ok) {
                    setUserAds(data.Ads);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        if (currentUser.isAdmin) {
            fetchAds();
        }
    }, [currentUser._id]);
   
    
    const handleDeleteAd =async ()=>{
      setShowModal(false);
      try {
        const res = await fetch(
          `/api/Ad/deleteAd/${AdIdToDelete}/${currentUser._id}`,
          {
            method: 'DELETE',
          }
        );
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
        } else {
          setUserAds((prev) =>
            prev.filter((Ad) => Ad._id !== AdIdToDelete)
          );
        }
      } catch (error) {
        console.log(error.message);
      }
      };
    
      return (
        <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
          {currentUser.isAdmin && userAds.length > 0 ? (
            <>
              <Table hoverable className='shadow-md'>
                <Table.Head>
                  <Table.HeadCell>Date updated</Table.HeadCell>
                  <Table.HeadCell>Ad image</Table.HeadCell>
                  <Table.HeadCell>Ad title</Table.HeadCell>
                  
                  <Table.HeadCell>Delete</Table.HeadCell>
                  <Table.HeadCell>
                    <span>Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className='divide-y'>
                  {userAds.map((Ad) => (
                    <Table.Row key={Ad._id} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                      <Table.Cell>
                        {new Date(Ad.createdAt).toLocaleDateString()}
                      </Table.Cell>
                      <Table.Cell>
                        <Link >
                          <img
                            src={Ad.image}
                            alt={Ad.title}
                            className='w-20 h-10 object-cover bg-gray-500'
                          />
                        </Link>
                      </Table.Cell>
                      <Table.Cell>
                        <Link
                          className='font-medium text-gray-900 dark:text-white'
                          
                        >
                          {Ad.title}
                        </Link>
                      </Table.Cell>
                      
                      <Table.Cell>
                        <span  onClick={() => {
                                                setShowModal(true);
                                                setAdIdToDelete(Ad._id);
                                            }}
                         
                          className='font-medium text-red-500 hover:underline cursor-pointer'
                        >
                          Delete
                        </span>
                      </Table.Cell>
                      <Table.Cell>
                        <Link
                          className='text-teal-500 hover:underline'
                          to={`/update-Ad/${Ad._id}`}
                        >
                          <span>Edit</span>
                        </Link>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
              
            </>
          ) : (
            <p>You have no Ads yet!</p>
          )}
           <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='md'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this Ad?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleDeleteAd}>
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
        </div>
      );
    }
    
    
    


