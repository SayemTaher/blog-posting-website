import React, { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';


const Update = () => {
   
    const data = useLoaderData()
    const [inputTitle, setTitle] = useState("");
    const [inputPhotoUrl, setPhotUrl] = useState("");
    const [inputCategory, setCategory] = useState("");
    const [inputDescription, setDescription] = useState("");
    const [inputDetails, setDetails] = useState("");
    const currentDate = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    const updatedTime = currentDate.toLocaleDateString("en-US", options);

    const { _id,
       title,
       category,
        description,
       photoUrl,
       details,
    } = data
    console.log(data)
    
    const modifiedData = {
        inputTitle,inputCategory,inputDescription,inputDetails,inputPhotoUrl,updatedTime
    }
    

    const handleUpdate = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/blogs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
                
            },
            body:JSON.stringify(modifiedData)
         })
           .then((res) => res.json())
           .then((data) => {
             console.log(data);
             toast.success("Blog Updated Successfully!");
           });
       
    }

    return (
      <div className="pt-20 ">
        <img
                src="https://i.ibb.co/RBqvYpW/top-view-person-writing-laptop-with-copy-space.jpg"
                className='h-[400px] object-cover w-full'
          alt=""
        />
        <div className='flex gap-5 items-center justify-center mt-10 mb-10 '>
          <div className='flex gap-2 flex-col'>
            <h1 className='text-2xl lg:text-4xl font-semibold text-colorNavy'>Update Details Here</h1>
            <p className='text-gray-600 text-sm w-[400px]'>We respect your privacy and we allow you to share your thoughts whenever you want</p>
          </div>
          <div className='border-2 border-gray-600 border-dashed rounded-md'>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
              <h2 class="text-lg font-semibold text-gray-700 capitalize ">
                Update Blog Details
              </h2>

              <form onSubmit={handleUpdate}>
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label
                      className="text-gray-700 "
                      for="username"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      defaultValue={title}
                      value={inputTitle}
                      onChange={(e) => setTitle(e.target.value)}
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Category</span>
                    </label>
                    <select
                      className="select w-full select-ghost"
                      value={inputCategory}
                      defaultValue={category}
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

                  <div>
                    <label
                      className="text-gray-700 "
                      for="password"
                    >
                      PhotUrl
                    </label>
                    <input
                                        value={inputPhotoUrl}
                                        onChange={e => setPhotUrl(e.target.value)}
                                        defaultValue={photoUrl}
                      type="text"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <textarea
                      type="text"
                      name="description"
                      value={inputDescription}
                      defaultValue={description}
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
                      name="details"
                      defaultValue={details}
                      value={inputDetails}
                      onChange={(e) => setDetails(e.target.value)}
                      className="input input-bordered"
                      required
                      id=""
                      placeholder="Enter some description"
                      cols="50"
                      rows="30"
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Save
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    );
};

export default Update;