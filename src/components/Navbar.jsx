import {useState} from 'react';
import Image from "./Image.jsx";
import {Link} from "react-router";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            <Link to="../" className="flex items-center gap-4 text-2xl font-bold">
                <Image src="logo.svg" alt="prppoomw blog logo" w={32} h={32}/>
                <span>prppoomw</span>
            </Link>
            <div className="md:hidden">
                <div className="cursor-pointer text-4xl" onClick={() => setIsOpen((prev) => !prev)}>
                    {isOpen ? "x" : "☰"}
                </div>
                <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${isOpen ? "-right-0" : "-right-[100%]"}`}>
                    <Link to="../">Home</Link>
                    <Link to="../write">Write</Link>
                    <Link to="../login">
                        <button className="py-2 px-4 rounded-3xl bg-black text-white">Login</button>
                    </Link>
                </div>
            </div>
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <Link to="../">Home</Link>
                <Link to="../write">Write</Link>
                <SignedOut>
                    <Link to="../login">
                        <button className="py-2 px-4 rounded-3xl bg-black text-white">Login</button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    );
};

export default Navbar;