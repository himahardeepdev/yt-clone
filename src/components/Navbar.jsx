import { useState } from "react";
import Avatar from "react-avatar";

import { AiOutlineBell, AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";

import { Link, useNavigate } from "react-router-dom";
import logo from "../../public/logo.png";
import profile from "../../public/profile.jpg";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
 
  const navigate = useNavigate();
  
  

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2 z-50">
      {/* Left Side: Logo and Menu */}
      <div className="flex items-center space-x-4">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 cursor-pointer" />
        </Link>
      </div>

      {/* Center: Search Bar */}
      <div className="flex w-[35%] items-center justify-end">
        <div
          className={`flex items-center w-full ${
            showSearch ? "block" : "hidden"
          } md:flex`}
        >
          <div className="w-full px-4 py-2 border-[1px] border-gray-400 rounded-l-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
            />
          </div>
          <button
            className="px-4 py-2 border-[1px] border-gray-400 bg-gray-100 rounded-r-full"
            onClick={() => searchQueryHandler("searchButton")}
          >
            <CiSearch size={"24px"} />
          </button>
        </div>

        {/* Search Icon for Mobile */}
        {!showSearch && (
          <CiSearch
            size={"24px"}
            className="md:hidden ml-3 cursor-pointer"
            onClick={() => setShowSearch(true)}
          />
        )}

        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200 hidden md:block"
        />
      </div>

      {/* Right Side: Icons */}
      <div className="flex space-x-5 items-center">
        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <Avatar src={profile} size="32" round={true} />
      </div>
    </div>
  );
}

export default Navbar;
