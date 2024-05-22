'use client'
import { usePathname } from 'next/navigation'
export default function Page({children}){
    const pathname = usePathname()
    return (
        <div>
            <div>当前path路径是： {pathname}</div>
            {children}
        </div>
    )
}
