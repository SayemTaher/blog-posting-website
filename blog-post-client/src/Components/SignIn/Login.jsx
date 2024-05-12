
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
          console.log(result.user);
          toast.success('Signed in successfully')
      })
      .catch((error) => {
          console.log(error.message);
          toast.error(error.message)
      });
  };
    const handleGoogleLogin = () => {
      signInWithGoogle()
        .then((result) => {
          console.log(result.user);
          toast.success("Success! You will now be redirected");
          navigate(location?.state ? location.state : "/");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    };

  return (
    <div
      data-aos="fade-up"
      className=" min-h-screen flex flex-col justify-center bg-bgPrimary"
    >
      <div className="flex flex-col ml-5 mr-5 lg:flex-row md:flex-row gap-5 justify-center items-center lg:items-center lg:justify-between">
        <div data-aos="fade-up-right" className="w-full border-2 h-[500px] border-gray-100 max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="flex justify-center mx-auto">
            <p className="text-2xl tracking-wide font-semibold">
              PostHeat | Sign In
            </p>
          </div>

          <form className="mt-6" onSubmit={handleSignIn}>
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
                <a
                  href="#"
                  className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Forget Password?
                </a>
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
                value="Sign In"
                className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              ></input>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

            <a
              href="#"
              className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or login with google
            </a>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
          </div>

          <div
            className="flex items-center mt-6 -mx-2"
            onClick={handleGoogleLogin}
          >
            <button
              type="button"
              className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
            >
              <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
              </svg>

              <span className="hidden mx-2 sm:inline">Sign in with Google</span>
            </button>
          </div>
          <div className="flex justify-center gap-2 items-center">
            <p className="mt-8 text-xs font-light text-center text-gray-400">
              Don't have an account?{" "}
              <span>
                <Link
                  to="/register"
                  className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
                >
                  Create One
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div data-aos="fade-up-left" className=" mr-10 ml-10 lg:mr-0 rounded-md border-2 border-white  lg:ml-0 bg-[url('https://i.ibb.co/wyR75j7/jess-bailey-q10-VITr-VYUM-unsplash.jpg')] h-[500px] bg-no-repeat bg-cover w-full"></div>
      </div>
    </div>
  );
};

export default Login;
