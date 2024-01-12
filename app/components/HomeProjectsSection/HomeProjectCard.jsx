import React from 'react'
import Link from 'next/link'


export default function HomeProjectCard({media, title, postId}) {
  return (
    <>
    <Link href={`/posts/${postId}`}>
<div className="item border-r-[1px] border-slate-300">
  <div className="items-wrapper">
    <img src={media} alt="" className=''/>
    <div className="img-overlay"></div>
    <div className="item-copy text-2xl sm:text-3xl">
      <div>
        {title}
      </div>
    </div>
  </div>
</div>
</Link>
</>
  )
}
