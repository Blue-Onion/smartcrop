"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import AvatarBox from './AvatarBox'
import Image from 'next/image'

const Navbar = () => {
    const [loggedIn, setloggedIn] = useState(false)
    return (
        <header className="fixed top-0 z-50 w-full border-b bg-background/20 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">

        <nav className='flex justify-between p-6 items-center h-16'>
            <div className="flex gap-2 ">
               <div className="icon flex items-center">

               <Image
               src={"/icon.jpeg"}
               height={35}
               width={35}
               alt="Logo"
               />
               </div>
                <div className="logo flex items-center">

               <Image
               src={"/logo.jpeg"}
               height={100}
               width={100}
               alt="Logo"
               />
               </div>

            </div>
            <div className="">
                {loggedIn ? <AvatarBox /> : <Button onClick={() => setloggedIn(true)}>
                    Login
                </Button>}
            </div>
        </nav>
        </header>
    )
}

export default Navbar
