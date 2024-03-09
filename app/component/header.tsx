"use client"

import { usePathname } from 'next/navigation';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const navLinks = [ 
{ href: "#", name: "Dashboard"},
{ href: "#", name: "Reports"},
{ href: "#", name: "Documents"},
{ href: "#", name: "History"},
{ href: "#", name: "Settings"},
]

function header() {
    const router = usePathname();

  return (
    <div className='flex justify-between items-center bg-blk w-full rounded-2xl p-2'>
        <div> 
             <Link href={'/'}>
                <Image
                className="relative"
                src="/ramos-logo.png"
                alt="Ramos Logo"
                width={100}
                height={100}
                priority
                />
             </Link>  
        </div>
        <div className='rounded-2xl flex gap-x-10 justify-center bg-[#252525] py-3 px-6'>
            {navLinks.map(link => (
                <div key={link.name}>
                    <a 
                        className={`text-white hover:text-primary data-[active=true]:text-primary ${router == link.href ? 'text-primary' : ''}`} 
                        data-active="false" 
                        href={link.href}
                    >
                        {link.name}
                    </a>
                </div>
            ))}
        </div>
        <div><button className='bg-white rounded-2xl py-3 px-5'>Sign Up</button></div>
    </div>
  )
}

export default header