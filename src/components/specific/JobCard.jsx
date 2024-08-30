import React from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

const filterData = [
    {
        filterType: "Location",
        array: ["Delhi", "Gurgaon", "Pune", "Banglore", "Chennai", "Mumbai", "Hyderabad"]
    },
    {
        filterType: "Position",
        array: ["Frontend Developer", "Backend Developer", "Fullstack Developer", "Data Engineer", "DevOps Engineer"]
    },
    {
        filterType: "Salary",
        array: ["0-40k", "50k-1 lakh", "1 lakh to 5 lakh"]
    },
]

const JobCard = () => {
    return (
        <div className='w-full bg-white p-4 sm:p-5 md:p-6 lg:p-8 rounded-md shadow-md'>
            <h1 className='font-bold text-lg sm:text-xl md:text-2xl'>Filter Jobs</h1>
            <hr className='my-4' />

            <RadioGroup>
                {
                    filterData.map((data, index) => (
                        <div key={index} className='mb-4'>
                            <h2 className='font-medium text-base sm:text-lg md:text-xl'>{data.filterType}</h2>
                            {
                                data.array.map((item, index) => (
                                    <div key={index} className='flex items-center space-x-3 my-2'>
                                        <RadioGroupItem value={item} />
                                        <Label className='text-sm sm:text-base'>{item}</Label>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    )
}

export default JobCard;
