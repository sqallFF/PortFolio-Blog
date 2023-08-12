import React from 'react'
import { motion, useScroll} from 'framer-motion'
import {ImArrowRight2} from "react-icons/im"
import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'

export default function HomeCyberCard({title, date, media, id}) {
    const FormattedDate = getFormattedDate(date)
  return (
    <div className='p-2 min-w-[15rem] md:min-w-[30vw]' >
    <motion.div className=' relative block overflow-hidden w-full h-[65%]' >
      <Link href={`/blogs/${id}`}>
<motion.img src={media} alt=""  className="object-cover absolute w-full h-full inset-0" whileHover={{ scale: 1.2 }} transition={{duration: 2, ease: [0.075, 0.82, 0.165, 1]}}
onHoverStart={e => {}}
onHoverEnd={e => {}}></motion.img>
</Link>
    </motion.div>
<h6 className='text-slate-400 mt-2 mb-1 text-base'>{FormattedDate}</h6>
<h3 className=' my-1 text-2xl'>{title}</h3>
<div className='flex items-center gap-4'>
<Link href={`/posts/${id}`} className='my-4 text-base'>Read More</Link>
<ImArrowRight2/>
</div>
</div>
  )
}
