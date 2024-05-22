import Image from "next/image";
import Link from 'next/link'
import {Links} from '@/app/components/links'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
          <p>app 页面</p>
          <Link href='/dashboard'>仪表盘</Link>
          <Links></Links>
      </div>
    </main>
  );
}
