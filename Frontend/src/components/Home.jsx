import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/footer'
import HeroSection from './HeroSection'
import CategoryCarousal from './CategoryCarousal'
import LatestJobs from './LatestJobs'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  const {user} = useSelector(store => store.auth);
  useEffect(()=>{
    if(user?.role === "recruiter"){
      navigate('/admin/companies'); 
    }
  },[]);
  useGetAllJobs();
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CategoryCarousal/>
        <LatestJobs/>
        <Footer/>
    </div>
  )
}

export default Home