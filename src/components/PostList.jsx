import React from 'react';
import PostListItem from "./PostListItem.jsx";
import {useInfiniteQuery} from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import {useSearchParams} from "react-router";

const fetchPosts = async (pageParam, searchParams) => {
    const searchParamsObj = Object.fromEntries([...searchParams]);

    console.log(searchParamsObj);

    const res = await axios.get(`${import.meta.env.VITE_API_URL}/post/search`, {
        params: { page: pageParam, limit: 10, ...searchParamsObj },
    });
    return res.data;
};

const PostList = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
    } = useInfiniteQuery({
        queryKey: ["posts", searchParams.toString()],
        queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, searchParams),
        initialPageParam: 1,
        getNextPageParam: (lastPage, pages) => lastPage.hasMore ? pages.length + 1 : undefined,
    })

    console.log(data)

    if (isFetching) return "Loading...";

    if (error) return "Something went wrong!";

    const allPosts = data?.pages?.flatMap((page) => page.posts || []) || [];

    if (allPosts.length === 0) {
        return <div>No posts found</div>;
    }

    console.log(data)
    return (
        <InfiniteScroll
            dataLength={allPosts.length}
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={<h4>Loading more posts...</h4>}
        >
            {allPosts.map((post) => (
                <PostListItem key={post._id} post={post} />
            ))}
        </InfiniteScroll>
    );
};

export default PostList;