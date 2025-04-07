import React from 'react';
import Image from "../components/Image.jsx";
import {Link, useParams} from "react-router";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {format} from "timeago.js";

const fetchPost = async (slug) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/post/${encodeURIComponent(slug)}`);
    return res.data;
};

const SinglePostPage = () => {

    const { slug } = useParams();

    const { isPending, error, data } = useQuery({
        queryKey: ["post", slug],
        queryFn: () => fetchPost(slug),
    });

    if (isPending) return "loading...";
    if (error) return "Something went wrong!" + error.message;
    if (!data) return "Post not found!";

    const categories = data.category || [];

    return (
        <div className="flex flex-col gap-8 mt-16">
            <div className="flex gap-8">
                <div className="lg:w-3/5 flex flex-col gap-8">
                    <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">{data.title}</h1>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <span>Written by</span>
                        <Link to="../" className="text-blue-600">{data.username}</Link>
                        <span>{format(data.createdAt)}</span>
                    </div>
                    <p>{data.desc}</p>
                </div>
                {data.img && <div className="hidden lg:block w-2/5">
                    <Image src={data.img} w="600" className="rounded-2xl"/>
                </div>}
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <div
                    className="lg:text-lg flex flex-col gap-6 text-justify"
                    dangerouslySetInnerHTML={{__html: data.content}}
                />
            </div>
            <div className="mt-8 flex items-center gap-3 text-slate-400 text-sm">
                <span>Categories: </span>
                {categories.map((topic) => (
                    <Link key={topic} to={`../posts?category=${topic}`} className="text-blue-600">
                        {topic}
                    </Link>
                ))}
            </div>
            <div className="mt-4 mb-16 flex flex-col gap-8">
                <div>
                    <h2 className="text-xl font-semibold mb-4">Author</h2>
                    <div className="flex items-center gap-4">
                        <img src={data.userImg} className="w-12 h-12 rounded-full object-cover" width="48" height="48" alt="User Avatar"/>
                        <div>
                            <Link to="../" className="text-black font-medium hover:text-blue-600">{data.username}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePostPage;