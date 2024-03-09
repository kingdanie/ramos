"use client"

import { usePathname } from 'next/navigation';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";

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
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      ease: "easeInOut",
      duration: 0.3,
    }} className='flex justify-between items-center bg-blk w-full rounded-2xl p-2'>
        <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.7,
                }}
        > 
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
        </motion.div>
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                ease: "easeInOut",
                duration: 0.7,
                delay: 0.6,
            }}
            className='rounded-2xl flex gap-x-10 justify-center bg-[#252525] py-3 px-6'
        >
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
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                ease: "easeInOut",
                duration: 0.7,
                delay: 0.7,
            }}
        >
            <button className='bg-white rounded-2xl py-3 px-5'>Sign Up</button>
        </motion.div>
    </motion.div>
  )
}

export default header