import { Metadata } from 'next'
import { Suspense } from 'react'
import Loading from '@/app/dashboard/loading'
export const metadata: Metadata = {
    title: 'Dashboard Layout1',
    description: 'This is the dashboard layout page'
}
export default function Page({children}) {

    return (
        <div>
            我是 dashboard-layout
            {children}
            <Suspense fallback={<Loading/>}>
            </Suspense>
        </div>
    )
}
