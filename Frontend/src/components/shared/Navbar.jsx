import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '../ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'


const Navbar = () => {
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-6xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold'>Job<span className='text-[#f83002]'>Portal</span></h1>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
                    </ul>

                    <Popover>
                        <PopoverTrigger asChild>
                            <Avatar className="cursor-pointer">
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />

                            </Avatar>          
                        </PopoverTrigger>  
                        <PopoverContent className='w-80 p-3 bg-slate-50 border-none'>
                        <Avatar className="cursor-pointer">
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />

                            </Avatar>          
                            <h1 className='font-medium'>Binay Behera</h1>
                        </PopoverContent>
                    </Popover>
                </div>

            </div>

        </div>
    )
}

export default Navbar