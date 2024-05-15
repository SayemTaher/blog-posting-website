
import { useLoaderData } from 'react-router-dom';
import 'ka-table/style.css';
import { Table } from 'ka-table';
import { DataType, SortingMode } from 'ka-table/enums';
import { GrStatusInfo } from "react-icons/gr";

const Featured = () => {
    const posts = useLoaderData();

    console.log("Posts data:", posts); // Check the structure of the loaded data

    const dataArray = posts.map((post, index) => ({
        serialNumber: index + 1,
        title: post.title,
        owner: post.owner.displayName ? post.owner.displayName : 'Not Available',
        ownerEmail: post.owner.email,
        ownerProfilePicture: post.owner.photoURL ? post.owner.photoURL : 'Not Available',
        id: post.id
    }));

    console.log("Data Array:", dataArray); // Verify the array structure and image URLs

    const columns = [
        { key: 'serialNumber', title: 'Serial Number', dataType: DataType.Number },
        { key: 'title', title: 'Blog Title', dataType: DataType.String },
        { key: 'owner', title: 'Blog Owner', dataType: DataType.String },
        { key: 'ownerEmail', title: 'Email', dataType: DataType.String },
        {
            key: 'ownerProfilePicture',
            title: 'Profile Picture',
            dataType: DataType.String,
            cell: ({ rowData }) => (
                rowData.ownerProfilePicture !== 'Not Available' ? (
                    <img src={rowData.ownerProfilePicture} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                ) : 'Not Available'
            )
        }
    ];

    return (
        <div className='pt-20 pb-20'>
            <div className='pt-5 pb-10'>
                <h1 className='text-2xl lg:text-4xl font-semibold text-center w-[300px] bg-green-100 p-3 rounded-full text-green-600 '>Top 10 Blogs </h1>
                <div className='bg-blue-100 p-2 max-w-[650px] rounded-xl text-lg mt-5 text-center flex gap-2 items-center'>
                    <GrStatusInfo></GrStatusInfo>
                    <span>Top posts are calculated based on the length of the blog description</span>

                </div>
            </div>
            <Table
                columns={columns}
                data={dataArray}
                rowKeyField="id"
                sortingMode={SortingMode.None}
            />
        </div>
    );
};

export default Featured;
