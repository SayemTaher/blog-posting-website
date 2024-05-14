import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TotalBlog from "./TotalBlog";

const All = () => {
  const loadedData = useLoaderData();

  // Initialize search state
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/blogs?searchText=${searchText}`
      );
      const data = await response.json();
      console.log("Search Result:", data);
      setSearchResults(data); // Update state with search results
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="pt-20 ">
      <div className="flex pl-4 pr-5 -mt-3  bg-white items-center fixed z-50 w-full container mx-auto  justify-between border-b-2  border-gray-200 pb-5">
        <div className="flex items-center w-full justify-between">
          <div className="pt-5">
            <p className="mb-2 text-colorNavy text-lg font-semibold">
              Search items by Blog title{" "}
            </p>
            <div>
              <label className="input input-bordered max-w-[700px] flex items-center gap-2">
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="grow"
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <button
                className="btn btn-primary text-white"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
          {/* Filter by category dropdown */}
          <div className="pt-5">
            <p className="mb-2 text-blue-600 text-lg font-semibold">
              Filter by Category
            </p>
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-white border-2 border-gray-300 m-1"
              >
                Select an Item
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] border-2 border-blue-400 menu p-2 shadow bg-white rounded-xl w-52"
              >
                <li>
                  <button onClick={() => handleCategoryChange("Education")}>
                    Education
                  </button>
                </li>
                <li>
                  <button onClick={() => handleCategoryChange("News")}>
                    News
                  </button>
                </li>
                <li>
                  <button onClick={() => handleCategoryChange("Sports")}>
                    Sports
                  </button>
                </li>
                <li>
                  <button onClick={() => handleCategoryChange("Fashion")}>
                    Fashion
                  </button>
                </li>
                <li>
                  <button onClick={() => handleCategoryChange("Travel")}>
                    Travel
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 bg-white border-dashed border-blue-200 pt-48 ">
        <h1 className="text-2xl taxt text-colorNavy pb-5 lg:text-4xl font-bold">
          Number of posted Blogs -{" "}
          <span className="text-green-600 bg-green-100 p-2 rounded-xl">
            {loadedData.length}
          </span>{" "}
        </h1>
      </div>

      <div className="flex flex-col gap-5 pt-5">
        {searchResults.length > 0
          ? searchResults.map((data) => (
              <TotalBlog key={data._id} data={data} />
            ))
          : loadedData.map((data) => <TotalBlog key={data._id} data={data} />)}
      </div>
    </div>
  );
};

export default All;
