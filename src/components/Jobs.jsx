import React from 'react'
import Navbar from './shared/Navbar'
import JobCard from './specific/JobCard'
import Job from './specific/Job';

const jobsArray=[1,2,3,4,5,6,7,8];

const Jobs = () => {
  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mt-5 mx-auto'>
        <div className='flex gap-5'>
         <div className='w-20%'>
         <JobCard/>
         </div>
        { 
          jobsArray.length <= 0 ? <span>Job Not Found</span> :
          (
            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                <div className='grid grid-cols-3 gap-4'>
                {
                jobsArray.map((items,index)=>(
                    <div>
                      <Job/>
                    </div>
                ))
                }
                </div>
            </div>
          )
        }
        </div>
        </div>
    </div>
  )
}

export default Jobs