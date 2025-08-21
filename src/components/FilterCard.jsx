import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import React, { useEffect, useState } from 'react'
import { Label } from './ui/label'
import { setSearchedQuery } from '@/redux/jobSlice'
import { useDispatch } from 'react-redux'

const filterData = [
   {
    filterType:"Location",
    array:["Delhi NCR","Bangalore","Hyderabad","Pune","Mumbai"]
   },
   {
    filterType:"Industry",
    array:["Frontend Developer","Backend Developer","Fullstack Developer"]
   },
   {
    filterType:"Salary",
    array:["0-40k","42-1lakh","1 lakh to Slakh"]
   }
]

const FilterCard = () => {
  const[selectedValue,setSelectedValue] = useState('')
const dispatch = useDispatch()
  const changeHandler=(value)=>{
    setSelectedValue(value)
  }
  useEffect(()=>{
  //  console.log(selectedValue); // printing to check the selected radio is woring or not
      dispatch(setSearchedQuery(selectedValue))
  },[selectedValue])
  return (
    <div className='w-full sm:w-[300px] p-4 bg-white rounded-xl shadow-md overflow-y-auto max-h-[80vh]'>
      <h1 className='font-bold text-xl mb-4'>Filter Jobs</h1>
      <hr className='mb-4'/>
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {
          filterData.map((data,index) => (
            <div key={index}>
              <h1 className='font-semibold text-lg text-gray-700 mb-2'>{data.filterType}</h1>
              <div className='space-y-2'>
              {
                data.array.map((item,idx) => {
                  const itemId = `r${index-idx}`
                  return (
                    <div key={index} className='flex items-center gap-2 text-sm sm:text-base'>
                      <RadioGroupItem value={item} id={itemId}/>
                      {/* <Label>{item}</Label> */}
                      <Label htmlFor={itemId}>{item}</Label>

                    </div>
                  )
})
              }
              </div>
            </div>
          ))
}
      </RadioGroup>
    </div>
  )
}

export default FilterCard