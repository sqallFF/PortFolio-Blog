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

    const {title, date, contentHtml ,subText, ogImage} = await getPostData(postId)

    const pubDate = getFormattedDate(date)
    
  return (
    <main className='bg-white'>
        <div className='flex flex-col sm:flex-row justify-center gap-x-9 sm:justify-between  h-[90vh] sm:px-4 lg:px-28 px-4'>
            <div className='flex flex-col justify-center mb-8'>
                <Link href={'/'}>Back</Link>
            </div>
            <div className=' flex flex-col justify-center w-full sm:w-1/2 '>
                <h3 className='text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-900'>{title}</h3>
                <h1 className='text-xl'>{subText}</h1>
                <p>{pubDate}</p>
            </div>
        </div>
        <ScrollPostImg Img={ogImage.url}/>
        <article className='mx-12 my-24'>
            <section dangerouslySetInnerHTML={{ __html:contentHtml}} className='mx-auto px-4 text-2xl' />
            <div className='flex justify-between h-[100vh] px-28'>
                <Link href="/" className='flex flex-col justify-center'>Back to home</Link>
            </div>
        </article>
    </main>
  )
}
