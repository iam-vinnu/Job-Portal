import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppiledJobTable from './AppiledJobTable'
import { Input } from './ui/input'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'



//const skills = ['HTML' , 'CSS' , 'JS' , 'REACTjs']

function Profile() {
    const [open , setOpen] = useState(false);
    const {user} = useSelector(store => store.auth)
   // const isResume = true ;
    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-2 p-4'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className='h-16 w-16' >
                            <AvatarImage src={user?.profile?.profilePhoto} />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-lg'>{user?.fullname}</h1>
                            <p className='text-gray-500'>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className='text-right' variant='outline'><Pen className='h-4 w-4' /></Button>
                </div>

                <div className='my-4'>
                    <div className='flex items-center gap-3' >
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>

                <div className='my-4'>
                    <h1>Skills</h1>
                    {
                       user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item , index) => <Badge className='mr-2' key={index}>{item}</Badge>) : <span>NA</span>
                    }
                </div>
                
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className='text-md font-bold' >Resume</Label>
                    {
                        user?.profile?.resume
                        ? <a target='blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{ user?.profile?.resumeOriginalName}</a> 
                        : <span>NA</span>
                    }
                </div>
            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                 <h1 className='font-bold text-lg my-3'>Applied Jobs</h1>
                 <AppiledJobTable/>
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen}/>
        </div>
    )
}

export default Profile;