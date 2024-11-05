import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux';

function AppiledJobTable() {
    const {allAppliedJob} = useSelector(store => store.job);
    console.log(allAppliedJob);
    
  return (
    <div>
        <Table>
            <TableCaption>A list of your applied jobs</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Job Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className='text-right' >Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                  allAppliedJob.length <= 0 ? <span className=''>You Haven't Applied Yet</span> : allAppliedJob.map((item) => (
                        <TableRow key={item._id}>
                            <TableCell>{item?.createdAt.split('T')[0]}</TableCell>
                            <TableCell>{item?.job?.title}</TableCell>
                            <TableCell>{item?.job?.company?.name}</TableCell>
                            <TableCell className='text-right'><Badge 
                              className={`${item?.status === 'pending' ? "bg-gray-400" 
                                            : item?.status === 'rejected' ? "bg-red-400" 
                                            : "bg-green-400"  }`} >{item?.status.toUpperCase()}</Badge></TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppiledJobTable