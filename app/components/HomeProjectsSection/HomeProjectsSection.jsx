'use client'
import React, {useRef, useEffect, useState, useContext} from 'react'
import {motion, useScroll} from 'framer-motion'
import HomeProjectCard from './HomeProjectCard';

export default function HomeProjectsSection(post) {
    const ref = useRef(null);
    const range = useRef(null);
  
    const { scrollXProgress } = useScroll({ container: ref });
    const [completed, setCompleted] = useState(0);
  
    useEffect(() => {
      setInterval(() =>setCompleted(scrollXProgress.current *100 ))
  }, [])
  
  const handleChange = (e) => {
  const element = ref.current
  const total = element.scrollWidth - element.offsetWidth;
          const percentage = total * (e.target.value / 100);
          element.scrollLeft = percentage;
  }
  const Posts = post.posts;
  console.log(Posts)
  

  return (
    <section>
    <div className=' h-[17vh] sm:h-[35vh] w-full border-t-[1px] text-6xl xl:text-7xl  flex justify-center sm:justify-start items-center border-slate-300 '>
    <h1 className='pl-8'>Projects</h1>
  </div>
  <motion.div className=' Sbar h-[80vh] md:h-[91vh] box w-full flex border-t-[1px] border-b-[1px] border-slate-300 overflow-x-scroll'ref={ref}>
  { Posts.map((post)=>{
     return(
       <>
       <HomeProjectCard key={post.id} title={post.title} postId={post.id} media={post.ogImage.url}/>
       </>
     )
   })}
    </motion.div>
  <div className='h-[15vh] w-full border-slate-300 border-y-2 p-15 flex justify-center items-center'>
      <input type='range' className='h-[1vh] w-5/6 pro rounded-full' ref={range} min={0} max={100} value={completed} onChange={handleChange} style={{appearance:'none'}}/>
  {/* <motion.div
  className=" h-full overflow-hidden origin-[0%] bg-purple-100 rounded-full"
  style={{ width: `${completed}%`}}/> */}
</div>
</section>
  )
}
