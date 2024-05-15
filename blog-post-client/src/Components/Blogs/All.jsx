
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import TotalBlog from "./TotalBlog";

const All = () => {
  const [loadedData, setLoadedData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch all blogs when component mounts
    fetchAllBlogs();
  }, []);

  const fetchAllBlogs = async () => {
    try {
      const response = await fetch("http://localhost:3000/blogs");
      const data = await response.json();
      setLoadedData(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/blogs?searchText=${searchText}`
      );
      const data = await response.json();
      setSearchResults(data);
      setSearchText(""); // Clear search text
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const handleCategoryChange = async (category) => {
    try {
        const response = await fetch(`http://localhost:3000/blogs/category/${category}`);
        const data = await response.json();
        setSearchResults(data);
        if (data.length === 0) {
            toast.error('No data found! Displaying all!');
        }
    } catch (error) {
        console.error("Error fetching blogs by category:", error);
    }
};


  return (
    <div className="pt-20">
      <div className="flex pl-4 pr-5 -mt-3 bg-white items-center fixed z-50 w-full container mx-auto justify-between border-b-2 border-gray-200 pb-5">
        <div className="flex items-center w-full justify-between">
          <div className="pt-5">
            <p className="mb-2 text-colorNavy text-lg font-semibold">
              Search items by Blog title
            </p>
            <div>
              <label className="input input-bordered w-[300px] lg:w-[500px] rounded-full flex items-center gap-2">
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="grow"
                  placeholder="Search by blog title"
                />
                <button
                  onClick={handleSearch}
                  className="btn bg-blue-600 hover:bg-blue-700 -mr-5 rounded-full text-white w-[120px] text-center"
                >
                  Search
                </button>
              </label>
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
            {searchResults.length > 0
              ? searchResults.length
              : loadedData.length}
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
