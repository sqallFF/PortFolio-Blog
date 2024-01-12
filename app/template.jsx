"use client"
import {motion} from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: -200 },
  enter: { opacity: 1, x: 0, y: 0, transition: {duration:1, type: 'linear' }},
  exit: { opacity: 0, x: -200, transition: {duration:1, type: 'linear' } },
}



export default function Template({ children }) {

  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit='exit'
    >
      {children}
    </motion.main>
  )
  }