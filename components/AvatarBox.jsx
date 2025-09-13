import Image from 'next/image'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button'
const AvatarBox = () => {
    return (
        <div className='rounded-full p-6'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div>

                        <Image
                            src="/logo.png"
                            alt="Picture of the author"
                            className='rounded-full'
                            width={40}
                            height={40}
                        />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={"font-bold py-2"}>

                    <DropdownMenuItem>Language</DropdownMenuItem>
                    <DropdownMenuItem>Dark mode</DropdownMenuItem>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem className={"text-red-500"}>Log out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}

export default AvatarBox