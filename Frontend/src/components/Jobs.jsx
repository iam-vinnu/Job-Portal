import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job'
import Footer from './shared/Footer'
import { useSelector } from 'react-redux'
import useGetAllJobs from '@/hooks/useGetAllJobs'

//const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8]

function Jobs() {
  useGetAllJobs();
  const {allJobs , searchedQuery} = useSelector(store => store.job);
  const [filterJob , setFilterJob] = useState(allJobs);
  useEffect(()=>{
     if(searchedQuery){
         const filteredJob = allJobs.filter((job)=>{
             return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
             job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
             job.location.toLowerCase().includes(searchedQuery.toLowerCase()) 
         });
         setFilterJob(filteredJob);
     }else{
      setFilterJob(allJobs);
     }
  },[allJobs, searchedQuery]);
 
  
  return (
    <div>
      <Navbar />

      <div className='max-w-6xl mx-auto mt-5'>
        <div className='flex gap-5'>
          <div className='w-20%'>
            <FilterCard />
          </div>
          {
           filterJob.length <= 0 ? <span>No Job Found</span> : (
              <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                <div className='grid grid-cols-3 gap-5'>
                  {filterJob?.map((job) => (
                    <div key={job?._id}>
                      <Job job={job} />
                    </div>
                  ))}
                </div>
              </div>
            )
          }
        </div>
      </div>
     <Footer/>
    </div>
  )
}

export default Jobs