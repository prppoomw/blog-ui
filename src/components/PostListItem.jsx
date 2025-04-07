import React from 'react';
import Image from "./Image.jsx";
import {Link} from "react-router";
import { format } from "timeago.js";

const PostListItem = ({post}) => {
    const categories = post.category || [];

    return (
        <div className="flex flex-col xl:flex-row gap-8 mb-12">
            {post.img && <div className="md:hidden xl:block xl:w-1/3">
                <Image src={post.img} className="rounded-2xl object-cover" w="735" />
            </div>}
            <div className="flex flex-col gap-4 xl:w-2/3">
                <Link to={`../${post.slug}`} className="text-4xl font-semibold">{post.title}</Link>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <span>Written by</span>
                    <Link to="../" className="text-blue-600">{post.username}</Link>
                    <span>{format(post.createdAt)}</span>
                </div>
                <p>{post.desc}</p>
                <Link to={`../${post.slug}`} className="underline text-blue-600 text-sm">Read More</Link>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <span>Topic:</span>
                    {categories.map((topic) => (
                        <Link key={topic} to={`../posts?category=${topic}`} className="text-blue-600">
                            {topic}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostListItem;