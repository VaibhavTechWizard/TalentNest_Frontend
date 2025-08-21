import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import ApplicantsTable from './ApplicantsTable'
import axios from 'axios'
import { APPLICATION_API_END_POINT } from '@/utils/constant'
import { useParams } from 'react-router-dom'// we get the id using this
import { useDispatch, useSelector } from 'react-redux'
import { setAllApplicants } from '@/redux/applicationSlice'

const Applicants = () => {
    const params = useParams();
    //console.log("Params:", params);
  const {applicants} = useSelector(store => store.application)
  
    const dispatch = useDispatch()
    useEffect(()=>{
        const fetchAllApplicant = async () => {
            try{
                const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`,{withCredentials:true});
          //     console.log(res.data);
               console.log(res.data.applications);

                    dispatch(setAllApplicants(res.data.applications));
               
                // if(res.data.success){
                //     dispatch(setAllApplicants(res.data.job));
                // }
            }catch(error){
                console.log(error);
                
            }
        }
        fetchAllApplicant();
    },[])
  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto'>
            <h3 className='font-bold text-xl my-5'>Applicants {applicants?.length}</h3>
            <ApplicantsTable/>
        </div>
    </div>
  )
}

export default Applicants