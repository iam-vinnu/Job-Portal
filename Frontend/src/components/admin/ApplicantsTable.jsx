import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Check, Cross, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import axios from 'axios';
import { APPLICATION_API_END_POINT } from '@/utils/constant';


const sortListArray = ['Accepted', 'Rejected'];
const ApplicantsTable = () => {
    const { applicants } = useSelector(store => store.application);
    const handleStatus = async(status , id)=>{
        try {
            const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`,{status},{withCredentials:true});
            
            
            if(res.data.success){
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    } 
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right' >Action</TableHead>
                    </TableRow>

                </TableHeader>
                <TableBody>
                    {
                        applicants && applicants?.applications?.map((item) => (
                            <tr key={item._id}>
                                <TableCell>{item?.applicant?.fullname}</TableCell>
                                <TableCell>{item?.applicant?.email}</TableCell>
                                <TableCell>{item?.applicant?.phoneNumber}</TableCell>
                                <TableCell><a href={item?.applicant?.profile?.resume}
                                              target='_blank'
                                               className='text-blue-600'>{item?.applicant?.profile?.resumeOriginalName}</a></TableCell>
                                <TableCell>{item?.applicant?.createdAt.split('T')[0]}</TableCell>
                                <TableCell className='text-right'>
                                    <Popover>
                                        <PopoverTrigger> <MoreHorizontal /> </PopoverTrigger>
                                        <PopoverContent className='w-32'>
                                            {
                                                sortListArray.map((status, index) => {
                                                    return (
                                                        <div onClick={()=>handleStatus(status ,item._id)} key={index} className='flex items-center gap-3 cursor-pointer'>
                                                            {status}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>

                            </tr>
                        ))
                    }

                </TableBody>
            </Table>
        </div>
    )
}

export default ApplicantsTable