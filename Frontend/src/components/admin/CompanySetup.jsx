import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'
import useGetCompanyById from '@/hooks/useGetCompanyById'

function CompanySetup() {
    const params = useParams();
    useGetCompanyById(params.id)
    const [input, setInput] = useState({
        name: '',
        description: '',
        website: '',
        location: '',
        file: null
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {singleCompany} = useSelector(store => store.company);
    
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const changeFileHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', input.name);
        formData.append('description', input.description);
        formData.append('website', input.website);
        formData.append('location', input.location);
        if (input.file) {
            formData.append('file', input.file);
        }

        try {
            setLoading(true);
            const res = await axios.put(`${COMPANY_API_END_POINT}/update/${params.id}`, formData, {
                headers: {
                    "Content-Type": 'multipart/form-data'
                },
                withCredentials: true
            });

            if (res.data.success) {
                toast.success(res.data.message);
                navigate('/admin/companies');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setInput({
            name:singleCompany.name || '',
            description:singleCompany.description || '',
            website:singleCompany.website || '',
            location:singleCompany.location || '',
            file: null
        })
    }, [singleCompany]);
    return (
        <div>
            <Navbar />
            <div className='max-w-xl mx-auto my-8'>
                <form onSubmit={handleSubmit}>
                    <div className='flex items-center gap-5 my-5'>
                        <Button variant='outline'
                            className="flex items-center gap-2 text-gray-500 font-semibold"
                            onClick={() => navigate('/admin/companies')}>
                            <ArrowLeft />
                            <span className=''>Back</span>
                        </Button>
                        <h1 className='font-bold text-xl ml-10'>Company Setup</h1>
                    </div>

                    <div className='grid grid-cols-2 gap-3 items-center'>

                        <div>
                            <Label>Company Name</Label>
                            <Input
                                type='text'
                                name='name'
                                value={input.name}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div>
                            <Label>Description</Label>
                            <Input
                                type='text'
                                name='description'
                                value={input.description}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div>
                            <Label>Website</Label>
                            <Input
                                type='url'
                                name='website'
                                value={input.website}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div>
                            <Label>Location</Label>
                            <Input
                                type='text'
                                name='location'
                                value={input.location}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div>
                            <Label>Company Logo</Label>
                            <Input
                                type='file'
                                accept='image/*'
                                onChange={changeFileHandler}
                            />
                        </div>

                    </div>
                    {loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> please wait</Button>
                        : <Button type='submit' className='bg-[#2e52e6] hover:bg-[#1f3cb0] w-full my-4'>Save Changes</Button>
                    }

                </form>
            </div>
        </div>
    )
}

export default CompanySetup