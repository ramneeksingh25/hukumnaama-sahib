import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Navbar = () => {
    useGSAP(()=>{
        var tl=gsap.timeline({paused :true})
        tl.to("#icon",{
            rotate:100,
            x:-100,
            duration:0.3,
            opacity:0,
        },"+=0.3")
        tl.from("#menu",{
            x:1000,
            duration:0.3
        })
        document.querySelector("#icon").addEventListener("click",()=>{
            tl.play();
        })
        document.querySelector(".close").addEventListener("click",()=>{
            tl.reverse();
        });
    })
	return (
		<div className="fixed right-1 top-0 ">
            <div id="nav" className="text-white flex justify-end z-[100] h-[100%] w-full">
                <div id="icon" 
                className="p-2 bg-black border-white border-[1px] cursor-pointer rounded-full m-3 text-[1vw] flex items-center justify-center z-9">
                    <HiMenu/>
                </div>
                <div id="menu" className="absolute m-2 bg-black border-white border-[1px] gap-10 px-5 py-3 text-[200%] flex items-center justify-between rounded-full top-0 z-0">
                    <div className="home hover:text-slate-500">
                        <Link to="/" >
                            <AiFillHome />
                        </Link>
                    </div>
                    {/* DARK MODE */}
                    {/* <div className="dark cursor-pointer hover:text-slate-500">
                        <IoMoon/>
                    </div> */}
                    {/* <div className="dark cursor-pointer hover:text-slate-500">
                        <FaLanguage/>
                    </div> */}
                    <div className="close cursor-pointer hover:text-slate-500">
                        <IoIosCloseCircle/>
                    </div>
                </div>
            </div>
        </div>
	);
};

export default Navbar;
