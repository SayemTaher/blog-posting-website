import { useState } from "react";
import toast from "react-hot-toast";

import { motion } from "framer-motion";
const Newsletter = () => {
    const [inputValue ,setInputValue] = useState('')
    const handleSubscribe = (e) => {
        e.preventDefault()
        toast.success('You just subscribed!! WooHoo!!')
        setInputValue('')
        
    }
    return (
      <div className="mt-10 mb-10" data-aos="fade-up-right">
        <section className="flex items-center flex-1">
          <div className="flex flex-col w-full ">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl"
            >
              <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 ">
                Coming
              </span>

              <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 ">
                Soon
              </span>
            </motion.h1>

            <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 ">
              A major changes are going to take place soon within our platform.
              We request our users to keep using the present version of our
              website as much as they can. Please{" "}
              <b className="text-blue-400"> subscribe to our newsletter </b> to
              stay in touch for the major updates
            </p>

            <div className="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
              <form onSubmit={handleSubscribe}>
                {" "}
                <input
                  id="email"
                  type="email"
                  value={inputValue}
                  required
                  onChange={(e) => setInputValue(e.target.value)}
                  className="px-6 py-3 text-gray-700 bg-white border rounded-md   focus:outline-none focus:ring sm:mx-2"
                  placeholder="Email Address"
                />
                <input
                  type="submit"
                  value="Subscribe Now"
                  className="px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2"
                />
              </form>
            </div>

            <p className="mt-8 text-center text-gray-700  text-md md:text-xl">
              You will be notified when The New Version is launched :)
            </p>
          </div>
        </section>
      </div>
    );
};

export default Newsletter;