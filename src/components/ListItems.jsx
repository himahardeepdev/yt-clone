import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function ListItems() {
  const {loading} = useAuth();
  const navigate = useNavigate();
  useEffect(()=>{
    if(loading){
      navigate("/");
    }
  })
  const categories = [
    "All",
    "Music",
    "React routers",
    "Computer programming",
    "Reverberation",
    "Movie musicals",
    "India national cricket team",
    "News",
    "Mixes",
    "1990s",
    "Telugu cinema",
    "Live",
    "Dramedy",
    "Dubbing",
    "Indian soap opera",
    "Cricket",
    "Football",
    "Learn Coding",
  ];

  const clickChange = (category)=>{
    if(category === "All"){
      navigate("/")
    } else{
      navigate(`search/${category}`)
    }
  }


  return (
    <div className="hidden sm:block">
        <div className="flex overflow-x-scroll hide-scroll-bar px-4 ">
      <div className="flex space-x-4 flex-nowrap">
        {categories.map((category) => {
          return (
            <div
              key={category}
              className="mb-4 flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 cursor-pointer"
            onClick={()=>{clickChange(category)}}>
              {category}
            </div>
          );
        })}
      </div>
    </div>
    </div>
    
  );
}

export default ListItems;
