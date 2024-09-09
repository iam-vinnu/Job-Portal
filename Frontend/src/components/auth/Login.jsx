import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

export const Login = () => {
     
  return (
    <div>
      <Navbar/>

      <div className='flex items-center justify-center max-w-6xl mx-auto'>
        <form action="" className='w-1/2 border border-gray-200 rounded-md p-4 my-10 shadow-lg'>
          <h1 className='font-bold text-xl mb-5'>Login</h1>
          <div className='my-2'>
            <Label>Email</Label>
            <Input type="email" placeholder='binaybehera101@gmail.com' />
          </div>
          <div className='my-2'>
            <Label>Password</Label>
            <Input type="password" placeholder='' />
          </div>
          <div className='flex justify-between items-center'>
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value='student'
                  className='cursor-pointer'
                />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value='recruiter'
                  className='cursor-pointer'
                />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type='submit' className='bg-[#2e52e6] hover:bg-[#1f3cb0] w-full mb-3'>Login</Button>
          <span className='text-sm'>Don't have an account? <Link to='/signup' className='text-blue-600'>Signup</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Login