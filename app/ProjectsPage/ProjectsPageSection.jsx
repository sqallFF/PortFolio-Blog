'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Filter from './Filter';
import { motion } from 'framer-motion';

export default function ProjectsPageSection({Projects, Techs}) {
    const [Project, setProjects] = useState(Projects);
    const [filtered,setFiltered] = useState(Projects);
    const [activeTag, setActiveTag] = useState(0);
  return (
    <div className=' bg-slate-900 text-slate-200'>
            <div className='border-b-[1px] border-slate-200'>
              <div className='px-8 pt-16'>
            <div className=''>
              <h1 className='text-5xl font-bold'>Projects</h1>
            </div>
            <div className='flex flex-col flex-1 justify-center items-start'>
          <div className='flex flex-1 justify-around items-center my-3 w-full '>
            {Techs.map((Tech) =>{
              return(
                <button className='rounded-[50px] font-bold px-6 text-center border-slate-200 border-2' key={Math.random()}>{Tech.name}</button>
              )
            })}
            </div>
            <div className='w-full'>
           <Filter Techs={Techs} setActiveTag={setActiveTag}  setFiltered={setFiltered} Projects={Project} activeTag={activeTag}/>
            </div>
          </div>
          </div>
          </div>
    <motion.div layout
    className='h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4 px-8 py-16'>
    {filtered.map((project) => {
        return (
          <motion.div layout key={project.id}>
          <Link href={`/posts/${project.id}`}>
        <div className='relative block overflow-hidden w-full h-[50vh] ' key={Math.random()}>
            <img src={project.ogImage.url} alt='' className='object-cover absolute inset-0 w-full h-full'></img>
        </div>
        </Link>
        <section className='my-4'>
        <h2 className='text-lg'>{project.title}</h2>
        <div className='flex justify-between items-center'>
          <h6>{project.date}</h6>
          <ul className='flex justify-around my-2 pr-10'>
            <li className='border-slate-400 border-2 px-4 rounded-full mx-2'>React</li>
            <li className='border-slate-400 border-2 px-4 rounded-full mx-2'>Tailwind</li>
            <li className='border-slate-400 border-2 px-4 rounded-full'>Vue</li>
          </ul>
          </div>
        </section>
        </motion.div>
        )}
    )}
    </motion.div>
    </div>
  )
}
