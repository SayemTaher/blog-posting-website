import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const WishListBlogs = ({ blog, onDelete }) => {
    const {
        customID,
        title,
        photoUrl,
        category,
        description,
        details,
        postedTime,
    } = blog;

    const handleDelete = (customID) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://blog-post-server-sable.vercel.app/wishlist/${customID}`, {
                    method: "DELETE",
                })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        onDelete(customID);
                        Swal.fire("Deleted!", "Your file has been deleted.", "success");
                    } else {
                        throw new Error("Item not deleted");
                    }
                })
                .catch((error) => {
                    console.error("Error deleting item:", error);
                    Swal.fire("Error!", "Failed to delete the item.", "error");
                });
            }
        });
    };

    return (
        <div data-aos="fade-up-right" className="flex gap-5 bg-white flex-col shadow-md z-50 items-center h-[800px] w-full">
            <div>
                <img src={photoUrl} className="h-[400px] w-[1500px] object-cover" alt={`img of ${customID}`} />
            </div>
            <div className="flex flex-col ml-4 mr-4 justify-between">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-blue-500 text-sm lg:text-xl">{category}</p>
                    <span className="text-gray-500">{postedTime}</span>
                </div>
                <div className="flex gap-2 text-left flex-col">
                    <h1 className="text-2xl lg:text-4xl font-bold text-colorNavy">{title}</h1>
                    <p className="text-gray-600">{description.slice(0, 250)}</p>
                </div>
                <div className="mt-2 flex flex-col text-left items-start justify-start mb-2">
                    <span className="text-lg font-bold text-colorNavy">Remarks</span>
                    <span className="text-gray-600 text-left mb-2 mt-2">{details.slice(0, 300)}</span>
                </div>
                <div className="flex items-center mt-2 justify-between">
                <div className="flex justify-center text-center items-center gap-2 text-white bg-colorNavy rounded-full p-2 w-[130px] ">
              <BsArrowUpRight></BsArrowUpRight>
              <Link to={`/details/${customID}`}>
                <button>Read More</button>
              </Link>
            </div>
                    <button onClick={() => handleDelete(customID)} className="flex tooltip items-center cursor-pointer gap-2 justify-center w-[120px] text-center bg-red-600 rounded-full text-white p-1 hover:bg-blue-900 hover:text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default WishListBlogs;
