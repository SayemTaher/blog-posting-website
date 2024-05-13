import React from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { LuUserCheck2 } from "react-icons/lu";
import { LuClock3 } from "react-icons/lu";
import { LuPenSquare } from "react-icons/lu";
import { FaRegCommentAlt } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";
import { useEffect } from "react";
import Comment from "./Comment";

const Details = () => {
 const { user } = useContext(AuthContext);
 const loadedBlogdata = useLoaderData();
 const [comment, setComment] = useState("");
    const [receivedComments, setReceivedComments] = useState([]);
     const { _id: blogId } = loadedBlogdata

 useEffect(() => {
   // Fetch comments for the current blog
   fetch(`http://localhost:3000/comments/${blogId}`)
     .then((res) => res.json())
     .then((data) => {
       console.log(data);
       setReceivedComments(data);
     });
 }, [loadedBlogdata._id]); // Ensure useEffect runs when the blog ID changes

 const { _id, title, photoUrl, category, description, details, postedTime } =
   loadedBlogdata;
 const dbUser = loadedBlogdata.user.email;
 const userPhoto = user.photoURL;
 const userName = user.displayName;
    const userEmail = user.email;
    const currentDate = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    const commentDate = currentDate.toLocaleDateString("en-US", options);


 const handleComment = (e) => {
   e.preventDefault();
   const commentDetails = {
     comment,
     blogId,
     userPhoto,
     userName,
       userEmail,
     commentDate
   };
   if (user.email === dbUser) {
     toast.error("Action is not permitted!");
     return;
   }
   fetch("http://localhost:3000/comments", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(commentDetails),
   })
     .then((res) => res.json())
     .then((data) => {
       console.log(data);
       toast.success("Comment added successfully!");
       setComment("");
     })
     .catch((error) => {
       console.error("Error adding comment:", error);
       toast.error("Failed to add comment. Please try again later.");
     });
 };

  return (
    <div className="bg-white flex flex-col justify-center  min-h-screen">
      <div className=" flex items-center justify-between  mb-10 border-b-2 border-dashed border-blue-400 pb-4">
        <div className=" flex items-center text-2xl gap-2">
          <LuUserCheck2></LuUserCheck2>
          <p>{dbUser}</p>
        </div>
        <div className=" flex bg-blue-100 text-blue-400 rounded-3xl p-1 text-center justify-center w-[150px] items-center gap-2">
          <LuClock3></LuClock3>
          <span>{postedTime}</span>
        </div>
      </div>
      <div className="w-full p-5  bg-gray-100  shadow-md  ">
        <div className="mb-5">
          <img
            src={photoUrl}
            className="h-[450px] w-full object-cover"
            alt="#"
          />
        </div>
        <div className="flex items-center justify-between">
          <a
            className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
            tabindex="0"
            role="button"
          >
            {category}
          </a>
        </div>

        <div className="mt-2">
          <a
            href="#"
            className="text-xl lg:text-3xl font-bold text-gray-700  hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
            tabindex="0"
            role="link"
          >
            {title}
          </a>
          <p className="mt-2 text-gray-600 ">{description}</p>
        </div>
        <div className="mt-2">
          <span className="text-gray-600 text-lg font-bold">Details</span>
          <p className="mt-2 text-gray-600 font-semibold text-sm ">
            {details}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          {user.email === dbUser ? (
            <Link to={`/update/${_id}`}>
              <button className="flex items-center gap-2 bg-colorNavy text-white p-2 text-center justify-center rounded-xl w-[120px]">
                {" "}
                <LuPenSquare /> Edit Post{" "}
              </button>
            </Link>
          ) : (
            <span className="text-lg font-light text-gray-600 ">
              {postedTime}
            </span>
          )}

          <div className="flex items-center">
            <img
              className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
              src="https://i.ibb.co/nC23FQB/Screenshot-2024-04-15-at-15-53-08.png"
              alt="avatar"
            />
            <a
              className="font-bold text-gray-700 cursor-pointer "
              tabindex="0"
              role="link"
            >
              {dbUser}
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-5 gap-2 bg-white">
        <div className="bg-green-100 p-2 rounded-xl w-[300px] text-green-600 text-2xl font-semibold text-center justify-center flex items-center gap-2">
          <FaRegCommentAlt></FaRegCommentAlt>
          <h1> Total Comments - {receivedComments.length} </h1>
        </div>
        <div className="mt-5 mb-5">
          <section className="max-w-full border-2 border-dashed border-blue-100 p-6 mx-auto bg-white rounded-md shadow-md ">
            <h2 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
              Post a comment
            </h2>

            <form onSubmit={handleComment}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label
                    className="text-gray-700 "
                    for="passwordConfirmation"
                  >
                    Share your thoughts
                  </label>
                  <textarea
                    cols={100}
                    rows={10}
                    type="text"
                    name="text"
                    value={comment}
                    required
                    onChange={(e) => setComment(e.target.value)}
                    className="block w-[700px] px-4 py-2 mt-4 text-gray-700 bg-white border border-gray-200 rounded-md  focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <input
                  type="submit"
                  value="Create a comment"
                  className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                />
              </div>
            </form>
          </section>
        </div>
          </div>
          <div className="flex flex-col gap-2 mt-5 mb-5 ">
              <h1 className="bg-blue-100 text-blue-500 rounded-xl text-2xl lg:text-3xl text-semibold p-2 text-center w-[300px]">Latest Comments </h1>
              <div className="flex flex-col gap-5 ">
                  {
                      receivedComments.map(comments =><Comment key={comments._id} comments={comments}></Comment> )
                  }
                  
              </div>
          </div>
          
    </div>
  );
};

export default Details;
