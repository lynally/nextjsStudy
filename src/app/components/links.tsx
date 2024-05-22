'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Links() {
    const pathname = usePathname()

    return (
        <nav>
            <ul >
                <li>
                    <Link className={`link ${pathname === '/' ? 'bg-blue-500' : ''}`} href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className={`link ${pathname === '/about' ? 'bg-blue-500' : ''}`}
                        href="/about"
                    >
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
