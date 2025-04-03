import React, {useState} from 'react';
import {useUser} from "@clerk/clerk-react";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const Write = () => {

    const {isLoaded, isSignedIn} = useUser()
    const [topics, setTopics] = useState([]);
    const [newTopic, setNewTopic] = useState("");
    const [selectedTopics, setSelectedTopics] = useState([]);

    if(!isLoaded) {
        return <div className="">Loading...</div>
    }

    if(isLoaded && !isSignedIn) {
        return <div className="">You should login</div>
    }

    const handleAddTopic = (e) => {
        e.preventDefault();
        if (newTopic.trim() !== "" && !topics.includes(newTopic.trim())) {
            setTopics([...topics, newTopic.trim()]);
            setSelectedTopics([...selectedTopics, newTopic.trim()]);
            setNewTopic("");
        }
    };

    const removeTopic = (topicToRemove) => {
        setSelectedTopics(selectedTopics.filter(topic => topic !== topicToRemove));
    };

    return (
        <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flec flex-col gap-6 mt-4">
            <h1 className="text-4xl font-bold mb-8">Create a New Post</h1>
            <form className="flex flex-col gap-6 flex-1 mb-8">
                <button className="w-max p-2 shadow-md rounded-xl text-sm text-slate-400 bg-white mt-4">Add a cover image</button>
                <input className="text-4xl font-semibold bg-transparent outline-none mt-4" type="text" placeholder="Your Awesome Story"/>
                <div className="mt-4">
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex flex-wrap gap-2">
                            <input className="w-64 p-2 border rounded"
                                type="text" placeholder="Add a new topic or category" value={newTopic} onChange={(e) => setNewTopic(e.target.value)}/>
                            <button onClick={handleAddTopic} className="bg-blue-500 text-white px-8 py-2 rounded">Add</button>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-2">
                        {selectedTopics.map((topic) => (
                            <div key={topic}
                                 className="flex items-center bg-slate-200 hover:bg-slate-400 rounded-lg px-2 py-1 transition-colors">
                                <span className="mr-2">{topic}</span>
                                <button onClick={() => removeTopic(topic)} type="button" className="text-slate-600">✕</button>
                            </div>
                        ))}
                    </div>
                </div>
                <textarea className="p-4 rounded-xl bg-white shadow-md mt-8" name="description" placeholder="A short description"/>
                <ReactQuill theme="snow" className="flex-1 rounded-xl bg-white shadow-md"/>
                <button className="bg-blue-500 text-white rounded mt-4 px-8 py-2 w-36">Publish</button>
            </form>
        </div>
    );
};

export default Write;