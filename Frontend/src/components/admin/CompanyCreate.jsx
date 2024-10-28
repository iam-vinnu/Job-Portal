import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'

function CompanyCreate() {
  return (
    <div>
        <Navbar/>
        <div className='max-w-4xl mx-auto'>
            <h1 className='font-bold text-2xl '>Your Company Name</h1>
            <p className='text-gray-500'>What would you like to give your company name? You can change it later.</p>

            <Label>Comapany Name</Label>
            <Input
              type='text' 
              className="my-2"
               placeholder='Jobhunt , Microsoft etc..'
                />
        </div>
    </div>
  )
}

export default CompanyCreate