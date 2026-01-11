'use client';

import { cn } from "@/lib/utils";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();
  return (
    <header>
      <div className="main-container inner">
        <Link href="/">
            <Image src="/logo.svg" alt="CoinDino Logo" width={132} height={40}/>
        </Link>
        <nav>
            <Link href="/" className={cn('nav-link',  {
                'is-active' : pathname === '/', 
                'is-home' : true
            })}>Home</Link>
            <p>Search</p>
            <Link href="/coins" className={cn('nav-link',  {
                'is-active' : pathname === '/coins'
            })}>All Crypto</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
