'use client'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import React, { useState } from 'react';
import { BeakerIcon, ArchiveBoxIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import SliderDayAndNight from './SliderToggle';
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
            href: "/contact",
            title: "Experience",
            icon: <BeakerIcon className="h-4 w-4 mx-2" />,
        },
        {
            href: "/projects",
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
        <nav className='flex p-7 primary_color text-white  justify-around flex-col  text-center sm:flex-row gap-4 md:gap-12'>
            <div className='flex justify-between items-center '>
                <h2 className='text-[1.4rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.4rem]'><Link href={'/ '}><span>{"<"}</span><span className='augustine'>{" Daniyal Mahmood "}</span><span>{"/>"}</span></Link></h2>
                {/* Mobile Navigation */}
                {!isBread ?
                    <motion.div
                        initial={{ rotate: "0deg" }}
                        whileTap={{ rotate: "90deg" }}
                        exit={{
                            scale: 0
                        }}
                        transition={{
                            duration: 1,
                            times: [0.1, 1]
                        }}
                    >

                        <Bars3Icon className="h-4 w-4 mx-2 self-end sm:hidden" onClick={() => { setIsBread(prev => !prev) }} />
                    </motion.div>


                    :
                    <motion.div
                        initial={{ rotate: "0deg" }}
                        whileTap={{ rotate: "90deg" }}
                        exit={{
                            scale: 0
                        }}
                        transition={{
                            duration: 1,
                            times: [0.1, 1]
                        }}>

                        <XMarkIcon className="h-4 w-4 mx-2 self-end sm:hidden" onClick={() => { setIsBread(prev => !prev) }} />
                    </motion.div>}


            </div>
            {/* Desktop Navbar */}
            <div className='hidden sm:flex '>
                <ul className="flex gap-5 flex-col items-center sm:flex-row sm:gap-4 md:gap-4 lg:gap-12">
                    {menuItems.map(({ href, title, icon }) => (
                        <li key={title}>
                            <Link href={href} className={`text-white hover:text-slate-200 font-bold hover:bg-slate-700 cursor-pointer`}>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <SliderDayAndNight />
            </div>
            {/* MObile Crumbread */}
            {
                isBread && <div className='sm:hidden'>
                    <ul className="flex gap-5 flex-col items-center sm:flex-row">
                        {menuItems.map(({ href, title }) => (
                            <li key={title}>
                                <Link href={href} className={`text-slate-300 hover:text-slate-200 hover:bg-slate-700`}>
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            }

        </      nav>
    )
}

export default Navbar