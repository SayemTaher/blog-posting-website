import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import AuthProvider from "./Provider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import Login from "./Components/SignIn/Login";
import Register from "./Components/Register/Register";
import All from "./Components/Blogs/All";
import Featured from "./Components/Blogs/Featured";
import Wishlist from "./Components/Blogs/Wishlist";
import Add from "./Components/Blogs/Add";
import PrivateRoute from "./Routes/PrivateRoute";
import Update from "./Components/Blogs/Update";
import Details from "./Components/Blogs/Details";
import {  Toaster } from "react-hot-toast";
import Error from "./404/Error";
import WishListBlogs from "./Components/Blogs/WishListBlogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/blogs"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <Add></Add>
          </PrivateRoute>
        ),
      },
      {
        path: "/all/:id",
        element: <All></All>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/blogs/${params.id}`),
      },
      {
        path: "/all",
        element: <All></All>,
        loader: () => fetch("http://localhost:3000/blogs"),
      },
      {
        path: "/featured",
        element: <Featured></Featured>,
        loader: () => fetch("http://localhost:3000/posts"),
      },
      {
        path: "/wish",
        element: (
          <PrivateRoute>
            <Wishlist></Wishlist>
          </PrivateRoute>
        ),
      },

      {
        path: "/update",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/blogs/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            {" "}
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/blogs/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
      <Toaster></Toaster>
    </AuthProvider>
  </React.StrictMode>
);
