import { blogs } from '@/app/data/blogs';
import React from 'react';

export async function generateStaticParams(){
    return blogs.map(blog=>({
        id:blog.id
    }))
}


const SingleBlog = ({params}) => {
    console.log("rendaring single blog");
    const {id}=params;
    const blog = blogs.find(blog=>blog.id===id);
    const {title,description} =blog;
    return (
        <div className='p-8'>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="mt-6">{description}</p>
        </div>
    );
};

export default SingleBlog;