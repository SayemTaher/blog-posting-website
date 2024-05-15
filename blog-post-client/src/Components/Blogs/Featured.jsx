
import { useLoaderData } from 'react-router-dom';
import 'ka-table/style.css';
import { Table } from 'ka-table';
import { DataType, SortingMode } from 'ka-table/enums';

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
