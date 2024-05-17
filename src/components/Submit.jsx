import { FaArrowRight } from "react-icons/fa"

const Submit = (props) => {

  return (
    <div className='button bg-slate-800/90 py-2 px-10 rounded-full duration-300 ease-in-out text-white cursor-pointer hover:shadow-xl shadow-black hover:bg-slate-800 flex items-center gap-2' onClick={()=>{console.log("Ang submitted:",props.set)}}>Submit 
        <div className='bg-white rounded-full text-slate-800/90 text-[80%] p-[4%] my-2'>
         <FaArrowRight/> 
        </div>
    </div>
  )
}

export default Submit