import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

export const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
    role: '',
  });
  const {loading} = useSelector(store => store.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] })
  }
  const submitHandler = async (e)=>{
    e.preventDefault();
    dispatch(setLoading(true));
     try {
      const res = await axios.post(`${USER_API_END_POINT}/login`,input, {
        headers: { 'Content-Type': "application/json" },
        withCredentials: true,
    });
     if(res.data.success){
      dispatch(setUser(res.data.user));
      navigate('/');
      toast.success(res.data.messsage);
     }
     } catch (error) {
       console.log(error.message);
       toast.error(error.response.data.messsage);
     } finally{
      dispatch(setLoading(false));
     }

    }

  

  return (
    <div>
      <Navbar />

      <div className='flex items-center justify-center max-w-6xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10 shadow-lg'>
          <h1 className='font-bold text-xl mb-5'>Login</h1>
          <div className='my-2'>
            <Label>Email</Label>
            <Input type="email" placeholder='binaybehera101@gmail.com'
              value={input.email?.trim()}
              name='email'
              onChange={changeEventHandler} />
          </div>
          <div className='my-2'>
            <Label>Password</Label>     
            <Input type="password" placeholder=''
              value={input.password?.trim()}
              name='password'
              onChange={changeEventHandler} />
          </div>
          <div className='flex justify-between items-center'>
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value='student'
                  checked={input.role === 'student'}
                  onChange={changeEventHandler}
                  className='cursor-pointer'
                />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value='recruiter'
                  checked={input.role === 'recruiter'}
                  onChange={changeEventHandler}
                  className='cursor-pointer'
                />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {loading? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin'/> please wait</Button>
          : <Button type='submit' className='bg-[#2e52e6] hover:bg-[#1f3cb0] w-full my-4'>Login</Button>
          }
          
          <span className='text-sm'>Don't have an account? <Link to='/signup' className='text-blue-600'>Signup</Link></span>
        </form>
      </div>
    </div>
  )
}
export default Login