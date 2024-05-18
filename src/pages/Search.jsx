import { useState } from "react";
import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";
import Submit from "../components/Submit";
import { FaBookOpen } from "react-icons/fa";
/* eslint-disable react/prop-types */
const Search = ({ ang, shabad, setShabad }) => {
	const url = `https://api.banidb.com/v2/angs/${ang}`;
	const [datas, setDatas] = useState({});
	const [isLoading, setisLoading] = useState(true);
	const [shabads,setShabads]=useState([]);
	var shabadArray=[];
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(url);
			const data = await res.json();
			setDatas(data);
			setisLoading(false);
		};
		if (ang == 0 || ang == "0" || ang == "undefined") {
			<Navigate to="/" />;
		} else {
			fetchData();
		}
	}, [url]);
	useEffect(() => {
		shabadArray=[];
		console.log(datas.page);
		datas.page?.map((item,i)=>{
			shabadArray.includes(item.shabadId)||shabadArray.push(item.shabadId)			
		})
		console.log(shabadArray);
		setShabads(shabadArray);
    }, [datas]);
	return (
		<div className="flex flex-col items-center justify-center h-[100%] w-full z-[20]">
			<h1 className="fixed left-[12%] -translate-x-1/2 top-[2%] text-[4vh] text-[#fffcea] rounded-full flex items-center gap-4 hover:text-[#e4a33a]">
				<FaBookOpen className="text-[#e4a33a]"/>
				Hukumnaama Sahib
			</h1>
			<div className="absolute top-[10%] w-[80%]">
			{isLoading ? (
				<div className="text-[20vh] flex items-center justify-center h-[100vh]">
					<AiOutlineLoading className="animate-spin duration-[1000] text-white" />
				</div>
			) : (
				<div className=" bg-[rgba(252,252,252,0.07)] border-white/40 border-[0.01px] hover:bg-[rgba(252,252,252,0.09)] text-center rounded-[10px] p-[10px]">
					{shabads?.map((id,i)=>{
						return (
							<div key={i} className={`m-1 p-2 border-white border-1`}
								onClick={()=>{
									setShabad(id);
                                    console.log(shabad);
                                    console.log(datas.page);
								}}
							>
								
								{datas.page?.map((item,i)=>{
									return (
										<div key={i} className={`w-fit inline-block mt-2 `}>
											{item.shabadId === id && (
                                                <h1 className={`text-[4vh] px-2 ${shabad===id?"font-bold text-white":"text-yellow-400"}`}>{item.verse.unicode}</h1>
                                            )}
										</div>
									)
								})}
								<hr className="w-[90%] relative left-1/2 -translate-x-[50%] m-[40px]"/>
							</div>
						)
					})}
				</div>
			)}
			{shabad && (
				<Link to={`/hukumnaama/${shabad}`}>
					<div
						id="submit"
						className={`z-10 fixed left-[10%] top-[90%] translate-x-[-50%] shadow-2xl shadow-black cursor-pointer`}>
					<Submit set={shabad} />
					</div>
				</Link>
			)}	
			</div>
		</div>
	);
};

export default Search;
