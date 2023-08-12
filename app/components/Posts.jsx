import { getSortedCyberData, getSortedPostsData } from "@/lib/post"
import ListItem from "./ListItem"


export default function Posts() {
    const post = getSortedCyberData();

  return (
    <section className="mt-6 mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold text-white/90">BLog</h2>
        <ul className="w-full">
            {post.map(post => 
                <ListItem key={post.id} post={post} />
            )}
        </ul>
    </section>
  )
}
