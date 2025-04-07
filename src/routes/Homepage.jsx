import React from 'react';
import {Link} from "react-router";
import MainCategories from "../components/MainCategories.jsx";
import FeaturedPosts from "../components/FeaturedPosts.jsx";
import PostList from "../components/PostList.jsx";

const Homepage = () => {
    return (
        <div className="mt-4 flex flex-col gap-4">
            <div className="flex gap-4">
                <Link to="../">Home</Link>
                <span>•</span>
                <span className="text-slate-400">Blogs and Articles</span>
            </div>
            <div className="flex flex-col items-center text-center mt-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8">
                    <span className="inline-block mr-4">Inspire</span>
                    <span className="inline-block mr-4">Explore</span>
                    <span className="inline-block">Discover</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
                    Unlock a world of ideas, stories, and insights. Whether you're here to learn,
                    grow, or just get inspired, our blog has something for everyone.
                </p>
            </div>
            <MainCategories />
            {/*<FeaturedPosts />*/}
            <div className="mt-8">
                <h1 className="my-8 text-2xl text-slate-600">All Posts</h1>
                <PostList />
            </div>
        </div>
    );
};

export default Homepage;