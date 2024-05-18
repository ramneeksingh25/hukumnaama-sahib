/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa"

const Submit = ({set}) => {

  return (
    <div className={'button text-md bg-[#e4a33a] hover:bg-[#e4953a] hover:translate-y-[1px] hover:shadow-none shadow-lg py-2 px-10 rounded-full duration-300 ease-in-out text-blue-900 hover:text-[#152155] cursor-pointer shadow-black flex items-center gap-2'} onClick={()=>{console.log("Submitted:",set)}}>Submit 
        <div className='bg-zinc-200/20 rounded-full text-[80%] p-[4%] my-2 '>
         <FaArrowRight className="animate-[slide_1s_ease-in-out_infinite]"/> 
        </div>
    </div>
  )
}

export default Submit