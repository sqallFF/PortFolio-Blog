'use client'
import Navbar from './components/MenuComponents/Navbar'
import './globals.css'
import {Darker_Grotesque} from 'next/font/google'
import PageTransition from './components/PageTransition/PageTransition'
import {motion, useScroll, useTransform} from 'framer-motion'
import ScrollAnimation from './components/ScrollAnimation'

 
const roboto = Darker_Grotesque({
  weight: '400',
  subsets: ['latin'],
})



export const metadata = {
  title: 'Welcome',
  description: 'A Site for Development and Cyber Sec',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={roboto.className}>
      <body className='bg-slate-900 w-[100vw]'>
        <Navbar/>
            {children}
        </body>
    </html>
  )
}
