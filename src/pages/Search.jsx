import { useState } from "react";
import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";
import Submit from "../components/Submit";
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
			{isLoading ? (
				<div className="text-[10vh] flex items-center h-[100vh] z-0">
					<AiOutlineLoading className="animate-spin duration-[1000] text-white" />
				</div>
			) : (
				// <div className="flex flex-wrap">
				// 	{datas.page?.map((item, i) => {
				// 		return (
				// 			<div
				// 				key={i}
				// 				className={`text-[5vh] ${
				// 					item.shabadId === shabad ? "bg-red-200/10" : "bg-slate-400/0"
				// 				} text-center`}
				// 				onClick={() => {
				// 					setShabad(item.shabadId);
				// 				}}>
				// 					<h1>{item.verse.unicode}</h1>
				// 			</div>
				// 		);
				// 	})}
				// </div>
				<div className="">
					{shabads?.map((id,i)=>{
						return (
							<div key={i} className={`bg-white/20 ${
								id===shabad&&'bg-white'
							}  m-1 text-center p-2`}
								onClick={()=>{
									setShabad(id);
                                    console.log(id);
                                    console.log(shabad);
                                    console.log(datas.page);
								}}
							>
								{id}
								{datas.page?.map((item,i)=>{
									return (
										<div key={i} className="w-fit inline-block">
											{item.shabadId === id && (
                                                <h1 className="text-[3vh]">{item.verse.unicode}</h1>
                                            )}
										</div>
									)
								})}
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
	);
};

export default Search;
