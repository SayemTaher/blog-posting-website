import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsArrowUpRight } from "react-icons/bs";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Blog = ({ blog }) => {
    const navigate = useNavigate()
     const { user } = useContext(AuthContext);
     const {
       _id,
       title,
       photoUrl,
       category,
       description,
       details,
       postedTime,
     } = blog;
    const{_id : customID} = blog
     

     const currentDate = new Date();
     const options = { day: "numeric", month: "long", year: "numeric" };
     const AddedTime = currentDate.toLocaleDateString("en-US", options);

     const handleAddtoWishlist = () => {
       if (!user) {
           toast.error("Please sign in first");

         return;
       }
       


         const wishListItem = {
            customID,
         user,
         title,
         photoUrl,
         category,
         description,
         details,
         AddedTime,
       };

       // Send the item to the server to add it to the wishlist
       fetch("https://blog-post-server-sable.vercel.app/wishlist", {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(wishListItem),
       })
         .then((res) => res.json())
         .then((data) => {
           console.log(data);
           toast.success("Blog added to your wishlist");
         })
         .catch((error) => {
           console.error("Error adding item to wishlist:", error);
             toast.error("Failed to add item to wishlist");
             navigate('/')
             
         });
     };
  return (
    <div
      
    >
      <div
       
              data-aos="fade-up-left"
        className="flex gap-5 bg-white  flex-col  z-50  items-center h-[630px] w-full"
      >
        <div>
          <img
            src={photoUrl}
            className=" w-[740px] h-[250px]  object-cover "
            alt={`img of ${_id}`}
          />
        </div>
        <div className="flex flex-col ml-4 mr-4 h-[340px]  justify-between">
          <div className="flex items-center justify-between  ">
            <p className=" text-blue-500  ">{category}</p>
            <span className="text-gray-500">{postedTime}</span>
          </div>
          <div className="flex  text-left justify-between flex-col">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-2xl font-bold text-colorNavy"
            >
              {title}
            </motion.h1>
            <p className="text-gray-600">{description.slice(0, 150)}</p>
          </div>
          <div className=" flex flex-col  text-left items-start justify-start ">
            <span className="text-lg font-bold text-colorNavy">Remarks </span>
            <span className="text-gray-600 text-left mb-2 mt-2">
              {details.slice(0, 200)}
            </span>
          </div>
          <div className="flex items-center  justify-between">
            <div className="flex justify-center text-center items-center gap-2 text-white bg-colorNavy rounded-full p-2 w-[130px] ">
              <BsArrowUpRight></BsArrowUpRight>
              <Link to={`/details/${_id}`}>
                <button>Read More</button>
              </Link>
            </div>

            <div
              onClick={handleAddtoWishlist}
              data-tip="Add to wishlist"
              className="flex tooltip items-center cursor-pointer gap-2 justify-center w-[120px] text-center bg-gray-200 rounded-full text-gray-600 p-1 hover:bg-blue-900 hover:text-white"
            >
              <IoShieldCheckmarkOutline />
              <button>Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
