/* eslint-disable react/prop-types */
import img from '../assets/images/logo.png'
const Footer = ({n}) => {
    var date=new Date();
    var month=date.getMonth()+1;
  return (
    <div className='flex flex-col gap-0 items-center justify-center bg-slate-900 fixed bottom-0 h-[20%] w-full text-yellow-600'>
        <img src={img} alt="" className='w-[6%] absolute left-0 bottom-0'/>
        
        <span className='flex gap-[3vw] flex-shrink-0 px-[8vw] py-1 text-[100%]'>
            {n.getGurpurabsForMonth(month).gurpurabs.map((item,i)=>{
                
                return i<3 && (
                    <div key={i}>
                        <h1>{item.date.gregorianDate.toDateString()}</h1>
                        <h2>{item.gurpurabs.map((Name,i)=>{
                            console.log(Name.pa);
                            console.log(Name.en);
                            return (
                                <div key={i} className='flex flex-col px-7'>
                                    <span>{Name.pa}</span>
                                    <span>{Name.en}</span>
                                </div>
                            )
                        })}</h2>
                    </div>
                )
            })}
            
        </span>
        <span className='text-[190%] text-white absolute right-2 bottom-1'>
            Gurdwara Guru Nanak Mission
        </span>
    </div>
  )
}

export default Footer