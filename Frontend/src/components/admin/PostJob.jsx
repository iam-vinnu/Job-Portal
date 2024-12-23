import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { useSelector } from 'react-redux'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import axios from 'axios'
import { JOB_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'

const companyArray = [];

const PostJob = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: ""
  });
  const [loading , setLoading] = useState(false);
  const { allCompanies } = useSelector(store => store.company);
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  const changeSelectHandler = (value) => {
    const selectedCompany = allCompanies.find((company) => company.name.toLowerCase() === value);
    setInput({ ...input, companyId: selectedCompany._id });
  }
  const submitHandler = async(e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title' , input.title);
    formData.append('description' , input.description);
    formData.append('requirements' , input.requirements);
    formData.append('salary' , input.salary);
    formData.append('location' , input.location);
    formData.append('jobType' , input.jobType);
    formData.append('experience' , input.experience);
    formData.append('position' , input.position);
    formData.append('companyId' , input.companyId);


    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_END_POINT}/post` , formData , {
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true });

        if(res.data.success){
          toast.success(res.data.message);
          navigate('/admin/jobs');
        }
    } catch (error) {

      console.log(error);
      toast.error(error.response.data.message);

    } finally{

      setLoading(false);
    }
  }
  return (
    <div>
      <Navbar />
      <div className='max-w-2xl mx-auto my-6'>
        <form onSubmit={submitHandler} className='border border-gray-200 shadow-lg rounded-md p-8'>
          <h1 className='font-bold text-xl text-center mb-3'>Create a Job</h1>
          <div className='grid grid-cols-2 gap-2'>
            <div>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                value={input.title}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Description</Label>
              <Input
                type="text"
                name="description"
                value={input.description}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Requirements</Label>
              <Input
                type="text"
                name="requirements"
                value={input.requirements}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Salary</Label>
              <Input
                type="text"
                name="salary"
                value={input.salary}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Job Type</Label>
              <Input
                type="text"
                name="jobType"
                value={input.jobType}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Experience Level</Label>
              <Input
                type="text"
                name="experience"
                value={input.experience}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>No of Postion</Label>
              <Input
                type="number"
                name="position"
                value={input.position}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            {
              allCompanies.length > 0 && (
                <Select onValueChange={changeSelectHandler} >
                  <SelectTrigger>
                    <SelectValue placeholder={'Select a Company'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {
                        allCompanies.map((companies) => {
                          return (
                            <SelectItem value={companies?.name.toLowerCase()}>{companies?.name}</SelectItem>
                          )

                        })
                      }
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )
            }
          </div>
{
  loading ? <Button className="w-full mt-4"><Loader2 className='mr-2 h-4 w-4 animate-spin'/> Please wait....</Button> :<Button className='w-full mt-4'>Post New Job</Button>
}
          
          {
            allCompanies.length === 0 && <p className='text-red-600 text-center mt-2'>*Please register a company first before posing a job</p>
          }
        </form>
      </div>
    </div>
  )
}

export default PostJob