import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    'Frontend Developer',
    'Backend Developer',
    'Blockchain Developer',
    'Database Engineer',
    'Data Science',
    'Graphic Designer',
    'FullStack Developer' ];

const CategoryCarousal = () => {
  const navigate = useNavigate();
   const dispatch = useDispatch();
        const handleSearch = (query) =>{
            dispatch(setSearchedQuery(query));
            navigate('/browse');
          }
    return (
        <div className='my-16'>
            <Carousel className="w-full max-w-xl mx-auto">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <Button onClick={()=>handleSearch(cat)} variant="outline" className="rounded-full">{cat}</Button>
                            </CarouselItem>
                        ))
                    }

                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    )
}

export default CategoryCarousal