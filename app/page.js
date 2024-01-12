import HomeCyberSection from "./components/HomeCyberSection/HomeCyberSection";
import HomeProjectsSection from "./components/HomeProjectsSection/HomeProjectsSection"
import { getCyberData, getSortedCyberData, getSortedPostsData } from "@/lib/post"
import ScrollAnimation from './components/ScrollAnimation'


export default function Home() {
  const post = getSortedPostsData();
  const cyber = getSortedCyberData();
  console.log(cyber)
  return (
    <>
       <ScrollAnimation/>
    <main className="  text-slate-200 z-[10] ">
     <section className='flex min-h-[90vh] flex-col items-start justify-between '>
     <div className='h-[95vh] flex items-stretch '>
      <div className="clip bg-slate-200 h-[95vh]  absolute w-full -z-10"></div>
      <div className="clip2 bg-slate-200 h-[95vh]  absolute w-full -z-10"></div>
      <div className=' w-screen text-5xl text-center md:w-3/6 md:text-6xl lg:text-5xl xl:text-6xl sm:text-left self-center p-5 ' >
        <div className="    md:w-[30vw] sm:ml-24">
        <h1>A  <span className='xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-800'>Front-End</span> <span className="mix-blend-difference">Developer who brings</span> <br/> <span className='xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-800'>Creative Value</span><br/>to the <span className="font-black xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-800">Web</span></h1>
        </div>
      </div>
    </div>
     </section>
     <HomeProjectsSection posts={post}/>
     <HomeCyberSection Posts={cyber}/>
    </main>
    </>
  )
}
