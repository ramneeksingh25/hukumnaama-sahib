import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";
/* eslint-disable react/prop-types */
const Search = ({ ang, shabad, setShabad }) => {
	const url = `https://api.banidb.com/v2/angs/${ang}`;
	const [datas, setDatas] = useState({});
	const [isLoading, setisLoading] = useState(true);

	useGSAP(() => {
		gsap.to("#submit", {
			paused: true,
			duration: 0.3,
			x: 1000,
			y: 1000,
			scale: 0.5,
			opacity: 0,
			ease: "back.out(1.7)",
			stagger: {
				amount: 0.3,
			},
		});
	});
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(url);
			const data = await res.json();
			setDatas(data);
			setisLoading(false);
		};
		fetchData();
	}, [url]);

	return (
		<div className="flex flex-col items-center justify-center h-[100%] w-full bg-gradient-to-r from-cyan-500 to-blue-300">
			{isLoading ? (
				<div className="text-[10vh] flex items-center h-[100vh] ">
					<AiOutlineLoading className="animate-spin duration-75"/>
				</div>
			) : (
				datas.page?.map((item, i) => {
					return (
						<div
							key={i}
							className={`text-[5vh] ${
								item.shabadId === shabad ? "bg-red-200" : "bg-slate-400"
							} w-full text-center`}
							onClick={() => {
								console.log(item);
								setShabad(item.shabadId);
							}}>
							{/* {console.log(item)} */}
							<h1>{item.verse.unicode}</h1>
						</div>
					);
				})
			)}
			{shabad && (
                <Link to={`/hukumnaama/${shabad}`}>
                    <div
                        id="submit"
                        className={`bg-red-500 rounded-full px-10 py-5 text-white z-10 fixed left-[10%] top-[90%] translate-x-[-50%] shadow-2xl shadow-black border-[2px] cursor-pointer`}
                        >
                        SUBMIT
                    </div>
                </Link>
			)}
		</div>
	);
};

export default Search;
