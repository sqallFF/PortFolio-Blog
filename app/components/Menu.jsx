import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import { AnimatePresence, delay, easeIn, motion } from 'framer-motion'
import Link from 'next/link'

const container = {
    hidden: { opacity: 0, y: 100}, width: 0,
    show: {
      opacity: 1,
      y: 0,
      width:100,
      transition: {
        duration: 2,
        delay: .1,
        when: 'beforeChildren',
        staggerChildren: 0.3
        
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, y: 100},
    show: { opacity: 1, y:0, transition:{ease: "anticipate"}}
  }

function Menu({isOpen, setIsOpen}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
        {/* <div className='w-2/5 flex justify-end'>
        <GiHamburgerMenu size={40}/>
        </div> */}
        <motion.div 
        initial={{opacity:0, x: -10000}}
        animate={{opacity:1, x: 0, transition:{ease: "anticipate", duration: 1}}}
        exit={{opacity: 0, x: -10000, transition:{ease: "easeOut", duration: 1.5}}}
        className=' h-screen w-screen fixed z-[3] flex justify-between bg-slate-200 overflow-hidden p-10'>
        <motion.div
           variants={container}
           initial="hidden"
           animate="show"
           exit="hidden"
           transition={{ease: "anticipate", duration: 2}}
            className='flex flex-col text-7xl justify-between h-full min-w-max '>
            <motion.div variants={item}className='font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-green-300 to-blue-900'>
              <Link className='menu__item-link z-20' href={'/'} onClick={() =>{setIsOpen(!isOpen)}}>Home</Link>
              <div className='marquee z-0'>
                <div className="marquee__inner italic">
                  <span className='text-slate-500'>Home - Home - Home - Home - Home - Home - Home - Home - Home - </span>
                </div>
              </div>
              </motion.div>
            <motion.div variants={item}>
              <Link className='menu__item-link z-20' href={'/'} onClick={() =>{setIsOpen(!isOpen)}}>About</Link>
              <div className='marquee z-0'>
                <div className="marquee__inner italic">
                  <span className='text-slate-500'>About - About - About - About - About - About - About - About - About - </span>
                </div>
              </div></motion.div>
            <motion.div variants={item}>   
            <Link className='menu__item-link z-20' href={'/'} onClick={() =>{setIsOpen(!isOpen)}}>Services</Link>
              <div className='marquee z-0'>
                <div className="marquee__inner italic">
                  <span className='text-slate-500'>Services - Services - Services - Services - Services - Services - Services - Services - Services - </span>
                </div>
              </div>
              </motion.div>
            <motion.div variants={item}>
              <Link className='menu__item-link z-20' href={'/blogPage'} onClick={() =>{setIsOpen(!isOpen)}}>Blog</Link>
              <div className='marquee z-0'>
                <div className="marquee__inner italic">
                  <span className='text-slate-500'>Blog - Blog - Blog - Blog - Blog - Blog - Blog - Blog - Blog - </span>
                </div>
              </div>
              </motion.div>
            <motion.div variants={item}>
            <Link className='menu__item-link z-20' href={'/ProjectsPage'} onClick={() =>{setIsOpen(!isOpen)}}>Projects</Link>
              <div className='marquee z-0'>
                <div className="marquee__inner italic">
                  <span className='text-slate-500'>Projects - Projects - Projects - Projects - Projects - Projects - Projects - Projects - Projects - </span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={item}>
            <Link className='menu__item-link z-20' href={'/'} onClick={() =>{setIsOpen(!isOpen)}}>Contact</Link>
              <div className='marquee z-0'>
                <div className="marquee__inner italic">
                  <span className='text-slate-500'>Contact - Contact - Contact - Contact - Contact - Contact - Contact - Contact - Contact - </span>
                </div>
              </div>
            </motion.div>
        </motion.div>
        <motion.div className=' text-3xl flex flex-col w-2/5 font-medium text-slate-500 -skew-y-12 uppercase italic justify-around items-end rotate-90   '>
          <span>Facebook</span>
          <span>Instagram</span>
          <span>Facebook</span>
          <span>Instagram</span>
        </motion.div>
        </motion.div>
        </>
      )}
     </AnimatePresence>

)
}

export default Menu