import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <p>我是 blog-slug-page</p>
                <Link href='/dashboard'>仪表盘</Link>
            </div>
        </main>
    );
}
