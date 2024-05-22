'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
export default function Home() {
    // useEffect(()=>{
    //
    //     throw  new Error('出错了')
    //
    // })
    const router = useRouter()

    return <div>
       <div> 我是 dashboard-page</div>
        <div>
            <Link href='/'>返回主页</Link>
        </div>
        <div>

            <Link href='/dashboard/settings#point' scroll={false}>去 settting页面</Link>

        </div>
        <div>
            <button type="button" onClick={() => router.push('/dashboard/settings#point',{ scroll: false })}>
                buttong-settting页面
            </button>
        </div>
        <br/>
    </div>
}
