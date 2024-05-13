import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import './nav.css'

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => {
            toast.success('Successfully logged out!')
            })
            .catch(err => {
            toast.error(err.message)
        })
    }
    
    const navigation = (
      <div className='flex gap-2 items-center' id="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add Blogs</Link>
        </li>
        <li>
          <Link to="/all">All Blogs</Link>
        </li>
        <li>
          <Link to="/featured">Featured Blogs</Link>
        </li>
        <li>
          <Link to="/wish">Wishlist</Link>
        </li>
        {!user && (
          <li>
            <Link to="/login">SignIn</Link>
        </li>
                
            )}
            
      </div>
    );
    return (
      <div className='fixed container mx-auto z-50'>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navigation}
              </ul>
            </div>
            <a className="btn btn-ghost text-3xl tracking-wider ">PostHeat</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navigation}</ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full border-4 border-blue-400">
                  {user ? (
                    <img alt="user image" src={user.photoURL} />
                  ) : (
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://i.ibb.co/nC23FQB/Screenshot-2024-04-15-at-15-53-08.png"
                    />
                  )}
                </div>
              </div>
              <div
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {user ? (
                  <div className="flex flex-col gap-2 justify-start">
                    <p className="font-bold text-gray-400">
                      {user.displayName}
                    </p>
                    <p>{user.email}</p>
                    <Link to="/">
                      <button
                        onClick={handleLogout}
                        className="bg-colorBlue w-[80px] text-white font-bold text-xs p-2 rounded-full text-center"
                      >
                        LogOut
                      </button>
                    </Link>
                  </div>
                ) : (
                  <Link to="/login">
                    <button className="rounded-full w-[120px] hover:bg-colorBlue text-center bg-colorNavy font-bold text-bgPrimary p-2 ">
                      Sign In
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default NavBar;