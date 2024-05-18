import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";
/* eslint-disable react/prop-types */
const Search = ({ ang, shabad, setShabad }) => {
	const url = `https://api.banidb.com/v2/angs/${ang}`;
	const [datas, setDatas] = useState({});
	const [isLoading, setisLoading] = useState(true);
	const shabadList =[];
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(url);
			const data = await res.json();
			setDatas(data);
			setisLoading(false);
		};
		fetchData();
	}, [url]);
	useEffect(()=>{
		datas.page?.map((item,i)=>{
			if (i==0) {
				shabadList.push(item.shabadId);
			}
			else {
				if(shabadList.includes(item.shabadId))
					console.log("r")
				else 
					shabadList.push(item.shabadId);
			}
		})
		console.log(datas);
		console.log(shabadList);
	},[datas,shabadList])
	return (
		<div className="flex flex-col items-center justify-center h-[100%] w-full z-[20]">
			{isLoading ? (
				<div className="text-[10vh] flex items-center h-[100vh] z-0">
					<AiOutlineLoading className="animate-spin duration-[1000] text-white"/>
				</div>
			) : (
				datas.page?.map((item, i) => {
					return (
						<div
							key={i}
							className={`text-[5vh] ${item.shabadId === shabad ? "bg-red-200/10" : "bg-slate-400/0"} w-full text-center`}
							onClick={() => {
								setShabad(item.shabadId);
							}}>
							<h1>{item.verse.unicode}</h1>
						</div>
					);
				})
				)
			}
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
