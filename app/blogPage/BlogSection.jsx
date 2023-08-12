"use client"
import React from 'react'
import {motion} from 'framer-motion'
import {ImArrowRight2} from "react-icons/im"
import Date from './Date'
import Link from 'next/link'

export default function BlogSection({pics}) {
  return (
    <section className='min-w-[auto] mx-9 sm:mx-16 w-auto 2xl:w-[76vw] pt-20'>
    <div className='grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] auto-cols-[1fr] grid-rows-[auto] gap-x-[4vw] gap-y-[12vw] md:grid-cols-[1fr,1fr] md:gap-y-[4vw]'>
    {pics.map((pic) => {
 return(
   <div key={pic.id} >
     <motion.div className=' relative block overflow-hidden pt-[120%] sm:pt-[70%]' >
 <motion.img  src={pic.ogImage.url} alt="" sizes="(max-width: 479px) 75vw, (max-width: 767px) 41vw, (max-width: 991px) 42vw, (max-width: 1279px) 43vw, (max-width: 1919px) 44vw, 36vw" className="object-cover absolute w-full h-full inset-0 max-w-full border-0 align-middle" whileHover={{ scale: 1.2 }} transition={{duration: 2, ease: [0.075, 0.82, 0.165, 1]}}
onHoverStart={e => {}}
onHoverEnd={e => {}}></motion.img>
     </motion.div>
     <div className='p-2 flex flex-col justify-between ' >
 <Date date={pic.date}/>
 <h3 className=' my-1 text-2xl'>{pic.title}</h3>
 <div className='flex items-center gap-4' >
 <Link href={`/blogs/${pic.id}`} className='my-4 text-base'>Read More</Link>
 <ImArrowRight2 />
 </div>
 </div>
 </div>
 )
})}
    </div>
    </section>
  )
}
