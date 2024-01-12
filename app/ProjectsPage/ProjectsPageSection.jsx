'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Filter from './Filter';
import { motion } from 'framer-motion';

export default function ProjectsPageSection({Projects, Techs}) {
    const [Project, setProjects] = useState(Projects);
    const [filtered,setFiltered] = useState(Projects);
    const [activeTag, setActiveTag] = useState(0);

    const renderTechsForProject = (project) => {
      return Techs.filter(tech => tech.id === project.contentId)
                  .map(tech => (
                      <li key={tech.id} className='border-slate-400 border-2 px-4 rounded-full mx-2'>{tech.name}</li>
                  ));
  };
  return (
    <div className='text-slate-200  w-screen'>
            <div className='border-b-[1px] border-slate-200'>
              <div className='px-8 pt-16'>
            <div className=''>
              <h1 className='text-4xl lg:text-6xl font-bold'>Displaying the <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-800'>Value</span> I can Bring to You</h1>
            </div>
            <div className='flex flex-col flex-1 justify-center items-start'>
            <div className='w-full my-6'>
           <Filter Techs={Techs} setActiveTag={setActiveTag}  setFiltered={setFiltered} Projects={Project} activeTag={activeTag}/>
            </div>
          </div>
          </div>
          </div>
    <motion.div layout
    className='h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4 p-4 sm:py-16'>
    {filtered.map((project) => {
        return (
          <motion.div layout key={project.id}>
          <Link href={`/posts/${project.id}`}>
        <div className='relative block overflow-hidden w-full h-[35vh] sm:h-[23vh] lg:h-[40vh] ' key={Math.random()}>
            <motion.img whileHover={{ scale: 1.2 }} transition={{duration: 2, ease: [0.075, 0.82, 0.165, 1]}} src={project.ogImage.url} alt='' className='object-cover absolute inset-0 w-full h-full'></motion.img>
        </div>
        </Link>
        <section className='my-4'>
        <h2 className='text-lg'>{project.title}</h2>
        <div className='flex flex-wrap justify-between items-center'>
          <h6 className='my-1'>{project.date}</h6>
          <ul className='flex justify-around my-2 '>
          {renderTechsForProject(project)}
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
