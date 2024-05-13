
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsArrowUpRight } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";


const WishListBlogs = ({ blog,  }) => {
  const {
    user,
    _id,
    title,
    photoUrl,
    category,
    description,
    details,
    postedTime,
  } = blog;

  const handleDelete = (_id) => {
    console.log("Delete user with id", _id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/wishlist/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
             
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
                
            } else {
              throw new Error("Item not deleted");
            }
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
            // Show error message to the user
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the item.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div>
      <div
        data-aos="fade-up-right"
        className="flex gap-5 bg-white flex-col shadow-md z-50  items-center h-[800px] w-full"
      >
        <div>
          <img
            src={photoUrl}
            className="h-[400px] w-full  object-cover "
            alt={`img of ${_id}`}
          />
        </div>
        <div className="flex flex-col ml-4 mr-4  justify-between">
          <div className="flex items-center justify-between mb-2">
            <p className=" text-blue-500 text-sm lg:text-xl ">{category}</p>
            <span className="text-gray-500">{postedTime}</span>
          </div>
          <div className="flex gap-2 text-left flex-col">
            <h1 className="text-2xl lg:text-4xl font-bold text-colorNavy">
              {title}
            </h1>
            <p className="text-gray-600">{description.slice(0, 250)}</p>
          </div>
          <div className="mt-2 flex flex-col  text-left items-start justify-start mb-2">
            <span className="text-lg font-bold text-colorNavy">Remarks </span>
            <span className="text-gray-600 text-left mb-2 mt-2">
              {details.slice(0, 300)}
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
              onClick={() => handleDelete(blog._id)}
              data-tip="Delete this item"
              className="flex tooltip items-center cursor-pointer gap-2 justify-center w-[120px] text-center bg-red-600 rounded-full text-white p-1 hover:bg-blue-900 hover:text-white"
            >
              <MdDelete></MdDelete>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WishListBlogs;
