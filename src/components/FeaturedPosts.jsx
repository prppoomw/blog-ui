import React from 'react';
import Image from "./Image.jsx";
import {Link} from "react-router";

const FeaturedPosts = () => {
    return (
        <div className="mt-16 flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <Image src="rps-ep1.webp" className="rounded-xl object-cover" width="895"/>
                <div className="flex items-center gap-4">
                    <h1 className="font-semibold lg:text-lg">01.</h1>
                    <Link to="../posts?category=SpringBoot" className="text-blue-600 lg:text-lg" >Spring Boot</Link>
                    <span className="text-slate-400">2 days ago</span>
                </div>
                <Link to="../test" className="text-xl lg:text-3xl font-semibold lg:font-bold">สร้างเกมเป่ายิ้งฉุบด้วย Java Spring Boot, MySql, Kafka, Redis, Vite + React EP.1</Link>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <Image src="rps-ep2.webp" className="rounded-xl object-cover w-full h-full" width="298"/>
                    </div>
                    <div className="w-2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">02.</h1>
                            <Link to="../posts?category=SpringBoot" className="text-blue-600">Spring Boot</Link>
                            <span className="text-slate-400 text-sm">2 days ago</span>
                        </div>
                        <Link to="../test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">สร้างเกมเป่ายิ้งฉุบด้วย Java Spring Boot, MySql, Kafka, Redis, Vite + React EP.2</Link>
                    </div>
                </div>
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <Image src="kafka-ep1.webp" className="rounded-xl object-cover w-full h-full" width="298"/>
                    </div>
                    <div className="w-2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">03.</h1>
                            <Link to="../posts?category=Kafka" className="text-blue-600">Kafka</Link>
                            <span className="text-slate-400 text-sm">3 days ago</span>
                        </div>
                        <Link to="../test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Basic Kafka</Link>
                    </div>
                </div>
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <Image src="kafka-ep2.webp" className="rounded-3xl object-cover w-full h-full" width="298"/>
                    </div>
                    <div className="w-2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">04.</h1>
                            <Link to="../posts?category=Kafka" className="text-blue-600">Kafka</Link>
                            <span className="text-slate-400 text-sm">3 days ago</span>
                        </div>
                        <Link to="../test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Kafka Broker & Replication</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedPosts;