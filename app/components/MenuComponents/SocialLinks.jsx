import React from 'react'
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

export default function SocialLinks() {
    if (typeof window !== "undefined") {
        var width = window.innerWidth;     
     }
  return (
    <div className='flex flex-col justify-end h-full '>
<DiGithubBadge className=" mr-5 mt-4 " color='#075985' size={width > 400 ? 50 : 70}/>
<FaLinkedin className=" mr-5 mt-4 " color='#075985' size={width > 400 ? 50 : 70}/>
</div>
  )
}
