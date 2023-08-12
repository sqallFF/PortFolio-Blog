'use client'
import React, {useEffect, useState} from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import Menu from './Menu'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
     document.body.style.overflow="hidden"
    }
    else {
     document.body.style.overflow=""
    }
   }, [isOpen]);

  return (
    <>
    <nav className='mix-blend-difference fixed z-50'>
  <div className='w-full flex justify-end invert fixed z-50 '>
    <GiHamburgerMenu className=" mr-5 mt-4 " size={60} onClick={() =>{setIsOpen(!isOpen)}}/>
  </div>
  </nav>
  <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}
