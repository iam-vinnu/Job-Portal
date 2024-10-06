import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { LogOut, User2 } from 'lucide-react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const navigate = useNavigate();
    const user = false;
    return (
        <div className='bg-white '>
            <div className='flex items-center justify-between h-16 px-8'>
                <div>
                    <Link to='/'><h1 className='text-2xl font-bold ' >You<span className='text-[#f83002]'>Hired</span></h1></Link>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                       <Link to='/'> <li>Home</li></Link>
                       <Link to='/jobs'> <li>Jobs</li></Link>
                       <Link to='/browse'> <li>Browse</li></Link>
                    </ul>   
                    {
                        (!user) ? 
                        <div className='flex gap-2'>
                            <Link to='/login'><Button variant="outline">Login</Button></Link>
                            <Link to='/signup'><Button className="bg-[#2e52e6] hover:bg-[#1f3cb0]">Signup</Button></Link>
                            
                        </div> : 
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />

                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className='w-80'>
                                <div className='flex gap-4 space-y-2'>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />

                                    </Avatar>
                                    <div>
                                        <h1 className='font-medium'>Binay Behera</h1>
                                        <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                                <div className='flex flex-col text-gray-600'>
                                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                        <User2 />
                                        <Button variant="link">View Profile</Button>
                                    </div >
                                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                        <LogOut />
                                        <Button variant="link">Logout</Button>
                                    </div>
                                </div>

                            </PopoverContent>
                        </Popover>

                    }

                </div>
                
                
            </div>

        </div>
    )
}

export default Navbar