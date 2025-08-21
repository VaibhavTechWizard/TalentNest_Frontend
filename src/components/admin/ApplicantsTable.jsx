import { MoreHorizontal } from 'lucide-react'
import React from 'react'
import { Table,TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import axios from 'axios';
import { APPLICATION_API_END_POINT } from '@/utils/constant';

const shortListingStatus = ["Accepted","Rejected"];
const ApplicantsTable =()=> {


  const {applicants} = useSelector(store => store.application)

  const statusHandler = async (status,id)=>{
    //console.log('called');
     console.log("accepted");
    
    try{
      axios.defaults.withCredentials = true
      const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`,{
        status,
      applicantId:id,
    })
     
      if(res.data.success){
        toast.success(res.data.message)
      }
    }catch(error){
      toast.error(error.response.data.message);
      
    }
  }
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent applied user</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>FullName</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className={"text-right"}>Action</TableHead>
          </TableRow>
        </TableHeader>

          <TableBody>
            {
              applicants?.map((item)=>{
                const user = item.applicant
                return(
                  <TableRow key={item._id}>
                    <TableCell>{user?.fullname}</TableCell>
                    <TableCell>{user?.email}</TableCell>
                    <TableCell>{user?.phoneNumber}</TableCell>
                  
                    <TableCell>
                      {
                        user?.profile?.resume ? <a className='text-blue-600' href={user?.profile?.resume} target='_blank' rel='noopener  noreferrer'>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
                      } </TableCell>

                    <TableCell>{new Date(item.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell className={"float-right cursor-pointer"}>
                    <Popover>
                      <PopoverTrigger>
                        <MoreHorizontal/>
                      </PopoverTrigger>
                      <PopoverContent className={"w-32"}>
                        {shortListingStatus.map((status,index) =>{
                          return(
                          //    <div onClick={()=>statusHandler(status,item?._id)} key={index} className='flex w-fit items-center my-2 cursor-pointer'>
                          //   <span>{status}</span>
                          // </div>
                          < div
  onClick={() => {
    if (item?._id) {
      statusHandler(status, item._id);
    } else {
      console.error("Missing _id for item:", item);
      toast.error("Could not update status: missing ID");
    }
  }}
  key={index}
  className='flex w-fit items-center my-2 cursor-pointer'
>
  <span>{status}</span>
</div>

                          )
                        })
                        }
                      </PopoverContent>
                    </Popover>
                    </TableCell>
                  </TableRow>
                )
              })
            }
            {/* {
         applicant &&  applicant?.applications?.map((item)=>(
         <TableRow key={item._id || item.email}>
              <TableCell>{item.fullname}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.contact}</TableCell>
              <TableCell>{item.resume}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell className={"float-right cursor-pointer"}>
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal/>
                    </PopoverTrigger>    
                    <PopoverContent className='w-32'>
                      {
                  shortListingStatus.map((status)=>{
                    return(
                      <div key={status} className='flex w-fit items-center my-2 cursor-pointer'>
                        <span>{status}</span>
                      </div>
                    )
                  })
                }
                    </PopoverContent>
                 </Popover>
                
              </TableCell>

            </TableRow>
              ))
            } */}
          </TableBody>
      </Table>
    </div>
  )
}

export default ApplicantsTable