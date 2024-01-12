import { getSortedPostsData } from '@/lib/post'
import React from 'react'
import Link from 'next/link'
import Filter from './Filter';
import getFormattedDate from '@/lib/getFormattedDate';
import ProjectsPageSection from './ProjectsPageSection';

export default function ProjectsPage() {
    const Projects = getSortedPostsData();

    const Techs = [{name:"React", id:1}, {name:"Vue" , id:2}, {name:"JS", id: 3}, {name:"Tailwind", id: 4}, {name: "Three.js", id: 5}]
  return (
          <ProjectsPageSection Techs={Techs} Projects={Projects}/>
  )
}
