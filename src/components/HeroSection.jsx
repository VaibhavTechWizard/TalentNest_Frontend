// import React, { useState } from "react";
// import { Button } from "./ui/button";
// import { Search } from "lucide-react";
// import { useDispatch } from "react-redux";
// import { setSearchedQuery } from "@/redux/jobSlice";
// import { useNavigate } from "react-router-dom";

// export const HeroSection = () => {
//   const [query, setQuery] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
//   const searchJobHandler = () => {
//     dispatch(setSearchedQuery(query));
//     navigate("/browse");
//   };
//   return (
//     <div className="text-center px-4 sm:px-8">
//       <div className="flex flex-col gap-5 my-10 max-w-4xl mx-auto">
//         <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
//           No. 1 Job Hunt Website
//         </span>
//         <h1 className="text-5xl sm:text-5xl leading-snug sm:leading-tight font-bold">
//           Search, Apply &<br /> Get Your{" "}
//           <span className="text-[#6A38C2]">Dream Jobs</span>
//         </h1>
//         <p className="text-lg sm:text-lg text-gray-600">
//          Trusted by millions, our job portal connects you with top employers across industries. Discover opportunities that move your career forward.
//         </p>

//         {/* <div className="flex w-full sm:w-[80%] md:w-[60%] lg:w-[50%] shadow-lg border border-gray-200 pl-3 pr-1 py-1 rounded-full items-center gap-2 mx-auto bg-white">
//           <input
//             type="text"
//             placeholder="find Your dream Jobs"
//             onChange={(e) => setQuery(e.target.value)}
//             className="outline-none border-none w-full bg-transparent text-sm sm:text-base px-2"
//           /> */}
//           <div className="flex w-full md:w-[70%] lg:w-[40%] shadow-lg border border-gray-200 px-3 py-2 rounded-full items-center gap-3 mx-auto bg-white">
//           <input
//             type="text"
//             placeholder="Find your dream job"
//             onChange={(e) => setQuery(e.target.value)}
//             className="outline-none border-none w-full bg-transparent text-sm md:text-base"
//           />
//           <Button
//             onClick={searchJobHandler}
//             className="rounded--full bg-[#6A38C2] hover:bg-[#5a2fac] transition text-white p-2"
//           >
//             <Search className="h-5 w-5" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };


import React, { useState } from "react";
import { Button } from "./button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center px-4">
      <div className="flex flex-col gap-5 my-10 max-w-4xl mx-auto">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium text-sm md:text-base">
          No. 1 Job Hunt Website
        </span>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Search, Apply &<br />
          Get Your <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>

        <p className="text-sm md:text-base text-gray-700">
          Trusted by millions, our job portal connects you with top employers across industries. 
          Discover opportunities that move your career forward.
        </p>

        <div className="flex w-full md:w-[70%] lg:w-[40%] shadow-lg border border-gray-200 px-3 py-2 rounded-full items-center gap-3 mx-auto bg-white">
          <input
            type="text"
            placeholder="Find your dream job"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full bg-transparent text-sm md:text-base"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-full bg-[#6A38C2] text-white px-3 py-2"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
