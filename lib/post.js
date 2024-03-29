import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), 'blogposts')
const cyberDirectory = path.join(process.cwd(), 'cyberPosts')

export function getSortedCyberData () {
    const fileNames = fs.readdirSync(cyberDirectory);
    const allCyberData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(cyberDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath,'utf-8');

        const matterResult = matter(fileContents);

        const cyberPost = {
            id,
            title: matterResult.data.title,
            des: matterResult.data.des,
            date: matterResult.data.date,
            ogImage: matterResult.data.ogImage,
            subText: matterResult.data.subText,
        }

        return cyberPost
    })
    return allCyberData.sort((a,b) => a.date < b.date ? 1 : -1 )
}

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf-8');

        const matterResult = matter(fileContents);

        const blogPost = {
            id,
            title: matterResult.data.title,
            des: matterResult.data.des,
            date: matterResult.data.date,
            contentId: matterResult.data.contentId,
            ogImage: matterResult.data.ogImage,
            subText: matterResult.data.subText,
        }

        return blogPost
    });

    return allPostData.sort((a,b) => a.date < b.date ? 1 : -1);
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    
    const contentHtml = processedContent.toString();

    const blogPostWithHTML = {
        id, 
        title: matterResult.data.title,
        des: matterResult.data.des,
        date: matterResult.data.date,
        ogImage: matterResult.data.ogImage,
        subText: matterResult.data.subText,
        contentHtml
    }

    return blogPostWithHTML
}

export async function getCyberData(id) {
    const fullPath = path.join(cyberDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    
    const contentHtml = processedContent.toString();

    const cyberPostWithHTML = {
        id, 
        title: matterResult.data.title,
        des: matterResult.data.des,
        date: matterResult.data.date,
        ogImage: matterResult.data.ogImage,
        subText: matterResult.data.subText,
        contentHtml
    }

    return cyberPostWithHTML
}