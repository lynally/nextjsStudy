'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function PostList({ posts }) {
    const pathname = usePathname()
    return (
        <>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link className={pathname===`blog${post.id}`?'active':''} href={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </>

    )
}
