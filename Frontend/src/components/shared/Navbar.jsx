import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { LogOut, User2 } from 'lucide-react'
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux'
import store from '@/redux/store'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector(store=>store.auth);
    const handleLogout = async() => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout` ,{withCredentials:true});
            if(res.data.success){
                dispatch(setUser(null));
                navigate('/');
                toast.success(res.data.messsage);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.messsage);
        }
    }
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
                                    <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />

                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className='w-80'>
                                <div className='flex gap-4 space-y-2'>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />

                                    </Avatar>
                                    <div>
                                        <h1 className='font-medium'>{user?.fullname}</h1>
                                        <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col text-gray-600'>
                                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                        <User2 />
                                        <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                                    </div >
                                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                        <LogOut />
                                        <Button onClick={handleLogout} variant="link">Logout</Button>
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