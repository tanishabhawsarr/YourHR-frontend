import React from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

const filterData=[
    {
        filterType:"Location",
        array:["Delhi","Gurgaon","Pune","Banglore","Chennai","Mumbai","Hyderabad"]
    },
    {
        filterType:"Postion",
        array:["Frontend Developer","Backend Developer","Fullstack Developer","Data Engineer","DevOps Engineer"]
    },
    {
        filterType:"Salary",
        array:["0-40k","50k-1 lakh","1 lakh to 5 lakh"]
    },
]
const JobCard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
       <h1 className='font-bold text-lg'>Filter Jobs</h1>
       <hr className='mt-3'/>

       <RadioGroup>
        {
            filterData.map((data,index)=>(
                <div>
                    <h1 className='font-medium text-lg'>{data.filterType}</h1>
                    {
                        data.array.map((item,index)=>{
                            return(
                                <div className='flex items-center space-x-2 my-2'>
                                <RadioGroupItem value={item}/>
                                <Label>{item}</Label>
                                </div>
                            )
                        })
                    }
                </div>
            ))
        }
       </RadioGroup>
    </div>
  )
}

export default JobCard