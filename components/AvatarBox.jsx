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
import { User } from 'lucide-react'
const AvatarBox = () => {
    return (
        <div className='rounded-full p-6'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className='rounded-full bg-gray-200 p-2'>
<User className='h-6 w-6'/>
                       
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