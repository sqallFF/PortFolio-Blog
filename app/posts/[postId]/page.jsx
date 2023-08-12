import { getPostData, getSortedPostsData } from '@/lib/post'
import React from 'react'
import {notFound} from 'next/navigation'
import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'
import Image from 'next/image'
import ScrollPostImg from '@/app/components/ScrollPostImg'

export function generateMetadata({params}) {
    const posts = getSortedPostsData()
    const {postId} = params
    console.log(postId)
    const post = posts.find(post => post.id === postId) 
    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }
    else
        return {
            title: post.title,
        }
    
}

export default async function Post({params}) {

    const posts = getSortedPostsData();
    const {postId} = params
    if(!posts.find(post => post.id === postId)) {
        return notFound()
    }

    const {title, date, contentHtml , ogImage} = await getPostData(postId)

    const pubDate = getFormattedDate(date)
    console.log(ogImage.url);

    
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
