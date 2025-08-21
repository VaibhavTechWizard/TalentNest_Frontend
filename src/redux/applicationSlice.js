import {createSlice} from "@reduxjs/toolkit"
const applicationSlice= createSlice({
    name:'application',
    initialState:{
        applicant:[],
        applicants:[],// applicant:[] changed
    },
    reducers:{
        setAllApplicants:(state,action)=>{
            state.applicants = action.payload
        }
    }
});
// export const {setAllApplicants} = applicationSlice.actions;
   export const {setAllApplicants} = applicationSlice.actions; // ✅ Correct
 
export default applicationSlice.reducer

