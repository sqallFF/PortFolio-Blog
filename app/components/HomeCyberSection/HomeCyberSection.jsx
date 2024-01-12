'use client'
import { useRef, useState, useEffect } from "react";
import { useScroll } from "framer-motion";
import HomeCyberCard from "./HomeCyberCard";

export default function HomeCyberSection(Posts) {
    const Cyber = Posts.Posts
    const ref = useRef(null);
    const range = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() =>setCompleted(scrollXProgress.current *100 ))
    }, [scrollXProgress])

    const handleChange = (e) => {
        const element = ref.current
        const total = element.scrollWidth - element.offsetWidth;
                const percentage = total * (e.target.value / 100);
                element.scrollLeft = percentage;
        }
  return (
    <section className="h-screen w-screen">
        <div className=' h-[20%] sm:h-[20%] w-full border-t-[1px] text-6xl xl:text-7xl font-semibold  flex justify-center sm:justify-start items-center border-slate-300 '>
    <h1 className='pl-8'>Blog</h1>
  </div>
    <div className=' box flex h-[70%] md:h-[70%] gap-x-6 p-2 md:gap-x-32 justify-start overflow-x-scroll' ref={ref}>
    {Cyber.map((cyber) => {
     return(
   <HomeCyberCard key={cyber.id} title={cyber.title} media={cyber.ogImage.url} date={cyber.date} id={cyber.id}/>
     )
    })}
 </div>
  <div className='h-[5%] w-full border-slate-300 border-b-2 p-15 flex justify-center items-center mt-3'>
  <input type='range' className='h-[1vh] w-5/6 pro rounded-full' ref={range} min={0} max={100} value={completed} onChange={handleChange} style={{appearance:'none'}}/>
</div>
</section>
  )
}
