import React from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const PostJob = () => {
  return (
    <div>
        <Navbar/>
        <div className='max-w-5xl mx-auto my-8'>
             <form className='border border-gray-200 shadow-lg rounded-md p-8'>
                  <div className='grid grid-cols-2 gap-2'>
                         <div>
                            <Label>Job Title</Label>
                            <Input 
                              type='text'
                              name='title'
                              className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1' />
                         </div>
                  </div>
             </form>
        </div>
    </div>
  )
}

export default PostJob