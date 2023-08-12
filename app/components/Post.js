export async function getPost ({params}) {
    'use server';
    const posts = getSortedPostsData();
    const {postId} = params
    if(!posts.find(post => post.id === postId)) {
        return notFound()
    }

    const {title, date, contentHtml , ogImage} = await getPostData(postId)

    const pubDate = getFormattedDate(date)
    console.log(ogImage.url);

}