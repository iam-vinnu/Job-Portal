import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from './ui/avatar'
import { Bookmark } from 'lucide-react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

function Job({job}) {
 const navigate = useNavigate();
 const daysAgoPost = (mongodbTime)=>{
     const createdAt = new Date(mongodbTime);
     const currentDate = new Date();
     const currentTimeDiff = currentDate  - createdAt;
     return Math.floor(currentTimeDiff / (60*60*24*1000));
    }

  return (
    <div className='p-3 rounded-md shadow-xl bg-white border border-gray-100'>
      <div className='flex items-center justify-between'>
      <p className='text-sm text-gray-500'>{daysAgoPost(job?.createdAt) === 0 
                                               ? <span>Posted Few Hours Ago</span>
                                               : `${daysAgoPost(job?.createdAt)} Days Ago` }</p>
      <Button variant='outline' className='rounded-full' size='icon'><Bookmark /></Button>
      </div>
      <div className='flex items-center gap-2 my-2'>
        <Button className='p-6' variant='outline' size='icon'>
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>
        <div>
          <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
          <p className='text-sm text-gray-600'>{job?.location}</p>
        </div>
      </div>

      <div>
        <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
        <p className='text-sm text-gray-600'> {job?.description} </p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className={"text-blue-700 font-bold "} variant='ghost'>{job?.position} </Badge>
        <Badge className={"text-[#f83002] font-bold "} variant='ghost'>{job?.jobType} </Badge>
        <Badge className={"text-[#7209b7] font-bold "} variant='ghost'>{job?.salary} LPA</Badge>
      </div>
      <div className='flex items-center gap-3 mt-5 '>
        <Button onClick={()=> navigate(`/description/${job?._id}`)} variant='outline'>Details</Button>
        <Button className='bg-[#2e52e6]'>Save for later</Button>
      </div>
    </div>
  )
}

export default Job