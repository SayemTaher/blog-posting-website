import React from 'react';

const random = () => {
    return (
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
        
    );
};

export default random;