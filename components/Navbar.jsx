'use client'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { BeakerIcon, ArchiveBoxIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Navbar = () => {
    // const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);
    const [isBread, setIsBread] = useState(false);

    const menuItems = [
        {
            href: "/",
            title: "Home",
            icon: <Bars3Icon className="h-4 w-4 mx-2" />,
        },

        {
            href: "/about",
            title: "Open Source",
            icon: <ArchiveBoxIcon className="h-4 w-4 mx-2" />,
        },
        {
            href: "/contact",
            title: "Experience",
            icon: <BeakerIcon className="h-4 w-4 mx-2" />,
        },
        {
            href: "/contact",
            title: "Projects",
            icon: <BeakerIcon className="h-4 w-4 mx-2" />,
        },
        {
            href: "/contact",
            title: "Contact Me",
            icon: <BeakerIcon className="h-4 w-4 mx-2" />,
        },
    ];




    return (
        <div className='flex p-7 bg-gradient-to-r from-cyan-500 to-blue-500 text-white  justify-around flex-col gap-7 text-center sm:flex-row'>
            <div className='flex justify-between'>
                <h2 className=''><Link href={'/'}>{"<Daniyal Mahmood>"}</Link></h2>
                {!isBread ? <Bars3Icon className="h-4 w-4 mx-2 self-end sm:hidden" onClick={() => { setIsBread(prev => !prev) }} /> : <XMarkIcon className="h-4 w-4 mx-2 self-end sm:hidden" onClick={() => { setIsBread(prev => !prev) }} />}


            </div>


            <div className='hidden sm:flex'>
                <ul className="flex gap-5 flex-col items-center sm:flex-row">
                    {menuItems.map(({ href, title, icon }) => (
                        <li key={title}>
                            <Link href={href} className={`text-white rounded hover:bg-red-600 cursor-pointer`}>
                                {icon}  {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* MObile Crumbread */}
            {
                isBread && <div className='sm:hidden'>
                    <ul className="flex gap-5 flex-col items-center sm:flex-row">
                        {menuItems.map(({ href, title }) => (
                            <li key={title}>
                                <Link href={href} className={`text-white rounded hover:bg-red-600 cursor-pointer`}>
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            }

        </div >
    )
}

export default Navbar