import React from 'react';
import Image from "../components/Image.jsx";
import {Link} from "react-router";

const SinglePostPage = () => {
    return (
        <div className="flex flex-col gap-8 mt-16">
            <div className="flex gap-8">
                <div className="lg:w-3/5 flex flex-col gap-8">
                    <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">สร้างเกมเป่ายิ้งฉุบด้วย
                        Java Spring Boot, MySql, Kafka, Redis, Vite + React EP.1</h1>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <span>Written by</span>
                        <Link to="../" className="text-blue-600">prppoomw</Link>
                        <span>2 days ago</span>
                    </div>
                    <p>สวัสดีครับ ก็จาก บทความก่อน ที่เราได้เขียนไปตอนที่เราฝึกใช้ stack พวกนี้สมัยเรียน
                        พอเรากลับมาอ่านอีกทีก็รู้สึกว่าเขียนอะไรไปก็ไม่รู้ อ่านไม่ค่อยรู้เรื่องเลย
                        บวกกับช่วงนี้พึ่งเรียนจบแล้วว่างๆเลยหยิบของที่เคยทำขึ้นมาดูก็เลยกลายเป็นว่า refactor ไปเลยละกัน
                        ไหนๆก็แล้วก็เลยเขียนบทความใหม่ด้วยเลย</p>
                </div>
                <div className="hidden lg:block w-2/5">
                    <Image src="rps-ep1.webp" w="600" className="rounded-2xl"/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="lg:text-lg flex flex-col gap-6 text-justify">
                    <p>
                        โดยก่อนเริ่มแต่ละส่วน เดี๋ยวขออธิบาย Flow ทั้งหมดคราวๆก่อนนะครับว่าแต่ละส่วนจะทำอะไรบ้าง
                        เริ่มต้นที่ส่วนแรก UI ครับซึ่งจะเป็น frontend ของเราหลักๆคือก็คอยเรียก api ที่ service
                        ครับเพื่อส่งข้อมูลไปประมวลผลและรับ response กลับมาใช้ในการแสเงผลครับ ส่วนที่ 2 จะเป็น Service
                        Producer ครับโดยส่วนนี้จะทำหน้าที่หลักในส่วนของ logic
                        ของเกมเป่ายิ้งฉุบครับเมื่อได้ผลลัพธ์แล้วก็จะทำการส่งข้อมูลต่อไปยัง Kafka ซึ่งเป็น Message Broker
                        ครับ ส่วนที่ 3 ครับเป็น Service Consumer ก็จะทำการคอยดึงข้อมูลจาก Kafka
                        ออกมาทำการประมวลผลแล้วก็คอยบันทึกลงไปที่ Database(MySql) และ Cache(Redis) ครับซึ่งก็จะมี api
                        ที่คอยส่งข้อมูลคืนกลับไปที่ฝั่ง front end ด้วยเช่นกันโดยจะเป็นพวก score และ history ครับ ส่วน
                        Kafka ก็มีไว้กระจายข้อมูลระหว่าง Service ครับ Redis ก็ไว้ทำ Caching เพื่อลดการทำงานกับ Database
                        แล้วก็ MySql ก็เป็น Database สำหรับเก็บข้อมูลหลักของเราครับ ก็คราวๆประมาณนี้ครับ
                    </p>
                    <p>
                        โดยก่อนเริ่มแต่ละส่วน เดี๋ยวขออธิบาย Flow ทั้งหมดคราวๆก่อนนะครับว่าแต่ละส่วนจะทำอะไรบ้าง
                        เริ่มต้นที่ส่วนแรก UI ครับซึ่งจะเป็น frontend ของเราหลักๆคือก็คอยเรียก api ที่ service
                        ครับเพื่อส่งข้อมูลไปประมวลผลและรับ response กลับมาใช้ในการแสเงผลครับ ส่วนที่ 2 จะเป็น Service
                        Producer ครับโดยส่วนนี้จะทำหน้าที่หลักในส่วนของ logic
                        ของเกมเป่ายิ้งฉุบครับเมื่อได้ผลลัพธ์แล้วก็จะทำการส่งข้อมูลต่อไปยัง Kafka ซึ่งเป็น Message Broker
                        ครับ ส่วนที่ 3 ครับเป็น Service Consumer ก็จะทำการคอยดึงข้อมูลจาก Kafka
                        ออกมาทำการประมวลผลแล้วก็คอยบันทึกลงไปที่ Database(MySql) และ Cache(Redis) ครับซึ่งก็จะมี api
                        ที่คอยส่งข้อมูลคืนกลับไปที่ฝั่ง front end ด้วยเช่นกันโดยจะเป็นพวก score และ history ครับ ส่วน
                        Kafka ก็มีไว้กระจายข้อมูลระหว่าง Service ครับ Redis ก็ไว้ทำ Caching เพื่อลดการทำงานกับ Database
                        แล้วก็ MySql ก็เป็น Database สำหรับเก็บข้อมูลหลักของเราครับ ก็คราวๆประมาณนี้ครับ
                    </p>
                    <p>
                        โดยก่อนเริ่มแต่ละส่วน เดี๋ยวขออธิบาย Flow ทั้งหมดคราวๆก่อนนะครับว่าแต่ละส่วนจะทำอะไรบ้าง
                        เริ่มต้นที่ส่วนแรก UI ครับซึ่งจะเป็น frontend ของเราหลักๆคือก็คอยเรียก api ที่ service
                        ครับเพื่อส่งข้อมูลไปประมวลผลและรับ response กลับมาใช้ในการแสเงผลครับ ส่วนที่ 2 จะเป็น Service
                        Producer ครับโดยส่วนนี้จะทำหน้าที่หลักในส่วนของ logic
                        ของเกมเป่ายิ้งฉุบครับเมื่อได้ผลลัพธ์แล้วก็จะทำการส่งข้อมูลต่อไปยัง Kafka ซึ่งเป็น Message Broker
                        ครับ ส่วนที่ 3 ครับเป็น Service Consumer ก็จะทำการคอยดึงข้อมูลจาก Kafka
                        ออกมาทำการประมวลผลแล้วก็คอยบันทึกลงไปที่ Database(MySql) และ Cache(Redis) ครับซึ่งก็จะมี api
                        ที่คอยส่งข้อมูลคืนกลับไปที่ฝั่ง front end ด้วยเช่นกันโดยจะเป็นพวก score และ history ครับ ส่วน
                        Kafka ก็มีไว้กระจายข้อมูลระหว่าง Service ครับ Redis ก็ไว้ทำ Caching เพื่อลดการทำงานกับ Database
                        แล้วก็ MySql ก็เป็น Database สำหรับเก็บข้อมูลหลักของเราครับ ก็คราวๆประมาณนี้ครับ
                    </p>
                    <p>
                        โดยก่อนเริ่มแต่ละส่วน เดี๋ยวขออธิบาย Flow ทั้งหมดคราวๆก่อนนะครับว่าแต่ละส่วนจะทำอะไรบ้าง
                        เริ่มต้นที่ส่วนแรก UI ครับซึ่งจะเป็น frontend ของเราหลักๆคือก็คอยเรียก api ที่ service
                        ครับเพื่อส่งข้อมูลไปประมวลผลและรับ response กลับมาใช้ในการแสเงผลครับ ส่วนที่ 2 จะเป็น Service
                        Producer ครับโดยส่วนนี้จะทำหน้าที่หลักในส่วนของ logic
                        ของเกมเป่ายิ้งฉุบครับเมื่อได้ผลลัพธ์แล้วก็จะทำการส่งข้อมูลต่อไปยัง Kafka ซึ่งเป็น Message Broker
                        ครับ ส่วนที่ 3 ครับเป็น Service Consumer ก็จะทำการคอยดึงข้อมูลจาก Kafka
                        ออกมาทำการประมวลผลแล้วก็คอยบันทึกลงไปที่ Database(MySql) และ Cache(Redis) ครับซึ่งก็จะมี api
                        ที่คอยส่งข้อมูลคืนกลับไปที่ฝั่ง front end ด้วยเช่นกันโดยจะเป็นพวก score และ history ครับ ส่วน
                        Kafka ก็มีไว้กระจายข้อมูลระหว่าง Service ครับ Redis ก็ไว้ทำ Caching เพื่อลดการทำงานกับ Database
                        แล้วก็ MySql ก็เป็น Database สำหรับเก็บข้อมูลหลักของเราครับ ก็คราวๆประมาณนี้ครับ
                    </p>
                    <p>
                        โดยก่อนเริ่มแต่ละส่วน เดี๋ยวขออธิบาย Flow ทั้งหมดคราวๆก่อนนะครับว่าแต่ละส่วนจะทำอะไรบ้าง
                        เริ่มต้นที่ส่วนแรก UI ครับซึ่งจะเป็น frontend ของเราหลักๆคือก็คอยเรียก api ที่ service
                        ครับเพื่อส่งข้อมูลไปประมวลผลและรับ response กลับมาใช้ในการแสเงผลครับ ส่วนที่ 2 จะเป็น Service
                        Producer ครับโดยส่วนนี้จะทำหน้าที่หลักในส่วนของ logic
                        ของเกมเป่ายิ้งฉุบครับเมื่อได้ผลลัพธ์แล้วก็จะทำการส่งข้อมูลต่อไปยัง Kafka ซึ่งเป็น Message Broker
                        ครับ ส่วนที่ 3 ครับเป็น Service Consumer ก็จะทำการคอยดึงข้อมูลจาก Kafka
                        ออกมาทำการประมวลผลแล้วก็คอยบันทึกลงไปที่ Database(MySql) และ Cache(Redis) ครับซึ่งก็จะมี api
                        ที่คอยส่งข้อมูลคืนกลับไปที่ฝั่ง front end ด้วยเช่นกันโดยจะเป็นพวก score และ history ครับ ส่วน
                        Kafka ก็มีไว้กระจายข้อมูลระหว่าง Service ครับ Redis ก็ไว้ทำ Caching เพื่อลดการทำงานกับ Database
                        แล้วก็ MySql ก็เป็น Database สำหรับเก็บข้อมูลหลักของเราครับ ก็คราวๆประมาณนี้ครับ
                    </p>
                </div>
            </div>
            <div className="mt-8 flex items-center gap-3 text-slate-400 text-sm">
                <span>Categories</span>
                <Link to="../" className="text-blue-600">Spring Boot</Link>
                <Link to="../" className="text-blue-600">Java</Link>
                <Link to="../" className="text-blue-600">Kafka</Link>
                <Link to="../" className="text-blue-600">React</Link>
                <Link to="../" className="text-blue-600">MySQL</Link>
            </div>
            <div className="mt-4 mb-16 flex flex-col gap-8">
                <div>
                    <h2 className="text-xl font-semibold mb-4">Author</h2>
                    <div className="flex items-center gap-4">
                        <Image src="userImg.jpeg" className="w-12 h-12 rounded-full object-cover" w="48" h="48"/>
                        <div>
                            <Link to="../" className="text-black font-medium hover:text-blue-600">prppoomw</Link>
                            <p className="text-sm text-slate-400">สวัสดีครับ ภูมินะครับ เขียนเล่นๆไว้แก้ว่าง555</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePostPage;