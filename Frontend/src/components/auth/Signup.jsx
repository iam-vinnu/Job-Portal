import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'

export const Signup = () => {
  return (
    <div>
      <Navbar />

      <div className='flex items-center justify-center max-w-6xl mx-auto'>
        <form action="" className='w-1/2 border border-gray-200 rounded-md p-4 my-10 shadow-lg'>
          <h1 className='font-bold text-xl mb-5'>Sign up</h1>
          <div className='my-2'>
            <Label>Full Name</Label>
            <Input type="text" placeholder='Binay' />
          </div>
          <div className='my-2'>
            <Label>Email</Label>
            <Input type="email" placeholder='binaybehera101@gmail.com' />
          </div>
          <div className='my-2'>
            <Label>Phone Number</Label>
            <Input type="number" placeholder='' />
          </div>
          <div className='my-2'>
            <Label>Password</Label>
            <Input type="password" placeholder='' />
          </div>
          <div className='flex justify-center items-center'>
            <RadioGroup defaultValue="option-one" className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Recruiter</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Student</Label>
              </div>
            </RadioGroup>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup