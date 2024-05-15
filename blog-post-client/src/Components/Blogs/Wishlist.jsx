import React, { useContext, useEffect, useState } from 'react';
import WishListBlogs from './WishListBlogs';
import { AuthContext } from '../../Provider/AuthProvider';

const Wishlist = () => {
    const { user } = useContext(AuthContext);
    const [wishListData, setWishListData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/wishlist/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setWishListData(data));
    }, [user]);

    const handleDeleteBlog = (customID) => {
        setWishListData(wishListData.filter(blog => blog.customID !== customID));
    };

    return (
        <div className='min-h-screen pt-20 pb-10'>
            <h1 className='text-2xl lg:text-4xl font-bold pt-10 pb-10'>Number of Blogs <sup className='bg-blue-200 rounded-full font-bold text-blue-500 w-[60px] text-center p-1'> {wishListData.length}</sup></h1>
            <div className='flex flex-col gap-5 border-t-2 border-dashed border-blue-300 pt-10'>
                {wishListData.map(blog => (
                    <WishListBlogs key={blog._id} blog={blog} onDelete={handleDeleteBlog} />
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
