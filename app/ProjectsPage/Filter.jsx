'use client'
import React, {useEffect, useState}from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {IoIosArrowDropdown} from 'react-icons/io'

export default function Filter({Techs , setActiveTag, activeTag, filtered, setFiltered , Projects}) {
    const [showStack, setShowStack] = useState(false);
    console.log(Projects)

    useEffect(() =>{
      if (activeTag === 0 ) {
          setFiltered(Projects)
          return;
      }

      const filtered = Projects.filter((project) => project.contentId.includes(activeTag))
      setFiltered(filtered)
    },[activeTag])
    
        const container = {
            hidden: {opacity:0, height:0, width:0, transition:{ when: 'afterChildren', duration: 0.5,staggerChildren: -0.2
                }},
            show: {
                opacity:1, width:'auto', height: "auto", transition:{  duration: 1, when:"beforeChildren",
                staggerChildren: 0.2}
            }
          }
          const container2 = {
           click:{transition:{  duration: 0.3,
           staggerChildren: 0.2,}}
          }
        const item = {
            hidden: { opacity: 0,width:'0%', transition:{ duration: 0.5,ease: "anticipate"}},
            show: { opacity: 1, width:'100%', transition:{ duration: 1,ease: "anticipate"}}
          }
          const item2 = {
            hidden: { opacity: 0,height:"0%", transition:{ duration: .3,ease: "anticipate"}},
            show: { opacity: 1, height: "100%", transition:{ duration: 1,ease: "anticipate"}}
          }
    
          const item3 = {
            click: { x: 30, rotate:["180deg","0deg"], transition:{ duration: .3,ease: "anticipate",}},
          }
          const item4 = {
            click: { x: 30, rotate:["0deg","180deg"], transition:{ duration: .3,ease: "anticipate",}},
          }
          const TapButton = {
            initial: { background: "transparent", transition: {ease: [0.075, 0.82, 0.165, 1] } },
            animate: { background: "transparent", transition: { duration: 3, ease: [0.075, 0.82, 0.165, 1] } },
            tap: { background: "aliceblue", color:"black", transition: { duration: 3, ease: [0.075, 0.82, 0.165, 1] } }
        };
  return (
    <>
  <div className=''>
    <motion.button
     className='rounded-full flex justify-center items-center align-middle font-bold text-lg px-3.5 text-center   border-slate-200 border-2 mb-4' onClick={() =>{setShowStack(!showStack)}} whileTap="click" variants={container2}>
        Filter
        <motion.div variants={showStack ? item4 : item3} ><IoIosArrowDropdown/></motion.div>
        </motion.button>
    <AnimatePresence>
      {showStack && (
      <motion.div layout className={`overflow-hidden`} variants={container} initial='hidden' animate='show' exit='hidden'>
        <motion.div variants={item} className='border-t-[1px] border-slate-200 mt-7'></motion.div>
        <motion.div variants={item2} className='py-8 flex flex-wrap justify-center gap-4'>
          {Techs.map((Techs) =>{
              return(
                  <motion.button         initial="initial"
                  animate="animate"
                  whileTap="tap"
                  variants={TapButton}  className='rounded-[50px] font-bold  text-center py-[6px] pr-[20px] pl-[24px] border-slate-200 border-2 ' key={Techs.id} onClick={()=>(setActiveTag(Techs.id))}>{Techs.name}</motion.button>
              )
          })}
          </motion.div>
          <motion.div variants={item} className='border-b-[1px] border-slate-200 mb-7'></motion.div>
      </motion.div>
        )}
        </AnimatePresence>
        </div>
      </>
  )
}
