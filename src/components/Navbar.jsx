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
            duration:0.3
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
		<div className="fixed right-1 top-0">
            <div id="nav" className="text-white flex justify-end z-[100]">
                <div id="icon" 
                className="h-[2vw] w-[2vw] bg-slate-900 rounded-full m-5 text-[1vw] flex items-center justify-center">
                    <HiMenu/>
                </div>
                <div id="menu" className="absolute m-0 p-10 bg-slate-800 h-[30vh] w-[5%] text-[200%] flex flex-col-reverse items-center justify-between rounded-full">
                    <h1>
                        <Link to="/">
                        <AiFillHome/>
                        </Link>
                    </h1>
                    <div className="close">
                        <IoIosCloseCircle/>
                    </div>

                </div>
            </div>
        </div>
	);
};

export default Navbar;
