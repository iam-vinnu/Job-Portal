import { Search } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <div className='text-center'>
        <div className='flex flex-col items-center gap-5 my-10'>
          <span className='w-fit px-4 py-2 rounded-full bg-gray-100 text-[#f83002] font-medium'>No. 1 Job Hunt Website</span>
          <h1 className='text-5xl font-bold'>Find , Apply &  <br />Land Your <span className='text-[#2e52e6]'>Dream Job</span></h1>
          <p>Discover thousands of job opportunities tailored to your skills and experience. Connect with top employers and build your professional network. Start your job search today!</p>
          <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
             <input type="text" 
             placeholder='Find Your Job'
             className='outline-none border-none w-full ' />
             <Button className="rounded-r-full bg-[#2e52e6]">
                <Search className='h-5 w-5'/>
             </Button>
          </div>
        </div>
    </div>
  )
}

export default HeroSection