import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import { HeroSection } from './HeroSection'
import CategoryCarouser from './CategoryCarouser'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import store from '@/redux/store'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  useGetAllJobs()
  const{user} = useSelector(store => store.auth) // we get user from here
 
  const navigate = useNavigate()
  useEffect(()=>{
   if(user?.role === "recruiter"){
    navigate('/admin/companies')
   }
  },[])
  return (
    <div>
        <Navbar/>
        <HeroSection />
         <CategoryCarouser/>
        <LatestJobs/>
       <Footer/>
    </div>
  )
}

export default Home