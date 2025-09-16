"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import AvatarBox from './AvatarBox'

const Navbar = () => {
    const [loggedIn, setloggedIn] = useState(false)
    return (
        <header className="fixed top-0 z-50 w-full border-b bg-background/20 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">

        <nav className='flex justify-between p-6 items-center h-16'>
            <div className="flex gap-2">
                <div className="text-2xl text-black font-bold">Agro</div>
                <div className="text-2xl text-green-800 font-bold">Life</div>

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
