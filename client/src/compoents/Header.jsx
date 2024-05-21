
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */

import { Navbar, TextInput, Button,Dropdown,Avatar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon ,FaSun} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";


export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
   const { currentUser } = useSelector((state) => state.user);
  const {theme} = useSelector((state) => state.theme);

  return (
    <Navbar className="border-b-2 flex justify-between items-center">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Ashan's
        </span>
        Blog
      </Link>
      
      <form>
        <TextInput
          type="text"
          placeholder="search"
          icon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </button>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme ==='light' ? <FaSun />:<FaMoon />}
          
        </Button>
        {currentUser ? (
                    <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                      <Avatar alt='user' img={currentUser.profilePicture} rounded />
                    }
                  >
                    <Dropdown.Header>
                      <span className='block text-sm'>@{currentUser.username}</span>
                      <span className='block text-sm font-medium truncate'>
                        {currentUser.email}
                      </span>
                    </Dropdown.Header>
                    <Link to={'/dashboard?tab=profile'}>
                      <Dropdown.Item>Profile</Dropdown.Item>
                    </Link>
                    <Dropdown.Divider />
                    <Dropdown.Item  >Sign out</Dropdown.Item>
                  </Dropdown>
                ):
                (
                    <Link to="sign-in">
                    <Button gradientDuoTone="purpleToBlue" pill>Sign In</Button>
    
                        <Navbar.Toggle/>
                    </Link>
                )
            }

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as="div">
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/About"} as="div">
          <Link to="/About">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/Projects"} as="div">
          <Link to="/Projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
