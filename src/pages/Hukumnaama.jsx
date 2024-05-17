/* eslint-disable react/prop-types */
import * as n from 'nanakshahi'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const Hukumnaama = ({ang,shabad}) => {
  const date= new Date();
  var nDate= n.getNanakshahiDate(date);
  var url= `https://api.banidb.com/v2/shabads/${shabad}`
  const [data,setData]=useState({});
  useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(url);
			const data = await res.json();
      console.log(data);
      setData(data);
		};
		fetchData();
	}, [url]);
  return (
    <>
    {shabad ? (
    <div className='h-[100vh] w-full flex flex-col items-center'>
        <div className='header h-[10%] w-full flex items-center justify-evenly text-[1.5vw] bg-yellow-500/50'>
            <h2>
            <span>
              { date.toDateString()}
            </span> <br />
            <div className='flex justify-evenly'>
            <span>
              {nDate.punjabiDate.date}
            </span>
            <span>
              {nDate.punjabiDate.monthName}
            </span>
            <span>
              {nDate.punjabiDate.year}
            </span>
            </div>
            </h2>
            <Link to="/">
              <h1 className='text-[3vw]'>Hukumnaama Sahib</h1>
            </Link>
            <h2>Ang:{ang}</h2>
        </div>
        <div id="gurmukhi" className='w-full h-[35%] flex flex-col items-center justify-center'>
          <h1 className='text-[350%] flex flex-col items-center'>
          {data.verses?.map((i,index)=>{
            console.log(data);
            return (
            <div key={index}>
                {index<3 && i.verse.unicode}
            </div>
            )
          })}
          </h1>
          <h1 className='text-[125%] text-center w-[70%]'>
          {data.verses?.map((i,index)=>{
            return (
            <div key={index} className='inline align-middle'>
                {index<3 && i.translation.pu.ss.unicode}
            </div>
            )
          })}
          </h1>

        </div>
        <div id="hindi" className='w-full h-[35%] bg-yellow-600 flex flex-col items-center justify-center'>
              <h2 className='text-[300%] flex flex-col items-center'>
              {data.verses?.map((i,index)=>{
                return (
                  <div key={index} className='inline align-middle'>
                    {index<3 && i.transliteration.hindi}
                  </div>
                )
              })}
              </h2>
              <h2 className='text-[120%] w-[70%] text-center'>
              {data.verses?.map((i,index)=>{
                return (
                  <div key={index} className='inline align-middle'>
                    {index<3 && i.translation.hi.ss}
                  </div>
                )
              })}
              </h2>
        </div>
          <Footer n={n}/>
    </div>
    ):<div>
              <Link to="/">
                <div className='h-[100vh] w-full flex items-center justify-center text-[30vh] underline hover:text-red-900'>
                Go Back
                </div>
              </Link>
      </div>}
    </>
  )
}

export default Hukumnaama