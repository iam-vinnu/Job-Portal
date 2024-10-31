import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import AdminJobTable from './AdminJobTable'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useDispatch } from 'react-redux'
import { setSearchJobByText } from '@/redux/jobSlice'
import { useNavigate } from 'react-router-dom'
import useGetAdminJob from '@/hooks/useGetAdminJob'

const AdminJobs = () => {
    useGetAdminJob();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [input , setInput] = useState();
    dispatch(setSearchJobByText(input));
  return (
    <div>
        <Navbar/>
        <div className='max-w-5xl mx-auto my-8'>
             <div className='flex items-center justify-between my-5'>
                <Input 
                  type="text"
                  className="w-fit border-gray-600"
                  placeholder='Fillter by role'
                  onChange={(e)=>setInput(e.target.value)} />
 
                  <Button onClick={()=>navigate('/admin/jobs/create')} >Post New Job</Button>
             </div>
             <AdminJobTable/>
        </div>
    </div>
  )
}

export default AdminJobs