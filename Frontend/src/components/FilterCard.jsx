import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { AreaChart } from 'lucide-react'
import { Label } from './ui/label'

const fillterData = [
  {
    fillerType:'Location',
    array:['Delhi NCR' , 'Bangalore' , 'Hyderabad' , 'Pune' , 'Mumbai']
  },
  {
    fillerType:'Industry',
    array:['Frontend Developer',
        'Backend Developer',
        'FullStack Developer']
  },
  {
    fillerType:'Salary',
    array:['0-40k' , '42-1Lakh' , '1-5Lakh']
  },
]



function FilterCard() {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
       <h1 className='font-bold text-lg'>Fillter Jobs</h1>
       <hr className='mt-3' />
       <RadioGroup>
        {
          fillterData.map((item,index)=>(
            <div>
              <h1 className='font-bold text-lg'>{item.fillerType}</h1>
              {
                item.array.map((arrayItem , index)=>{
                  return (
                    <div className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem value={arrayItem}/>
                      <Label>{arrayItem}</Label>
                    </div>
                  )
                })
              }
            </div>
          ))
        }
       </RadioGroup>
    </div>
  )
}

export default FilterCard