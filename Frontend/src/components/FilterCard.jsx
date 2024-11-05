import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { AreaChart } from 'lucide-react'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const fillterData = [
  {
    fillerType: 'Location',
    array: ['Delhi NCR', 'Bangalore', 'Hyderabad', 'Pune', 'Mumbai']
  },
  {
    fillerType: 'Industry',
    array: ['Frontend Developer',
      'Backend Developer',
      'FullStack Developer',
      'DevOps Engineer']
  },
  {
    fillerType: 'Salary',
    array: ['0-40k', '42-1Lakh', '1-5Lakh']
  },
]



function FilterCard() {
  const dispatch = useDispatch();
  const [radioValue, setRadioValue] = useState('');
  const changeHandler = (value) => {
    setRadioValue(value);
  }
  useEffect(() => {
    dispatch(setSearchedQuery(radioValue))
    
  }, [radioValue])
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Fillter Jobs</h1>
      <hr className='mt-3' />
      <RadioGroup value={radioValue} onValueChange={changeHandler}>
        {
          fillterData.map((data, index) => (
            <div key={index}>
              <h1 className='font-bold text-lg'>{data.fillerType}</h1>
              {
                data.array.map((item, idx) => {
                  const itemId = `id${index}-${idx}`
                  return (
                    <div className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem value={item} id={itemId} />
                      <Label htmlFor={itemId}>{item}</Label>
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