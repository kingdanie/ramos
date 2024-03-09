"use client"

import { usePathname } from 'next/navigation';
import React from 'react'
import Image from 'next/image';

const footerLinks = [ 
    { href: "#", name: "About"},
    { href: "#", name: "Why Us"},
    { href: "#", name: "Platform"},
    { href: "#", name: "Pricing"},
    { href: "#", name: "Contacts"},
    ]
function footer() {
    const router = usePathname();
  return (
    <div className='bg-blk p-10 w-full space-y-10'>
        <div className='flex justify-between  border-b border-[#252525] py-10'>
            <div className='flex gap-x-10 justify-around py-3 px-6'>
                {footerLinks.map(link => (
                    <div key={link.href}>
                        <a 
                            className={`text-[#b1b1b1] hover:text-primary data-[active=true]:text-primary ${router == link.href ? 'text-primary' : ''}`} 
                            data-active="false" 
                            href={link.href}
                        >
                            {link.name}
                        </a>
                    </div>
                ))}
            </div>
            <div>
                <a className='text-white text-6xl' href="mailto:hello@ramos.com">hello@ramos.com</a>
            </div>
        </div>

        <div className='flex justify-between'>
            <div className='flex gap-x-16'>
                    <div className='text-sm'>
                        <h6 className='text-white'>Warrensville Heights</h6>
                        <div className='text-[#b1b1b1]'>
                            14418 Vineyard Drive, NC <br />
                            44128
                        </div>
                    </div>
                    <div className='text-sm'>
                        <h6 className='text-white'>Saint Louis</h6>
                        <div className='text-[#b1b1b1]'>
                            1366 Penn Street <br />
                            63101
                        </div>
                    </div>
            </div>
            <div className='flex flex-col text-white gap-y-5'>
                <div>Linkedin</div>
                <div>Instagram</div>
                <div>Facebook</div>
            </div>
        </div>

        <div className='flex items-center relative justify-between'>
            <div className='text-white flex relative'>
                <h3 className='text-[10rem]'>Ramos</h3>
                <span className='absolute  top-16 -right-8 size-10 rounded-full text-lg flex items-center justify-center border-[7px] border-white'>R</span>
            </div>

            <div className='flex gap-x-16 text-[#b1b1b1]'> 
                <div>Privacy Policy</div>
                <div>Licencse agreement</div>
            </div>

            <div className='rounded-2xl bg-white flex items-center justify-center p-3'>
            <Image
                className="relative"
                src="/qr-code.png"
                alt="Qr Code"
                width={100}
                height={37}
                priority
            />
            </div>
        </div>
    </div>
  )
}

export default footer