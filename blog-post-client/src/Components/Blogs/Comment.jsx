import React from 'react';

const Comment = ({ comments }) => {
    const {comment,userPhoto,userName,userEmail,commentDate} = comments
    return (
        <div className='flex flex-col mt-5 mb-5 justify-between h-[220px] w-[full] bg-white border-blue-100 border-2 border-dashed rounded-xl p-5 '>
            <div className='flex gap-5 items-center'>
                <img src={userPhoto}  className="h-[100px] w-[100px] rounded-full" alt="profile" />
                <div>
                    <p className='bg-green-100 mb-2 rounded-full w-[150px] text-center p-1 text-blue-500'> { commentDate}</p>
                    <span className='text-2xl ml-2 pt-4 font-semibold'>{ userName}</span>
                    
                </div>
            </div>

            <div className='pt-4 pb-4'>
                <span className='text-blue-500 pb-4 font-bold '>Remarks</span>
                <p className='text-sm text-gray-600'>{ comment}</p>

            </div>
            
        </div>
    );
};

export default Comment;