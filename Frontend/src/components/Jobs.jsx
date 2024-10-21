import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './job'
import { SpaceIcon } from 'lucide-react'
import Footer from './shared/Footer'

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8]

function Jobs() {
  return (
    <div>
      <Navbar />

      <div className='max-w-6xl mx-auto mt-5'>
        <div className='flex gap-5'>
          <div className='w-20%'>
            <FilterCard />
          </div>
          {
            jobsArray.length <= 0 ? <span>No Job Found</span> : (
              <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                <div className='grid grid-cols-3 gap-5'>
                  {jobsArray.map((item, index) => (
                    <div>
                      <Job />
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