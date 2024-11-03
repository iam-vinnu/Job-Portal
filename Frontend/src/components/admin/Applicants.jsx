import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import ApplicantsTable from './ApplicantsTable'
import axios from 'axios'
import { APPLICATION_API_END_POINT } from '@/utils/constant'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setApplicants } from '@/redux/applicationSlice'
import useGetApplicants from '@/hooks/useGetApplicants'

const Applicants = () => {
    const params = useParams();
    useGetApplicants(params.id);
    const {applicants} = useSelector(store => store.application);
    console.log(applicants);
    
  return (
    <div>
        <Navbar/>
        <div className='max-w-5xl mx-auto'>
           <h1 className='font-bold text-xl my-5'>Applicants ({applicants.applications.length})</h1>
           <ApplicantsTable/>
        </div>
    </div>
  )
}

export default Applicants