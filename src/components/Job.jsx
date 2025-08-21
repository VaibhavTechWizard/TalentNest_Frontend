// import React from 'react'
// import { Button } from './button'
// import { Bookmark,BookmarkCheck } from "lucide-react"; // ✅ Correct component name
// import { Avatar, AvatarImage } from './ui/avatar';
// import { Badge } from './ui/badge'
// import { useNavigate } from 'react-router-dom';

// const Job = ({job}) => {
//   const navigate = useNavigate();
//   // const jobId = "gdfvdfvvd";


//       // TEMP local state (later fetch/save from backend)
//       const [bookmarked,setBookmarked] = React.useState(false)
  
//       const handleBookmark = ()=>{
//           setBookmarked(!bookmarked)
//       }

//   const daysAgoFunction = (mongodbTime) => {
//     const createdAt = new Date(mongodbTime);
//     const currentTime = new Date();
//     const timeDifference = currentTime - createdAt // to get when it was created
//     // console.log("job.createdAt", job?.createdAt);//debug th see in console when was job created

//     return Math.floor(timeDifference / (1000*24*60*60)) // 1 day
//   }
//   return (
//     <div className='p-5 rounded-2xl  shadow-lg bg-white border border-gray-100 flex flex-col justify-between h-full'>
//         <div className='flex items-center justify-between'>
//         <p className='flex items-center text-gray-700 gap-2 my-2'>
//           {daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}
//            </p>
//         <Button className="rounded-full" size="icon"><Bookmark/></Button>
//         </div>

//         <div className='flex items-center gap-4 mt-4'>
//             <Avatar>
//                <AvatarImage src={job?.company?.logo} 
//                alt="Company Logo"/>
//             </Avatar>
//         <div>
//             <h1 className='font-medium text-lg'>{job?.company?.name} </h1>
//             <p className='text-sm text-gray-500'>India</p>
//         </div>
//         </div>
        
//         <div className='mt-4'>
//             <h1 className='font-bold text-lg mb-2'>{job?.title}</h1>
//             {/* <p className='text-sm text-gray-600 line-clamp-2'>{job?.description}</p> */}
//             <p className='text-sm text-gray-600 h-24 overflow-y-auto'>{job?.description}</p> 
//             {/* scrolling property to desciption */}

//         </div>
//           <div className='flex items-center gap-2 mt-4'>
//             <Badge className='text-blue-700 font-bold' variant="ghost">{job?.position} Position</Badge>
//             <Badge className=' text-[#F83002]' variant="ghost">{job?.jobType}</Badge>
//             <Badge className='text-[#7209b7] font-bold' variant="ghost">{job?.salary} LPA</Badge>
//         </div>
//         <div className='flex items-center gap-4 mt-4'>
//             <Button onClick={()=>navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
//             <Button className='bg-[#7209b7]'>Save For Later</Button>
//         </div>
//     </div>
//   )
// }

// export default Job


import React from 'react'
import { Button } from './button'
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBookmark } from '@/redux/jobSlice';
const Job = ({ job }) => {
  const navigate = useNavigate();
const dispatch = useDispatch()
  const { bookmarkedJobs } = useSelector(store => store.job);
  const isBookmarked = bookmarkedJobs?.includes(job._id);
  const handleBookmark = () => {
    console.log("Print,",isBookmarked);
    
    dispatch(toggleBookmark(job._id));
  };

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  };

  return (
    <div className='p-5 rounded-2xl shadow-lg bg-white border border-gray-200 flex flex-col justify-between h-full'>
      <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-500'>
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button
          className='rounded-full'
          size='icon'
          variant="ghost"
          onClick={handleBookmark}
          title={isBookmarked ? "Remove Bookmark" : "Bookmark this job"}
        >
          <Bookmark color={isBookmarked ? "#7209b7" : "#888"} />
        </Button>
      </div>

      <div className='flex items-center gap-4 mt-4'>
        <Avatar>
          <AvatarImage src={job?.company?.logo} alt="Logo" />
        </Avatar>
        <div>
          <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
          <p className='text-sm text-gray-500'>India</p>
        </div>
      </div>

      <div className='mt-4'>
        <h1 className='font-bold text-xl mb-2'>{job?.title}</h1>
        <p className='text-sm text-gray-600 h-24 overflow-y-auto'>
          {job?.description}
        </p>
      </div>

      <div className='flex flex-wrap items-center gap-2 mt-4'>
        <Badge className='text-blue-700 font-bold' variant="ghost">
          {job?.position} Position
        </Badge>
        <Badge className='text-[#F83002]' variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className='text-[#7209b7] font-bold' variant="ghost">
          {job?.salary} LPA
        </Badge>
      </div>

      <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mt-4'>
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
          className='w-full sm:w-auto'
        >
          Details
        </Button>
        <Button className='bg-[#7209b7] text-white w-full sm:w-auto'>
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
