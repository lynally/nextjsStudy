import Link from "next/link";
import PostList from "./PostList";
export default function Page() {
    const list = [
        {id:1,title:'Blog1',slug:1},
        {id:2,title:'Blog2',slug:2},
        {id:3,title:'Blog3',slug:3},
    ]
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <p>我是 blog-page</p>
                <PostList posts={list}></PostList>
            </div>
        </main>
    );
}
