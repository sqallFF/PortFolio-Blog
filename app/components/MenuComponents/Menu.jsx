import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import { AnimatePresence, delay, easeIn, motion } from 'framer-motion'
import Link from 'next/link'
import SocialLinks from './SocialLinks'
import { usePathname } from 'next/navigation'

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

  if (typeof window !== "undefined") {
    var width = window.innerWidth;     
 }



  const Links = [{href: '/', item: "Home"}, {href: "/about", item: "About"},{ href:'/services', item: "Services"}, { href:'/blogPage', item: "Blog"}, { href:'/ProjectsPage', item: "Projects"}, { href:'/Contact', item: "Contact"}];
function Menu({isOpen, setIsOpen}) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      {isOpen && (
        <>
        {/* <div className='w-2/5 flex justify-end'>
        <GiHamburgerMenu size={40}/>
        </div> */}
        <motion.div 
        initial={{opacity:0, x: width<=680 ? -300 : -10000}}
        animate={{opacity:1, x: 0, transition:{ease: "anticipate", duration: 1}}}
        exit={{opacity: 0, x: width<=680 ? -10000 : 10000, transition:{ease: "easeOut", duration: 1.5}}}
        className=' h-screen w-[100vw] lg:w-[35vw] fixed z-[3] flex justify-between bg-slate-200 overflow-hidden p-10'>
        <motion.div
           variants={container}
           initial="hidden"
           animate="show"
           exit="hidden"
           transition={{ease: "anticipate", duration: 2}}
            className='flex flex-col text-5xl sm:text-7xl justify-between h-full min-w-max '>
              {Links.map((link) =>(
           <motion.div key={link.item} variants={item}className={`font-extrabold  ${ link.href == pathname ?' text-transparent  bg-clip-text bg-gradient-to-r from-green-300 to-blue-900' : 'blue-900'}`}>
           <Link className='menu__item-link z-20' href={link.href} onClick={() =>{setIsOpen(!isOpen)}}>{link.item}</Link>
           <div className='marquee z-0'>
             <div className="marquee__inner italic">
               <span className='text-slate-500'>{link.item} - </span>
               <span className='text-slate-500'>{link.item} - </span>
               <span className='text-slate-500'>{link.item} - </span>
               <span className='text-slate-500'>{link.item} - </span>
               <span className='text-slate-500'>{link.item} - </span>
               <span className='text-slate-500'>{link.item} - </span>
               <span className='text-slate-500'>{link.item} - </span>
               <span className='text-slate-500'>{link.item} - </span>
               <span className='text-slate-500'>{link.item} - </span>
               <span className='text-slate-500'>{link.item} - </span>
             </div>
           </div>
           </motion.div>
        ))}
        </motion.div>
        <SocialLinks/>
        </motion.div>
        </>
      )}
     </AnimatePresence>

)
}

export default Menu