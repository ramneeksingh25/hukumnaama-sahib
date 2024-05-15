/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = ({setAng,ang}) => {
  const [a,setA]=useState('');
  useEffect(()=>{
    setAng(a);
  },[a,setAng])
  return (
    <div className='h-[100vh] w-full bg-blue-200 flex flex-col items-center justify-center gap-[10%] text-[250%]'>
      <h1>Enter Ang Number:</h1>
      <input type="text" className='rounded-full p-4' onChange={(t)=>{
        setA(t.target.value);
      }}/>
      <Link to="/search">
        <div className='button bg-slate-900 py-2 px-10 rounded-full text-white cursor-pointer' onClick={()=>{console.log("Ang submitted:",ang)}}>Submit</div>
      </Link>
    </div>
  )
}

export default Home