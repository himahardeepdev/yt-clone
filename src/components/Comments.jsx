import { useEffect } from "react";
import { SlDislike, SlLike } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
const Comments = () => {
  const {loading} = useAuth();
  const navigate = useNavigate();
  useEffect(()=>{
    if(loading){
      navigate("/");
    }
  })
    const comments = [
        {
            id : 1 ,
            username : "Sriram",
            comment : 'This guy deserves more attention and appreciation for the efforts he puts in. 😇',
            like : 3,
            dislike : 2
        },
        {
            id : 2 ,
            username : "Srinu",
            comment : "You have my respect brother. The way you make concepts so easy to all the developers is really appreciated",
            like : 3,
            dislike : 2
        },
        {
            id : 3 , 
            username : "Hardeep",
            comment : "guy's please refer all videos step by step i think its India's best  java platform you tube channel where u get deep knowledge about all about java. refer to your friends also i'm not promoting this channel but this my own genuine view about Durgesh sir. These videos are latest and i think just go through it once. I'm sure u will get knowledge because i'm from mechanical ",
            like : 3,
            dislike : 2
        }
    ]
  return (
    <div>
      {
        comments.map((data)=>{
            const {id , username , comment , like , dislike} = data;
            return (<div key={id} className="mt-5">
                <p className="text-xl">@{username}</p>
                <p className="ml-5 mb-3">{comment}</p>
                <div className="flex w-28 justify-evenly ml-5">
                <SlLike className="hover:text-green-400" />{ like}
                <SlDislike className="hover:text-red-700" />{dislike}
                </div>
                <hr className="mt-3 border-gray-400" />
            </div>)
        })
      }
    </div>
  )
}

export default Comments
