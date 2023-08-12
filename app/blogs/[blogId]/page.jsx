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

    const {title, date, contentHtml , ogImage} = await getCyberData(blogId)
  return (
    <main>
        <div className='flex justify-between h-[90vh] px-28'>
            <div className='flex flex-col justify-center'>
                <Link href={'/'}>Back</Link>
            </div>
            <div className=' flex flex-col justify-center w-1/2 '>
                <h3 className='text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-900'>{title}</h3>
                <h1 className='text-xl'>Highly Skilled, Relationship Focused, Capital Advisory</h1>
            </div>
        </div>
        <ScrollPostImg Img={ogImage.url}/>
        <article className='mx-auto my-4'>
            <section dangerouslySetInnerHTML={{ __html:contentHtml}} className='mx-auto px-10 text-xl' />
            <div className='flex justify-between h-[100vh] px-28'>
                <Link href="/" className='flex flex-col justify-center'>Back to home</Link>
            </div>
        </article>
    </main>
  )
}
