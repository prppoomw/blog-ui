import React from 'react';
import {Link} from "react-router";
import Search from "./Search.jsx";

const MainCategories = () => {
    return (
        <div className="md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8 mt-4">
            <div className="flex-1 flex items-center justify-between flex-wrap">
                <Link to="../posts" className="bg-slate-900 text-white rounded-full px-4 py-2">All Topic</Link>
                <Link to="../posts?category=Kafka" className="hover:bg-slate-100 rounded-full px-4 py-2">Kafka</Link>
                <Link to="../posts?category=Java" className="hover:bg-slate-100 rounded-full px-4 py-2">Java</Link>
                <Link to="../posts?category=Spring%20Boot" className="hover:bg-slate-100 rounded-full px-4 py-2">Spring Boot</Link>
                <Link to="../posts?category=React" className="hover:bg-slate-100 rounded-full px-4 py-2">React</Link>
                <Link to="../posts?category=database" className="hover:bg-slate-100 rounded-full px-4 py-2">Database</Link>
            </div>
            <span className="text-xl font-medium">|</span>
            <Search />
        </div>
    );
};

export default MainCategories;