import { getSortedCyberData, getCyberData} from '@/lib/post'
import { notFound } from 'next/navigation';
import React from 'react'
import ScrollPostImg from '@/app/components/ScrollPostImg';
import Link from 'next/link';


export function generateMetadata({params}) {
    const blogs = getSortedCyberData();
    const {blogId} = params
    const blog = blogs.find(blog => blog.id === blogId) 
    if (!blog) {
        return {
            title: 'Post Not Found'
        }
    }
    else
        return {
            title: blog.title,
        }
    
}


export default async function page({params}) {
    const blogs = getSortedCyberData();
    const {blogId} = params;
    if(!blogs.find(blog => blog.id === blogId)) {
        return notFound();
    }

    const {title, date, contentHtml , ogImage, subText} = await getCyberData(blogId)
    console.log(contentHtml)
  return (
    <main className='bg-slate-100 '>
        <div className='flex flex-col sm:flex-row justify-around h-[90vh] px-10 sm:px-28'>
            <div className='flex flex-col justify-center'>
                <Link href={'/'}>Back</Link>
            </div>
            <div className=' flex flex-col justify-center w-full sm:w-1/2 '>
                <h3 className='text-5xl min-h-[15vh] sm:min-h-[15vh] text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-900'>{title}</h3>
                <h1 className='text-2xl mt-3'>{subText}</h1>
            </div>
        </div>
        <ScrollPostImg Img={ogImage.url}/>
        <article className='mx-12 my-4'>
            <section dangerouslySetInnerHTML={{ __html:contentHtml}} className=' text-2xl' />
            <div className='flex justify-between h-[100vh] px-10 sm:px-28'>
                <Link href="/" className='flex flex-col justify-center'>Back to home</Link>
            </div>
        </article>
    </main>
  )
}
