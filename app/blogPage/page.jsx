import React from 'react'
import BlogSection from './BlogSection'
import { getSortedCyberData } from '@/lib/post'
import getFormattedDate from '@/lib/getFormattedDate';
export default async function page() {
    const pics = getSortedCyberData();
  return (

    <div className='bg-slate-900 text-slate-200 h-full w-full'>
    <section className='border-b-[1px] border-slate-300 h-auto min-h-[auto] pt-40 '>
    <div className=' font-bold text-4xl lg:text-7xl xl:text-8xl flex flex-col justify-end px-9 py-16 sm:px-16 lg:py-36'>
        <div className=''>
        <h1>Articles to Fulfill Insightful Curiosity</h1>
        <span className=' text-xl lg:text-3xl xl:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-900'>An In-Depth Look</span>
        </div>
    </div>
    </section>
    <BlogSection pics={pics} />
</div>
  )
}
