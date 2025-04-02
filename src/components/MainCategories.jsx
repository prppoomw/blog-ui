import React from 'react';
import {Link} from "react-router";

const MainCategories = () => {
    return (
        <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8 mt-4">
            <div className="flex-1 flex items-center justify-between flex-wrap">
                <Link to="../posts" className="bg-slate-900 text-white rounded-full px-4 py-2">All Topic</Link>
                <Link to="../posts?category=Kafka" className="hover:bg-slate-100 rounded-full px-4 py-2">Kafka</Link>
                <Link to="../posts?category=Java" className="hover:bg-slate-100 rounded-full px-4 py-2">Java</Link>
                <Link to="../posts?category=SpringBoot" className="hover:bg-slate-100 rounded-full px-4 py-2">Spring Boot</Link>
                <Link to="../posts?category=React" className="hover:bg-slate-100 rounded-full px-4 py-2">React</Link>
                <Link to="../posts?category=database" className="hover:bg-slate-100 rounded-full px-4 py-2">Database</Link>
            </div>
            <span className="text-xl font-medium">|</span>
            <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="gray"
                >
                    <circle cx="10.5" cy="10.5" r="7.5"/>
                    <line x1="16.5" y1="16.5" x2="22" y2="22"/>
                </svg>
                <input type="text" placeholder="search" className="bg-transparent"/>
            </div>
        </div>
    );
};

export default MainCategories;