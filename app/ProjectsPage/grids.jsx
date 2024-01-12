import React from 'react'

function Grids() {
  return (
   <div className=' h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4 mx-8 sm:py-16'>
    <div className='border-[2px] border-fuchsia-950 mt-2  w-full sm:h-1/2  h-5/6'></div>
    <div className='border-[2px] border-fuchsia-950 mt-2 sm:h-1/2 h-5/6'></div>
    <div className='border-[2px] border-fuchsia-950 mt-2 sm:h-1/2 h-5/6'></div>
   </div>
  )
}

export default Grids