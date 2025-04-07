import React from 'react';
import PostList from "../components/PostList.jsx";
import MainCategories from "../components/MainCategories.jsx";

const PostListPage = () => {
    return (
        <div>
            <MainCategories />
            <div className="mt-16 mb-8 my-8 text-2xl text-slate-600"></div>
            <div className="flex gap-8">
                <PostList />
            </div>
        </div>
    );
};

export default PostListPage;