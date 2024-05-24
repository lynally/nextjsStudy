import Image from "next/image";
import Link from 'next/link'
import {Links} from '@/app/components/links'
export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <div>
          <p>app 页面</p>
          <br/>
          <Link href='/dashboard'>仪表盘</Link>
          <br/>
          <Links></Links>
      </div>
        <div>
            <Link href='/settings'>路由到 setttins</Link>
        </div>
    </main>
  );
}
