import React, { useState } from 'react'
import axios from 'axios'
import { DialogDescription } from './ui/dialog';
import {Dialog, DialogHeader ,DialogContent,DialogTitle, DialogFooter} from './ui/dialog'
 import { Input } from './ui/input'
import {Label} from './ui/label'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'
import { USER_API_END_POINT } from '@/utils/constant'
 const UpdateProfileDialog = ({open,setOpen}) => {

    const[loading,setLoading] = useState(false)
    const{user} = useSelector(store => store.auth);

    const[input,setInput] = useState({
        fullname: user?.fullname,
        email:user?.email,
        phoneNumber:user?.phoneNumber,
        bio:user?.bio,
        skills:user?.skills?.map(skill =>skill),
        file:user?.profile?.resume
    })
    const dispatch = useDispatch()

    // const changeEventHandler = (e) =>{
    //     setInput({...input, [e.target.name]: e.target.value});
    // }
const changeEventHandler = (e) => {
  const { name, value } = e.target;
  if (name === 'skills') {
    setInput({ ...input, skills: value.split(',').map(s => s.trim()) });
  } else {
    setInput({ ...input, [name]: value });
  }
};

    const filerChangeEventHandler = (e)=>{
        const file = e.target.files?.[0];
        setInput({...input,file})
    }

    const submitHandler =  async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname",input.fullname);
        formData.append("email",input.email);
        formData.append("phoneNumber",input.phoneNumber);
        formData.append("bio",input.bio);
        formData.append("skills",input.skills);
        if(input.file){
        formData.append("file",input.file);
        }
         try{
            setLoading(true)
            const res = await axios.post(`${USER_API_END_POINT}/profile/update`,formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                },
                withCredentials:true
            })
            if(res.data.success){
                dispatch(setUser(res.data.user));
                toast.success(res.data.message || "Profile updated successfully")
            }
            
         }catch(error){
            console.log(error);
            toast.error(error.response.data.message || "Something went wrong.")
         }
        finally{
                setLoading(false) 
            }
        setOpen(false)
         console.log("Submitting:", input);
    }
  return (

    <div>
        {/* <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className={"sm;max-w-[425px]"} onInteractOutside={()=>setOpen(false)}>
                <DialogHeader>
                    <DialogTitle>Update Profile</DialogTitle>
                </DialogHeader>
                <form onSubmit={submitHandler}>
                    <div className='grid gap-4 py-4'>

                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label htmlFor="name" className="text-right">Name</Label>
                        <Input 
                          id='fullname'
                          name='fullname'
                          type="text"
                          value={input.fullname}
                         onChange={changeEventHandler}
                          className='col-span-3'
                         />  
                        </div>
                      

                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label htmlFor="name" className="text-right">Email</Label>
                        <Input 
                          id='email'
                          name='email'
                          type={"text"}
                          value={input.email}
                          onChange={changeEventHandler}
                          className='col-span-3'
                         />  
                        </div>
                      
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label htmlFor="number" className="text-right">Number</Label>
                        <Input 
                          id='phoneNumber'
                          name='phoneNumber' 
                          value={input.phoneNumber}
                          onChange={changeEventHandler}
                          className='col-span-3'
                         />                        

                    </div>

                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label htmlFor="bio" className="text-right">Bio</Label>
                        <Input 
                          id='bio'
                          name='bio' 
                          value={input.bio}
                          onChange={changeEventHandler}
                          className='col-span-3'
                         />  
                        </div>
                      

                  <div className='grid grid-cols-4 items-center gap-4'>
                            <Label htmlFor="skills" className="text-right">Skills</Label>
                        <Input 
                          id='skills'
                          name='skills' 
                            value={input.skills?.join(', ') || ''}
                        //   value={input.skills}
                          onChange={changeEventHandler}
                          className='col-span-3'
                         />  
                        </div>

                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label htmlFor="file" className="text-right">Resume</Label>
                        <Input 
                          id='file'
                          name='file' 
                          onChange={filerChangeEventHandler}
                          type="file"
                          accept="application/pdf"
                          
                          className='col-span-3'
                         />  
                        </div> 
                        
                    </div>
                    <DialogFooter>
                        {
            loading ? 
            <Button className="w-full my-4"> <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please Wait</Button>  : 
          <Button type="submit" className="w-full my-4 bg-gray-800 text-white">Update</Button>

          }
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog> */}
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent
    className="w-[90vw] sm:w-[500px] max-w-[95vw] rounded-xl px-4 py-6 sm:px-6 sm:py-8"
    onInteractOutside={() => setOpen(false)}
  >
    <DialogHeader>
      <DialogTitle className="text-lg sm:text-xl">Update Profile</DialogTitle>
      <DialogDescription className="text-sm text-gray-500">
        Update your information and upload a new resume
      </DialogDescription>
    </DialogHeader>

    <form onSubmit={submitHandler} className="space-y-5 mt-4">
      {/* Fullname */}
      <div className="grid gap-2">
        <Label htmlFor="fullname">Name</Label>
        <Input
          id="fullname"
          name="fullname"
          type="text"
          value={input.fullname}
          onChange={changeEventHandler}
        />
      </div>

      {/* Email */}
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={input.email}
          onChange={changeEventHandler}
        />
      </div>

      {/* Phone Number */}
      <div className="grid gap-2">
        <Label htmlFor="phoneNumber">Number</Label>
        <Input
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          value={input.phoneNumber}
          onChange={changeEventHandler}
        />
      </div>

      {/* Bio */}
      <div className="grid gap-2">
        <Label htmlFor="bio">Bio</Label>
        <Input
          id="bio"
          name="bio"
          type="text"
          value={input.bio}
          onChange={changeEventHandler}
        />
      </div>

      {/* Skills */}
      <div className="grid gap-2">
        <Label htmlFor="skills">Skills (comma separated)</Label>
        <Input
          id="skills"
          name="skills"
          value={input.skills?.join(', ') || ''}
          onChange={changeEventHandler}
        />
      </div>

      {/* Resume Upload */}
      <div className="grid gap-2">
        <Label htmlFor="file">Resume</Label>
        <Input
          id="file"
          name="file"
          type="file"
          accept="application/pdf"
          onChange={filerChangeEventHandler}
        />
      </div>

      {/* Button */}
      <DialogFooter>
        {loading ? (
          <Button className="w-full">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please Wait
          </Button>
        ) : (
          <Button
            type="submit"
            className="w-full bg-gray-800 text-white hover:bg-gray-700 transition"
          >
            Update
          </Button>
        )}
      </DialogFooter>
    </form>
  </DialogContent>
</Dialog>


    </div>
  )
}

export default UpdateProfileDialog