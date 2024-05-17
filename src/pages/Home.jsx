/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Submit from "../components/Submit";
import { FaBookOpen } from "react-icons/fa";

const Home = ({ setAng, ang }) => {
	const [a, setA] = useState(0);
	useEffect(() => {
		setAng(parseInt(a));
	}, [a, setAng]);
	return (
		<div className="bg-[url('src/assets/images/home-back.jpg')] bg-center h-[100vh] w-full flex flex-col items-center justify-center z-[2]">
			<h1 className="absolute left-[2%] top-[2%] text-[4vh] text-[#fffcea] rounded-full flex items-center gap-4">
				<FaBookOpen className="text-[#e4a33a]"/>
				Hukumnaama Sahib
			</h1>
			<div className="h-[50vh] w-[50vh] bg-[rgba(252,252,252,0.07)] border-white/40 border-[0.01px] hover:bg-[rgba(252,252,252,0.09)] flex flex-col items-center justify-center gap-[10%] text-[250%] shadow-xl hover:shadow-lg rounded-xl duration-1000 ease-linear z-[2]">
				<input
					type="text"
					className="p-4 text-center bg-transparent outline-none border-b-2 border-b-slate-600 w-[50%] focus:w-[60%] duration-500 ease-in-out text-white placeholder-slate-300 focus:placeholder-slate-100 focus:border-b-slate-100"
					onChange={(t) => {
						setA(t.target.value);
					}}
					placeholder="Enter Ang..."
				/>
				<Link to={!isNaN(ang) && `/search/${ang}`}>
					<Submit set={ang} />
				</Link>
        <h1 className="absolute right-[0.7%] bottom-[1%] text-[1.5vh] text-[#a1902f] rounded-full flex items-center gap-4 ">
          Contact for any bugs: +918287734576 or singhrramneek@gmail.com
			</h1>
			</div>
		</div>
	);
};

export default Home;
