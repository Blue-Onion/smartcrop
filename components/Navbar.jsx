"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import AvatarBox from './AvatarBox'
import Image from 'next/image'

const Navbar = () => {
  const [loggedIn, setloggedIn] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/20 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <nav className="flex justify-between p-6 items-center h-16">
        {/* Left Side: Icon + Logo */}
        <div className="flex gap-2 items-center">
          {/* Icon (always visible) */}
          <div className="icon flex items-center">
            <Image
              src={"/icon.jpeg"}
              height={35}
              width={35}
              alt="Icon"
            />
          </div>

          {/* Logo (hidden on small screens, visible from md and up) */}
          <div className="logo hidden md:flex items-center">
            <Image
              src={"/logo.jpeg"}
              height={100}
              width={100}
              alt="Logo"
            />
          </div>
        </div>

        {/* Right Side: Login / Avatar */}
        <div>
          {loggedIn ? (
            <AvatarBox />
          ) : (
            <Button onClick={() => setloggedIn(true)}>Login</Button>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
