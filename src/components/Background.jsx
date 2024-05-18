import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Background = () => {
    useGSAP(()=>{
        window.addEventListener("mousemove",(t)=>{
            gsap.to("#hero",{
                x:t.x,
                y:t.y,
                duration:21,
                ease:"elastic"
            })
        })
    })
  return (
        <div className='fixed bg-indigo-900 h-[100vh] w-full z-[-10] overflow-hidden'>
                <div id="hero" className="absolute z-[-8] p-[700px] blur-2xl bg-blue-700/10 translate-x-[-50%] -translate-y-1 rounded-full"></div>
            <div id="hero1" className="absolute z-[-9] h-[1000px] w-[1000px] left-1/2 translate-x-[50%] translate-y-[-50%] rounded-full bg-blue-900/20 blur-3xl">
            </div>
        </div>
  )
}

export default Background