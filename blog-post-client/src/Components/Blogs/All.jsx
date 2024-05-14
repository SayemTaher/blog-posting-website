import React from 'react';
import { useLoaderData } from 'react-router-dom';

const All = () => {
    const loadedData = useLoaderData()
    console.log(loadedData)

    return (
      <div className="pt-20 ">
        <div className="border-b-2 border-dashed border-blue-100 ">
          <h1 className="text-2xl taxt text-colorNavy pb-5 lg:text-4xl font-bold">
            Number of posted Blogs -{" "}
            <span className="text-green-600 bg-green-100 p-2 rounded-xl">
              {loadedData.length}
            </span>{" "}
          </h1>
        </div>
      </div>
    );
};

export default All;