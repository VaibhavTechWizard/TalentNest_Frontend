import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import {USER_API_END_POINT} from '@/utils/constant';

import { Input } from "@/components/input"; // ✅ Adjust the path if needed
import { Button } from "../button";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader, Loader2 } from "lucide-react";

const Login = () => {

  // const {loading,user} = useSelector(store=>store.auth.loading)
  const {loading,user} = useSelector(store=>store.auth)

  const navigate = useNavigate();
const dispatch = useDispatch();
  const[input,setInput] = useState({
    email:"",
    password:"",
    role:"",
  });

  const changeEventHandler = (e)=>{
    setInput({...input,[e.target.name]:e.target.value});
  }


    const submitHandler = async (e) =>{
      e.preventDefault();

         try{
          dispatch(setLoading(true))
        const response = await axios.post(`${USER_API_END_POINT}/login`,input,{
          headers:{
            "Content-Type":"application/json"
          },
          withCredentials:true 
        })
        
        if(response.data.success){
          dispatch(setUser(response.data.user))
          navigate("/")
          toast.success(response.data.message);
        }else{
                toast.error("Something went wrong. Please try again.");
        }
      }catch(error){
        console.log("Login Error:", error);
       // toast.error(error.response.data.message);

      }finally{
        dispatch(setLoading(false))
      }
    }
    // it prevent the user when click to signup when he is  logged in

useEffect(()=>{
  if(user){
    navigate("/")
  }
},[user,navigate])
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>
  
          <div className="my-2">
            <Label>Email</Label>
                        <Input type="email" value={input.email} name="email" onChange={changeEventHandler} placeholder="vam@gmail.com" />
            
          </div>

          <div className="my-2">
            <Label>Password</Label>
                        <Input type="password" value={input.password} name="password" onChange={changeEventHandler} placeholder="1234" />
            
          </div>

          <div className="flex items-center justify-between">

            <RadioGroup className="flex items-center justify-between">
             
              <div className="flex items-center space-x-2">
              <Input type="radio" name="role" value="student" checked={input.role === 'student'} onChange={changeEventHandler} className="cursor-pointer"/>
                              <Label htmlFor="r1">Student</Label>
              </div>
               <div className="flex items-center space-x-2">
                              <Input type="radio" name="role" value="recruiter"  checked={input.role === 'recruiter'} onChange={changeEventHandler} className="cursor-pointer"/>
               
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {
            loading ? 
            <Button className="w-full my-4"> <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please Wait</Button>  : 
          <Button type="submit" className="w-full my-4 bg-gray-800 text-white">Login</Button>

          }
          <span className="text-small">Don't have an account? <Link to="/signup" className="text-blue-600">Signup</Link> </span>
        </form>
      </div>
    </div>
  );
};

export default Login;


