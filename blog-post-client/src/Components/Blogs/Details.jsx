import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { LuUserCheck2 } from "react-icons/lu";
import { LuClock3 } from "react-icons/lu";
import { LuPenSquare } from "react-icons/lu";

const Details = () => {
    const{user} = useContext(AuthContext)
    const loadedBlogdata = useLoaderData()
    const { _id, title, photoUrl, category, description, details, postedTime,  } =
        loadedBlogdata;
    const dbUser = loadedBlogdata.user.email
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
              className="text-xl lg:text-3xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
              tabindex="0"
              role="link"
            >
              {title}
            </a>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>
          <div className="mt-2">
            <span className="text-gray-600 text-xl font-bold">Details</span>
            <p className="mt-2 text-gray-600 font-semibold text-lg dark:text-gray-300">{details}</p>
          </div>

          <div className="flex items-center justify-between mt-4">
            {user.email === dbUser ? (
              <Link to={`/update/${_id}`}>
                <button className='flex items-center gap-2 bg-colorNavy text-white p-2 text-center justify-center rounded-xl w-[120px]'> <LuPenSquare/> Edit Post </button>
              </Link>
            ) : (
              <span className="text-lg font-light text-gray-600 dark:text-gray-400">
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
            <div className='flex flex-col gap-2 bg-white'>
                

            </div>
      </div>
    );
};

export default Details;