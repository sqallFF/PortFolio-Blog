'use client'
import React from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

export default function ScrollAnimation() {

    const Frameworks = ["React", 'HTML', 'CSS', "Next.js", "Framer Motion", "Tailwind CSS", "Vercel","React", 'HTML', 'CSS', "Next.js", "Framer Motion", "Tailwind CSS", "Vercel"];

    const {scrollYProgress} = useScroll();

    const x  = useTransform(scrollYProgress, [0, 1], [0, -700])
    const x1  = useTransform(scrollYProgress, [0, 1], [0, 700])

  return (
    <motion.div className="slide-in " >
    <motion.div style={{x: x}}className="TechStack"  >
    {Frameworks.map((Framework, index)=>{
        return <div key={index} className="">{Framework}</div>
    })}
    </motion.div>
<motion.div style={{x: x1}} className="TechStack"  >
    {Frameworks.toReversed().map((Framework, index)=>{
        return <div key={index} className="">{Framework}</div>
    })}
    </motion.div>

    </motion.div>
    
  )
}
