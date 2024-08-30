import React from 'react'
import LatestJobCards from './LatestJobCards'

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
  return (
    <div className='max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center'>
        <span className='text-[#6a28c2]'>Latest and Top </span> Job Openings
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8 justify-items-center'>
        {
          randomJobs.slice(0, 6).map((item) => (
            <LatestJobCards key={item} />
          ))
        }
      </div>
    </div>
  )
}

export default LatestJobs;
