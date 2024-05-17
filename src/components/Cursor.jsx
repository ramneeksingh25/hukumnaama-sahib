import { useGSAP } from "@gsap/react"
import gsap from "gsap"
const Cursor = () => {
    useGSAP(()=>{
        window.addEventListener("mousemove",(t)=>{
            gsap.to(".cursor",{
                x:t.x,
                y:t.y,
                duration:0
            })
        })
    })
    return (
    <div className='absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 cursor bg-white p-5 rounded-full z-0'></div>
  )
}

export default Cursor