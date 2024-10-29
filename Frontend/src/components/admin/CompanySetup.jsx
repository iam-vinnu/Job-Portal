import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

function CompanySetup() {
    const [input, setInput] = useState({
        name: '',
        description: '',
        website: '',
        location: '',
        file: null
    });

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    return (
        <div>
            <Navbar />
            <div className='max-w-xl mx-auto my-8'>
                <form>
                    <div className='flex items-center gap-5 my-5'>
                        <Button variant='outline' className="flex items-center gap-2 text-gray-500 font-semibold">
                            <ArrowLeft />
                            <span className=''>Back</span>
                        </Button>
                        <h1 className='font-bold text-xl'>Company Setup</h1>
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
                            <Label>Company Name</Label>
                            <Input
                                type='text'
                                name='name'
                                value={input.name}
                                onChange={changeEventHandler}
                            />
                        </div>
                           
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
                            <Label>Company Name</Label>
                            <Input
                                type='text'
                                name='name'
                                value={input.name}
                                onChange={changeEventHandler}
                            />
                        </div>
                        
                        <div>
                            <Label>Company Name</Label>
                            <Input
                                type='text'
                                name='name'
                                value={input.name}
                                onChange={changeEventHandler}
                            />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompanySetup