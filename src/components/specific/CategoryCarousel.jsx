import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Button } from '../ui/button'

const category=[
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "Graphic Designer",
    "Data Engineer",
    "Devops Engineer"
]

const CategoryCarousel = () => {
  return (
    <div>
       <Carousel className="w-full max-w-xl mx-auto my-20">
       
        <CarouselContent className="md:basis-1/2 lg:basis-1/3 sm:basis-1/4 sm:mx-auto ">
        {
            category.map((cat,index)=>(
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 sm:basis-1/4">
                    <Button variant="outline">{cat}</Button>
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

export default CategoryCarousel;