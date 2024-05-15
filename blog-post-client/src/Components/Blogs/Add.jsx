
import { RiImageAddFill } from "react-icons/ri";
import { Helmet } from "react-helmet-async";
import { MdOutlinePostAdd } from "react-icons/md";

import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";



const Add = () => {

    const { user } = useContext(AuthContext);
    const [title, setTitle] = useState('')
    const [photoUrl, setPhotUrl] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [details, setDetails] = useState('')
    
  const handleAddSpot = (e) => {
    console.log(user);
      e.preventDefault();
      const currentDate = new Date();
      const options = { day: "numeric", month: "long", year: "numeric" };
      const postedTime = currentDate.toLocaleDateString("en-US", options);
    const newBlog = {
      user,
      title,
        photoUrl,
        category,
        description,
     details,postedTime
    };
    fetch("https://blog-post-server-sable.vercel.app/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Your post has been added!");
        setTitle("");
        setPhotUrl("");
        setCategory("");
        setDescription("");
        setDetails("");
      });
  };
  return (
    <div className="hero  bg-[url('https://i.ibb.co/RBqvYpW/top-view-person-writing-laptop-with-copy-space.jpg')] bg-no-repeat bg-cover ">
      <Helmet>
        <title>POSTHEAT | Post Blog</title>
      </Helmet>
      <div className="hero-content min-h-screen flex-col p-3 rounded-xl">
        <div className="card shrink-0  shadow-2xl w-full bg-base-100">
          <div className="text-center lg:text-left mb-5">
            <h1 className="lg:text-5xl mt-5 text-center text-xl font-bold text-primaryNavy">
              Post your thoughts
            </h1>
            {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
          </div>
          <form
            className="card-body flex flex-col gap-2 "
            onSubmit={handleAddSpot}
          >
            <div className="flex flex-col lg:flex-row gap-10">
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    name="title"
                    placeholder="Title of your post"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    value={photoUrl}
                    onChange={(e) => setPhotUrl(e.target.value)}
                    placeholder="https://example.com"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="input input-bordered"
                    required
                    id=""
                    placeholder="Enter some description"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="input input-bordered"
                    required
                    id=""
                    placeholder="Enter some description"
                    cols="50"
                    rows="30"
                  ></textarea>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <select
                    className="select w-full select-ghost"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)} // Corrected onChange event handler
                    name="category"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Education">Education</option>
                    <option value="Sports">Sports</option>
                    <option value="News">News</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Travel">Travel</option>
                  </select>
                </div>
              </div>
            </div>
            <div className=" border-2 border-gray-600 p-3 mt-5 flex items-center gap-2 hover:bg-primaryBlue font-bold justify-center text-2xl rounded-full bg-primaryNavy  ">
              <MdOutlinePostAdd></MdOutlinePostAdd>
              <input type="submit" value="Create Post" id="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
