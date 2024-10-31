import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit, Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function CompaniesTable() {
    const navigate = useNavigate();
const {allCompanies , searchCompanyByText} = useSelector(store => store.company);

const [fillterCompany , setFillterCompany] = useState(allCompanies);
   
 useEffect(()=>{
     const filleredCompany = allCompanies.length >= 0 && allCompanies.filter((company)=>{
        if(!searchCompanyByText){
            return true
        }

        return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
     });

     setFillterCompany(filleredCompany);
 },[allCompanies , searchCompanyByText]);
   
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent register</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        {/* <TableHead>Company</TableHead> */}
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {  allCompanies.length <= 0 ? <span>You Haven't Registered Any Company</span> :
                        fillterCompany?.map((companies) => (
                            <TableRow key={companies?._id}>
                                <TableCell>
                                    <Avatar>
                                        <AvatarImage src={companies.logo} />
                                    </Avatar>
                                </TableCell>
                                <TableCell>{companies?.name}</TableCell>
                                <TableCell>{companies?.createdAt.split('T')[0]}</TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                        <PopoverContent className='w-24'>
                                            <div className='flex item-center gap-2 w-fit cursor-pointer'
                                             onClick={()=> navigate(`/admin/companies/${companies._id}`)}>
                                                <Edit2 className='w-4' />
                                                <span>Edit</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default CompaniesTable