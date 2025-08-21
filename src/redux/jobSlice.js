import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const jobSlice = createSlice({
    name:"job",
    initialState:{
        allJobs:[],
        allAdminJobs:[],
        singleJob:null,
        searchJobByText:"",
        allAppliedJobs : [],
        searchedQuery:"",
          bookmarkedJobs: [], // ✅ New field
        },
    reducers:{
        //actions
        setAllJobs:(state,action)=>{
            state.allJobs = action.payload;
        },
        setSingleJob:(state,action) => {
            state.singleJob = action.payload
        },
        setAllAdminJobs:(state,action) => {
            state.allAdminJobs = action.payload
        },
        setSearchJobsByText:(state,action) => {
            state.searchJobByText = action.payload
        },
        setAllAppliedJobs :(state,action) =>{
            state.allAppliedJobs = action.payload
        },
        setSearchedQuery:(state,action) =>{
            state.searchedQuery = action.payload
        },
         toggleBookmark: (state, action) => {
    const jobId = action.payload;

    if (!Array.isArray(state.isBookmarked)) {
        state.bookmarkedJobs= [];
    }

    const isBookmarked = state.bookmarkedJobs.includes(jobId);
    if (isBookmarked) {
      state.bookmarkedJobs = state.bookmarkedJobs.filter(id => id !== jobId);
    } else {
      state.bookmarkedJobs.push(jobId);
    }
  },
    }
})
export const{
    setAllJobs,
    setSingleJob,
    setAllAdminJobs,
    setSearchJobsByText,
    setAllAppliedJobs,
    setSearchedQuery,
    toggleBookmark,
} =  jobSlice.actions;
export default jobSlice.reducer

// state.auth → holds authentication-related data

// state.job → holds job-related data like allJobs