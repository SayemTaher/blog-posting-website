import React from 'react';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const Register = () => {
    const handleRegister = (e) => {
        
    }
    return (
      <div data-aos="fade-up" className=" flex bg-bgPrimary flex-col justify-center min-h-screen">
        <div className="flex justify-between ml-5 mr-5 gap-5 flex-col lg:flex-row">
          <div data-aos="fade-up-left" className=" mr-10 ml-10 lg:mr-0 rounded-md border-2 border-white  lg:ml-0 bg-[url('https://i.ibb.co/RBqvYpW/top-view-person-writing-laptop-with-copy-space.jpg')] h-[600px] bg-no-repeat bg-cover w-full"></div>
          <div data-aos="fade-up-right" className="w-full max-w-sm p-6 m-auto mx-auto flex flex-col  bg-white rounded-lg shadow-md dark:bg-gray-800 border-2 border-gray-300">
            <div className="flex justify-center mx-auto">
              <p className="text-2xl tracking-wide font-semibold">
                PostHeat | Register
              </p>
            </div>

            <form
              className="mt-6 flex flex-col gap-5"
              onSubmit={handleRegister}
            >
              <div>
                <label
                  for="username"
                  className="block text-sm text-gray-800 dark:text-gray-200"
                >
                  Enter Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div>
                <label
                  for="username"
                  className="block text-sm text-gray-800 dark:text-gray-200"
                >
                  Enter photoURL
                </label>
                <input
                  type="text"
                  name="photo"
                  required
                  placeholder="Enter your photoUrl"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div>
                <label
                  for="username"
                  className="block text-sm text-gray-800 dark:text-gray-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label
                    for="password"
                    className="block text-sm text-gray-800 dark:text-gray-200"
                  >
                    Password
                  </label>
                </div>

                <input
                  type="password"
                  required
                  name="password"
                  placeholder="Enter your password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                ></input>
              </div>
            </form>

            <div className="flex justify-center gap-2 items-center">
              <p className="mt-8  text-xs font-light text-center text-gray-400">
                Already have an account?
                <span className='ml-2'>
                  <Link
                    to="/login"
                    className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
                  >
                    Sign In
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;