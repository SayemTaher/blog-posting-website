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

const TotalBlog = ({ data }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { _id, title, photoUrl, category, description, details, postedTime } =
    data;
  const { _id: customID } = data;

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
        navigate("/");
      });
  };
  return (
    <div className="pb-10">
      <div
        data-aos="fade-up-left"
        className="flex gap-5 bg-white border-2 border-gray-100 flex-col rounded-xl shadow-xl  z-50  items-center h-[800px] w-[800px]"
      >
        <div>
          <img
            src={photoUrl}
            className=" w-full h-[450px]  object-cover "
            alt={`img of ${_id}`}
          />
        </div>
        <div className="flex flex-col ml-4 mr-4  justify-between">
          <div className="flex items-center justify-between mb-2">
            <p className=" text-blue-500  text-xl">{category}</p>
            <span className="text-gray-500">{postedTime}</span>
          </div>
          <div className="flex gap-2 text-left flex-col">
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
          <div className="mt-2 flex flex-col  text-left items-start justify-start mb-2">
            <span className="text-lg font-bold text-colorNavy">Remarks </span>
            <span className="text-gray-600 text-left mb-2 mt-2">
              {details.slice(0, 200)}
            </span>
          </div>
          <div className="flex items-center mt-2 justify-between">
            <div className="flex justify-center text-center items-center gap-2 text-white bg-colorNavy rounded-full p-2 w-[130px] ">
              <BsArrowUpRight></BsArrowUpRight>
              <Link to={`/details/${_id}`}>
                <button>Read More</button>
              </Link>
            </div>

            <div
              onClick={handleAddtoWishlist}
              data-tip="Add to wishlist"
              className="flex tooltip items-center cursor-pointer gap-2 justify-center w-[120px] shadow-xl border-2 border-green-300 text-center bg-white rounded-full text-green-600 p-1 hover:bg-blue-900 hover:text-white"
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
export default TotalBlog;
