import {useState} from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            <div className="flex items-center gap-4 text-2xl font-bold">
                <img src="/logo.svg" className="w-8 h-8" alt="" />
                <span>prppoomw</span>
            </div>
            <div className="md:hidden">
                <div className="cursor-pointer text-4xl" onClick={() => setIsOpen((prev) => !prev)}>
                    {isOpen ? "x" : "☰"}
                </div>
                <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${isOpen ? "-right-0" : "-right-[100%]"}`}>
                    <a href="/">Home</a>
                    <a href="/">Write</a>
                    <a href="/">
                        <button className="py-2 px-4 rounded-3xl bg-black text-white">Login</button>
                    </a>
                </div>
            </div>
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <a href="/">Home</a>
                <a href="/">Write</a>
                <a href="/">
                    <button className="py-2 px-4 rounded-3xl bg-black text-white">Login</button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;