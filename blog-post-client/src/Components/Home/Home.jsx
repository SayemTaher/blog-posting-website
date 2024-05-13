import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import Blog from "../Blogs/Blog";
const HeroSection = () => {
    
    const loadedBlogs = useLoaderData()

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="  text-white text-center py-24"
    >
      <Helmet>
        <title>PostHeat | Home</title>
      </Helmet>
      <div className="container mx-auto min-h-screen flex flex-col ">
        <div className=" w-full overflow-hidden bg-white  shadow-md  ">
          <img data-aos="fade-up"
            className="object-cover w-full h-[600px]"
            src="https://i.ibb.co/RBqvYpW/top-view-person-writing-laptop-with-copy-space.jpg"
            alt="Article"
          />

          <div className="p-6">
            <div className="flex flex-col justify-center gap-2 items-center">
              <span className="text-2xl font-medium  text-blue-700 tracking-wider uppercase ">
                POSTHEAT
              </span>
              <motion.a
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                href="#"
                className="block mt-2 text-6xl font-bold
                  text-colorNavy transition-colors duration-300 transform  hover:text-gray-600 hover:underline"
                tabindex="0"
                role="link"
              >
                Share your thoughts unbothered
              </motion.a>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="mt-5 text-sm text-center tracking-wide max-w-[800px]  text-gray-600 dark:text-gray-400"
              >
                Welcome to our platform where you can share your thoughts
                unbothered. Express yourself freely without fear of judgment or
                interruption. Join our community of like-minded individuals who
                value open dialogue and embrace diverse perspectives. Whether
                it's a story to tell, an idea to explore, or a question to
                ponder, this is your space to engage authentically and connect
                with others who appreciate the power of uninhibited expression.
                Start sharing your thoughts today and let your voice be heard.
              </motion.p>
              <div className="flex gap-2 items-center -mr-10 justify-center">
                <Link to="/register">
                  {" "}
                  <button className="bg-blue-700 text-white text-center w-[150px] mt-2 rounded-full p-2 text-sm  tracking-wide">
                    Register For Free{" "}
                  </button>
                </Link>
                <HiArrowLongRight className="text-blue-600 mt-3 text-4xl"></HiArrowLongRight>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 justify-center pb-10">
            <Marquee pauseOnHover={true} speed={100}>
              <div className="max-w-2xl border-2 ml-5 mr-5 h-[300px] flex flex-col justify-between  border-gray-600 px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                    Mar 10, 2019
                  </span>
                  <a
                    className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
                    tabindex="0"
                    role="button"
                  >
                    Design
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    href="#"
                    className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
                    tabindex="0"
                    role="link"
                  >
                    Accessibility tools for designers and developers
                  </a>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora expedita dicta totam aspernatur doloremque.
                    Excepturi iste iusto eos enim reprehenderit nisi, accusamus
                    delectus nihil quis facere in modi ratione libero!
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    tabindex="0"
                    role="link"
                  >
                    Read more
                  </a>

                  <div className="flex items-center">
                    <img
                      className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                      src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                      alt="avatar"
                    />
                    <a
                      className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
                      tabindex="0"
                      role="link"
                    >
                      Khatab wedaa
                    </a>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl  border-2 h-[300px] flex flex-col justify-between border-gray-600 px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                    April 10, 2024
                  </span>
                  <a
                    className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
                    tabindex="0"
                    role="button"
                  >
                    Travel
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    href="#"
                    className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
                    tabindex="0"
                    role="link"
                  >
                    Journey Beyond Boundaries
                  </a>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    From the cobblestone streets of historic cities to the
                    tranquil shores of exotic islands, our travel tales
                    transport you to faraway lands, igniting your wanderlust and
                    inspiring your next escapade. Whether you're a seasoned
                    globetrotter or an armchair explorer, let our stories guide
                    you on a voyage of exploration and inspiration. Welcome
                    aboard the journey of a lifetime.
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    tabindex="0"
                    role="link"
                  >
                    Read more
                  </a>

                  <div className="flex items-center">
                    <img
                      className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                      src="https://images.unsplash.com/photo-1521252659862-eec69941b071?q=80&w=1872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="avatar"
                    />
                    <a
                      className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
                      tabindex="0"
                      role="link"
                    >
                      William Henry
                    </a>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl border-2 h-[300px] flex flex-col justify-between  ml-5 border-gray-600 px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                    Mar 22, 2024
                  </span>
                  <a
                    className="px-3 py-1 text-sm mr-5  font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
                    tabindex="0"
                    role="button"
                  >
                    News
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    href="#"
                    className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
                    tabindex="0"
                    role="link"
                  >
                    Exploring the Final Frontier
                  </a>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    "Delve into the latest SpaceX news and updates with SpaceX
                    Spotlight, your portal to the cosmos. From groundbreaking
                    rocket launches to cutting-edge innovations in space
                    exploration technology, we bring you the forefront of space
                    news straight from the source.
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    tabindex="0"
                    role="link"
                  >
                    Read more
                  </a>

                  <div className="flex items-center">
                    <img
                      className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                      src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="avatar"
                    />
                    <a
                      className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
                      tabindex="0"
                      role="link"
                    >
                      Marnes Yerion
                    </a>
                  </div>
                </div>
              </div>
            </Marquee>
          </div>
        </div>
          </div>
          <div className="flex flex-col  gap-2  mt-10 mb-10">
              <div>
                  <h1 className="lg:text-4xl text-2xl text-colorNavy text-left mb-5 border-b-4 border-colorNavy w-[250px] pb-2 font-bold ">Recent Posts</h1>
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 justify-evenl bg-gray-100  gap-5 p-5 ">
                  {
                      loadedBlogs.slice(0,6).map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                  }
                  
              </div>
        </div>
          
    </motion.div>
  );
};

export default HeroSection;

