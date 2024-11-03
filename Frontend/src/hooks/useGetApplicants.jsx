import { setApplicants } from '@/redux/applicationSlice';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const useGetApplicants = (jobId) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchApplicants = async () =>{
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/${jobId}/applicants`,{withCredentials:true});
                console.log(res);
                
                if(res.data.success){
                    dispatch(setApplicants(res.data.job));
                }
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchApplicants();
      },[])
}

export default useGetApplicants