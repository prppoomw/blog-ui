import React from 'react';
import PostList from "../components/PostList.jsx";
import MainCategories from "../components/MainCategories.jsx";

const PostListPage = () => {
    return (
        <div>
            <MainCategories />
            <h1 className="mt-8 mb-8 my-8 text-2xl text-slate-600">Spring Boot</h1>
            <div className="flex gap-8">
                <PostList />
            </div>
        </div>
    );
};

export default PostListPage;