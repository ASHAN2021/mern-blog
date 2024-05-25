/* eslint-disable no-unused-vars */
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Dashsidebar from "../compoents/Dashsidebar";
import Dashprofile from "../compoents/Dashprofile";
import Dashpost from "../compoents/Dashpost";
import Dashusers from "../compoents/Dashusers";
import DashComments from "../compoents/DashComments";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
   
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
    },
   [location.search]);
  return <div className="min-h-screen flex flex-col md:flex-row">
    <div className="md:w-56">
      {/*sidebar*/}
      <Dashsidebar/>
    </div>
      {/*profile*/}
      {tab === 'profile' && <Dashprofile/>}
       {/*posts...*/}
       {tab === 'posts' && <Dashpost/>}
        {/*Users*/}
      {tab === 'users' && <Dashusers/>}
       {/* comments*/}
       {tab === 'comments' && <DashComments/>}

  </div>
   
  
}
