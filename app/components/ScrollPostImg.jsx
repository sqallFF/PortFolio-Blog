"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import {motion, useScroll} from 'framer-motion'
export default function ScrollPostImg({Img}) {
    const ref = useRef();
const {scrollYProgress}= useScroll({target: ref})

const[trackY, setTrackY] = useState(0)

useEffect(() => {
    setInterval(() =>setTrackY(scrollYProgress.current ))
    console.log(scrollYProgress.current)
}, [scrollYProgress])

  return (
    <div className='h-[79vh] overflow-hidden relative lg:h-[120vh]' ref={ref}>
    <motion.img src={Img} alt='' className=' object-cover absolute w-full h-full inset-0' initial={{scale:1}} whileInView={{scale: (1)+(trackY/30)}} transition={{ ease: [0.075, 0.82, 0.165, 1]}}/>
</div>
  )
}
