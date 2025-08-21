import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Job from './Job';
import Navbar from './shared/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { setSearchedQuery } from '@/redux/jobSlice';

// const randomJobs = [1,2,45];
export const Browse = () => {
    const {allJobs} = useSelector(store=>store.job)
    const dispatch = useDispatch()
    useGetAllJobs()
    useEffect(()=>{
        return()=>{
            dispatch(setSearchedQuery(""))
        }
    },[])
  return (
    <div className='max-w-7wl mx-auto my-1'>
        <Navbar/>
        <div>
            <h1 className='font-bold text-xl my-10'>Search Result ({allJobs.length})</h1>
            <div className='grid grid-cols-3 gap-4 mt-5'>
{
                allJobs.map((job) => {//allJobs dynamically getting all the jobs
                    return(
                        // <Job key={job.id} job={job} />
                        <Job key={job._id} job={job} />
                    )
                })
            }
            </div>
            
        </div>
    </div>
  )
}