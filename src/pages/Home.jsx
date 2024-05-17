/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Submit from '../components/Submit';

const Home = ({setAng,ang}) => {
  const [a,setA]=useState("");
  useEffect(()=>{
    setAng(a);
  },[a,setAng])
  return (
    <div className='h-[100vh] w-full bg-gradient-to-r from-cyan-500 to-blue-300 flex flex-col items-center justify-center'>
      <h1 className='absolute left-[50%] -translate-x-1/2 top-[5%] text-[4vh] bg-cyan-200/20 p-5 text-[#fffcea] rounded-full '>Hukumnaama Sahib</h1>
    <div className='h-[50vh] w-[50vh] bg-[rgba(255,255,255,0.1)] flex flex-col items-center justify-center gap-[10%] text-[250%] shadow-xl hover:shadow-lg rounded-xl duration-1000 ease-linear'>
      <input type="text" className='p-4 text-center bg-transparent caret-white outline-none border-b-2 border-b-slate-800 w-[50%] focus:w-[60%] duration-500 ease-in-out text-white placeholder-white focus:border-b-slate-100' onChange={(t)=>{setA(t.target.value)}} placeholder="Enter Ang..."/>
      <Link to={a&&`/search/${ang}`}>
        
        <Submit set={ang}/>
      </Link>
      </div>

    </div>
  )
}

export default Home