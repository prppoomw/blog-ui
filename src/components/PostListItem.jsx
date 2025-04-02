import React from 'react';
import Image from "./Image.jsx";
import {Link} from "react-router";

const PostListItem = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-8">
            <div className="md:hidden xl:block xl:w-1/3">
                <Image src="kafka-ep2.webp" className="rounded-2xl object-cover" w="735" />
            </div>
            <div className="flex flex-col gap-4 xl:w-2/3">
                <Link to="../test" className="text-4xl font-semibold">Kafka Broker & Replication</Link>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <span>Written by</span>
                    <Link to="../" className="text-blue-600">prppoomw</Link>
                    <span>3 days ago</span>
                </div>
                <p>จาก บทความก่อนหน้า ที่เราได้มีการพูดถึง Kafka กันไปและมีการพูดถึง Topics, Partitions และ Offsets
                    กันไปแล้วในบทความนี้เราจะมาพูดถึงเจ้า Kafka Broker และการทำ Replication กัน</p>
                <Link to="../test" className="underline text-blue-600 text-sm">Read More</Link>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <span>Topic:</span>
                    <Link to="../" className="text-blue-600">Spring Boot</Link>
                    <Link to="../" className="text-blue-600">Java</Link>
                    <Link to="../" className="text-blue-600">Kafka</Link>
                </div>
            </div>
        </div>
    );
};

export default PostListItem;