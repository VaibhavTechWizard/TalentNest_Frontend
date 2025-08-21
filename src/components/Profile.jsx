// import React, { useState } from "react";
// import Navbar from "./shared/Navbar";
// import { Button } from "./button";
// import { Pen, Mail, Contact } from "lucide-react";
// import { Badge } from "./ui/badge";
// import { Label } from "@radix-ui/react-label";
// import AppliedJobTable from "./AppliedJobTable";
// import { Avatar, AvatarImage } from "./ui/avatar";
// import UpdateProfileDialog from "./UpdateProfileDialog";
// import { useSelector } from "react-redux";
// import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";
// // const skills = ["Html", "css", "Javascript", "React"];
// const isResume = true;

// const Profile = () => {
//   useGetAppliedJobs(); // here we get all applied jobs
//   const [open, setOpen] = useState(false);
//   const { user } = useSelector((store) => store.auth);
//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-4xl max-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
//         <div className="flex justify-between">
//           <div className="flex justify-center items-center gap-6">
//             <Avatar className="h-24 w-24">
//               <AvatarImage
//                 src={user?.profile?.profilePhoto}
//                 alt="Company Logo"
//               />
//             </Avatar>
//             <div>
//               <h1 className="font-medium text-xl">{user?.fullname}</h1>
//               <p>{user?.profile?.bio}</p>
//             </div>
//           </div>
//           <Button onClick={() => setOpen(true)} className="text-right">
//             <Pen />
//           </Button>
//         </div>
//         {/* my-for gap */}
//         <div className="my-5">
//           <div className="flex items-center gap-3">
//             <Mail />
//             <span>{user?.email}</span>
//           </div>
//           <div className="flex items-center gap-3 my-2">
//             <Contact />
//             <span>{user?.phoneNumber}</span>
//           </div>
//         </div>

//         <div className="my-5">
//           <h1>Skills</h1>
//           <div className="flex items-center gal-1">
//             {user?.profile?.skills && user.profile.skills.length !== 0 ? (
//   user.profile.skills.map((item, index) => <Badge key={index}>{item}</Badge>)
// ) : (
//   <span>NA</span>
// )}

//           </div>
//         </div>
//         <div className="grid w-full max-w-sm items-center gap-1.5">
//           <Label className="text-md font-bold">Resume</Label>
//           {
//             // for target blank to go on another page if is resume is true
//             isResume ? (
//               <a
//                 target="black"
//                 href={user?.profile?.resume}
//                 className="text-blue-500 w-full hover:underline cursor-pointer"
//               >{user?.profile?.resumeOriginalName}
//               </a>
//             ) : (
//               <span>NA</span>
//             )
//           }
//         </div>

//         <div className="max-w-4xl mx-auto bg-white rounded-2xl">
//           <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
//           {/* AppliedJob Table table */}
//           <AppliedJobTable />
//         </div>
//         <UpdateProfileDialog open={open} setOpen={setOpen} />
//       </div>
//     </div>
//   );
// };

// export default Profile;



// import React, { useState } from "react";
// import Navbar from "./shared/Navbar";
// import { Button } from "./button";
// import { Pen, Mail, Contact } from "lucide-react";
// import { Badge } from "./ui/badge";
// import { Label } from "@radix-ui/react-label";
// import AppliedJobTable from "./AppliedJobTable";
// import { Avatar, AvatarImage } from "./ui/avatar";
// import UpdateProfileDialog from "./UpdateProfileDialog";
// import { useSelector } from "react-redux";
// import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

// const isResume = true;

// const Profile = () => {
//   useGetAppliedJobs();
//   const [open, setOpen] = useState(false);
//   const { user } = useSelector((store) => store.auth);

//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-4 sm:p-6 md:p-8">
//         {/* Profile Top Section */}
//         <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6">
//           <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
//             <Avatar className="h-24 w-24">
//               <AvatarImage
//                 src={user?.profile?.profilePhoto}
//                 alt="Profile"
//               />
//             </Avatar>
//             <div className="text-center sm:text-left">
//               <h1 className="font-semibold text-xl">{user?.fullname}</h1>
//               <p className="text-sm text-gray-600">{user?.profile?.bio}</p>
//             </div>
//           </div>
//           <div className="self-end md:self-start">
//             <Button onClick={() => setOpen(true)}>
//               <Pen className="w-4 h-4 mr-2" /> Edit
//             </Button>
//           </div>
//         </div>

