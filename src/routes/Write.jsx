import React, {useState, useEffect} from 'react';
import {useAuth, useUser} from "@clerk/clerk-react";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import axios from "axios";
import {useMutation} from "@tanstack/react-query";
import {useNavigate} from "react-router";
import {toast} from "react-toastify";
import Upload from "../components/Upload.jsx";

const Write = () => {

    const {isLoaded, isSignedIn} = useUser()

    const [topics, setTopics] = useState([]);
    const [newTopic, setNewTopic] = useState("");
    const [selectedTopics, setSelectedTopics] = useState([]);

    const [value, setValue] = useState('');

    const {getToken} = useAuth()
    const [cover, setCover] = useState("");
    const [progress, setProgress] = useState(0);

    const [img, setImg] = useState("");
    const [video, setVideo] = useState("");

    const navigate = useNavigate()

    useEffect(() => {
        img && setValue((prev) => prev + `<p><image src="${img.url}"/></p>`);
    }, [img]);

    useEffect(() => {
        video &&
        setValue(
            (prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`
        );
    }, [video]);

    const mutation = useMutation({
        mutationFn: async (newPost) => {
            const token = await getToken();
            return axios.post(`${import.meta.env.VITE_API_URL}/post`, newPost, {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            })
        },
        onSuccess: (res) =>{
            toast.success("Post has been created")
            navigate(`/${res.data.slug}`)
        }
    })

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

    const handleSubmit = e=>{
        e.preventDefault()
        const formData = new FormData(e.target);

        const data = {
            title: formData.get("title"),
            img: cover.filePath || "",
            slug: formData.get("title").replace(/ /g, "-").toLowerCase(),
            category: selectedTopics,
            desc: formData.get("desc"),
            content: value,
        }
        console.log(data)
        mutation.mutate(data)
    }

    return (
        <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flec flex-col gap-6 mt-4">
            <h1 className="text-4xl font-bold mb-8">Create a New Post</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-8">
                <Upload type="image" setProgress={setProgress} setData={setCover}>
                    <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white" type="button">
                        Add a cover image
                    </button>
                </Upload>
                <input className="text-4xl font-semibold bg-transparent outline-none mt-4" type="text"
                       placeholder="Your Awesome Story" name="title"/>
                <div className="mt-4">
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex flex-wrap gap-2">
                            <input className="w-64 p-2 border rounded"
                                   type="text" placeholder="Add a new topic or category" value={newTopic}
                                   onChange={(e) => setNewTopic(e.target.value)}/>
                            <button onClick={handleAddTopic} className="bg-blue-500 text-white px-8 py-2 rounded">Add
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-2">
                        {selectedTopics.map((topic) => (
                            <div key={topic}
                                 className="flex items-center bg-slate-200 hover:bg-slate-400 rounded-lg px-2 py-1 transition-colors">
                                <span className="mr-2">{topic}</span>
                                <button onClick={() => removeTopic(topic)} type="button" className="text-slate-600">✕
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <textarea className="p-4 rounded-xl bg-white shadow-md mt-8" name="desc"
                          placeholder="A short description"/>

                <div className="flex flex-1 ">
                    <div className="flex flex-col gap-2 mr-2">
                        <Upload type="image" setProgress={setProgress} setData={setImg}>
                            🌠
                        </Upload>
                        <Upload type="video" setProgress={setProgress} setData={setVideo}>
                            📹
                        </Upload>
                    </div>
                    <ReactQuill
                        theme="snow"
                        className="flex-1 rounded-xl bg-white shadow-md"
                        value={value}
                        onChange={setValue}
                        readOnly={0 < progress && progress < 100}
                    />
                </div>

                <button disabled={mutation.isPending || (0 < progress && progress < 100)}
                        className="bg-blue-500 text-white rounded mt-4 px-8 py-2 w-36 disabled:bg-blue-300 disabled:cursor-not-allowed">{mutation.isPending ? "Publishing" : "Published"}</button>
                {"Progress:" + progress}
                {/*{mutation.isError && <span>{mutation.error.message}</span>}*/}
            </form>
        </div>
    );
};

export default Write;