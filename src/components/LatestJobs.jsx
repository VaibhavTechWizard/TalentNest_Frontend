import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
 
//const randomJobd = [1,2,3,4,5,6,7,8] manullaly creating job
const LatestJobs = () => {
  const navigate = useNavigate()
  const {allJobs} = useSelector(store => store.job);
  return (
    <div className='max-w-7xl mx-auto my-20 px-4'>
        <h1 className='text-4xl font-bold text-center sm:text-left'><span className='text-[#6A38C2]'>Latest & Top</span> Job Openings</h1>
        {/* multiple job card display */}
        
        {/* dynamically creating the job in website */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-5'>
            {
                allJobs.length <= 0 ? <span className="text-gray-500 col-span-full">No Job Available</span> : allJobs.slice(0,6).map((job)=><LatestJobCards  key={job._id} job={job}/>)
            }
        </div>
    </div>
  )
}

export default LatestJobs