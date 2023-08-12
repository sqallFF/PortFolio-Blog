import React from 'react'
import getFormattedDate from '@/lib/getFormattedDate'

export default function Date({date}) {

  return (
    <h6 className='text-slate-100 mt-2 mb-1 text-base'>{getFormattedDate(date)}</h6>
  )
}
