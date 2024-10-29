import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '@/redux/companySlice'
import { toast } from 'sonner'

function CompanyCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [companyName , setCompanyName] = useState();

const handleCompanyChange =(e)=>{
     e.preventDefault();
     setCompanyName(e.target.value);
}

const registerCompany = async()=>{
      try {
        const res = await axios.post(`${COMPANY_API_END_POINT}/register` , {companyName} , {
          headers:{
            "Content-Type" :'application/json'
          },
          withCredentials:true
        });
  
        if(res?.data?.success){
           dispatch(setSingleCompany(res.data.company));
           toast.success(res.data.message);
           const companyId = res?.data?.company?._id;
           navigate(`/admin/companies/${companyId}`);
           console.log(res?.data);
           
        }

      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
}

  return (
    <div>
        <Navbar/>
        <div className='max-w-4xl mx-auto'>
          <div className='my-8'>

            <h1 className='font-bold text-2xl '>Your Company Name</h1>
            <p className='text-gray-500'>What would you like to give your company name? You can change it later.</p>
          </div>

            <Label>Comapany Name</Label>
            <Input
               type='text' 
               value ={companyName}
               className="my-2"
               placeholder='Jobhunt , Microsoft etc..'
               onChange={handleCompanyChange}
                />

                <div className='flex items-center gap-2 my-10' >
                  <Button onClick={()=>navigate('/admin/companies')}>Cancel</Button>
                      <Button onClick={registerCompany}>Countinue</Button>
                </div>
        </div>
    </div>
  )
}

export default CompanyCreate