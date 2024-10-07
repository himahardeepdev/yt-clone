
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { MdHistory, MdOutlineSubscriptions, MdOutlineWatchLater } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { SiYoutubeshorts } from "react-icons/si";
// import { SiYoutubegaming } from "react-icons/si";
import { useEffect } from "react";
import { BiVideo } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
// import { GiLinkedRings } from "react-icons/gi";
function Sidebar() {
  const navigate = useNavigate();
  const {  loading } = useAuth();
  useEffect(()=>{
    if(loading){
      navigate("/");
    }
  }, [loading]);

  
  const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
    },
  ];
  const sidebarItems2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <PiUserSquareThin />,
    },
    {
      id: 2,
      name: "History",
      icon: <MdHistory />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <MdOutlineSubscriptions />,
    },
    {
      id: 4,
      name: "Your Videos",
      icon: <BiVideo />,
    },
    {
      id: 5,
      name: "Watch later",
      icon: <MdOutlineWatchLater />,
    },
    {
      id: 6,
      name: "Liked videos",
      icon: <AiOutlineLike />,
    },
  ];
  
 

  const clickChange = (val)=>{
    if(val === "Home"){
      navigate("/");
    }
  }
  return (
    
      <div className="hidden sm:block px-6 w-[17%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden ">
      {/* Home */}
      <div className=" space-y-3 items-center">
        {sidebarItems.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1"
              onClick={()=>{clickChange(item.name)}}
            >
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* You */}
      <div className="mt-4 space-y-3 items-center">
        <div className="flex items-center space-x-2">
          <h1>You</h1>
          <FaChevronRight />
        </div>
        {sidebarItems2.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1"
            >
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      
      <br />
      
    </div>
  
  );
}

export default Sidebar;
