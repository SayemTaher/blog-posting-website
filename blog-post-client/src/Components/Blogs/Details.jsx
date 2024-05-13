import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const loadedBlogdata = useLoaderData()
    const { _id, title, photoUrl, category, description, details, postedTime } =
      loadedBlogdata;
    return (
        <div className='min-h-screen pt-20 '>
            <h1>Showing data for id : { _id}</h1>
            
        </div>
    );
};

export default Details;