//         {/* Contact Info */}
//         <div className="my-5 space-y-2">
//           <div className="flex items-center gap-2 text-sm">
//             <Mail className="w-4 h-4" />
//             <span>{user?.email}</span>
//           </div>
//           <div className="flex items-center gap-2 text-sm">
//             <Contact className="w-4 h-4" />
//             <span>{user?.phoneNumber}</span>
//           </div>
//         </div>

//         {/* Skills */}
//         <div className="my-5">
//           <h1 className="font-medium text-md mb-2">Skills</h1>
//           <div className="flex flex-wrap gap-2">
//             {user?.profile?.skills && user.profile.skills.length !== 0 ? (
//               user.profile.skills.map((item, index) => (
//                 <Badge key={index}>{item}</Badge>
//               ))
//             ) : (
//               <span>NA</span>
//             )}
//           </div>
//         </div>

//         {/* Resume */}
//         <div className="my-5">
//           <Label className="text-md font-bold">Resume</Label>
//           {isResume && user?.profile?.resume ? (
//             <a
//               href={user?.profile?.resume}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block mt-1 text-blue-500 hover:underline"
//             >
//               {user?.profile?.resumeOriginalName}
//             </a>
//           ) : (
//             <span>NA</span>
//           )}
//         </div>

//         {/* Applied Jobs */}
//         <div className="bg-white rounded-2xl mt-6">
//           <h1 className="font-bold text-lg mb-4">Applied Jobs</h1>
//           <AppliedJobTable />
//         </div>

//         <UpdateProfileDialog open={open} setOpen={setOpen} />
//       </div>
//     </div>
//   );
// };

// export default Profile;



import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Button } from './ui/button'
import { Pen, Mail, Contact } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import { Avatar, AvatarImage } from "./ui/avatar";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";
import { useNavigate } from "react-router-dom";

const isResume = true;

const Profile = () => {
  const navigate = useNavigate()
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl my-5 p-4 sm:p-6 md:p-8 shadow-md animate-fadeIn">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={user?.profile?.profilePhoto}
                alt="Profile photo"
              />
            </Avatar>
            <div className="text-center sm:text-left">
              <h1 className="font-semibold text-xl text-gray-900 dark:text-white">
                {user?.fullname}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {user?.profile?.bio}
              </p>
            </div>
          </div>

          {/* Edit Button */}
          <div className="self-center md:self-start">
            <Button
              onClick={() => setOpen(true)}
              aria-label="Edit Profile"
              className="flex items-center gap-2"
            >
              <Pen className="w-4 h-4" />
              <span className="hidden sm:inline">Edit</span>
            </Button>
            {/* <Button onClick={()=>navigate('/UpdateProfileDialog')}>Edit</Button> */}
          </div>
        </div>

        {/* Contact Info */}
        <div className="my-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Contact className="w-4 h-4" />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="my-5">
          <h1 className="font-medium text-md text-gray-800 dark:text-white mb-2">
            Skills
          </h1>
          <div className="flex flex-wrap gap-2">
            {user?.profile?.skills?.length ? (
              user.profile.skills.map((item, index) => (
                <Badge key={index} className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-100">
                  {item}
                </Badge>
              ))
            ) : (
              <span className="text-gray-500">NA</span>
            )}
          </div>
        </div>

        {/* Resume Link */}
        <div className="my-5">
          <Label className="text-md font-bold text-gray-900 dark:text-gray-200">
            Resume
          </Label>
          {isResume && user?.profile?.resume ? (
            <a
              href={user.profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-1 text-blue-600 dark:text-blue-400 hover:underline"
            >
              {user.profile.resumeOriginalName}
            </a>
          ) : (
            <span className="text-gray-500">NA</span>
          )}
        </div>

        {/* Applied Jobs Section */}
        <div className="mt-8">
          <h1 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
            Applied Jobs
          </h1>
          <AppliedJobTable />
        </div>

        <UpdateProfileDialog open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Profile;
