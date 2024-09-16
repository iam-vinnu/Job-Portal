import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from './ui/button'



const CategoryCarousal = () => {
    const category = [
        'Frontend Developer',
        'Backend Developer',
        'Blockchain Developer',
        'Database Engineer',
        'Data Science',
        'Graphic Designer',
        'FullStack Developer' ]
    return (
        <div className='my-16'>
            <Carousel className="w-full max-w-xl mx-auto">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <Button variant="outline" className="rounded-full">{cat}</Button>
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