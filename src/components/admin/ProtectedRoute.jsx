// import  { useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// const ProtectedRoute = ({children}) => {
//   const{user} = useSelector(store=>store.auth)
//   const navigate = useNavigate();

//   useEffect(()=>{
//     if(user === null || user.role !== 'recruiter'){
//         navigate('/')
//     }
//   },[user,navigate])
//   return(
//     <>
//     {children}
//     </>
//   )
// }

// export default ProtectedRoute

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user || user.role !== 'recruiter') {
      navigate('/');
    } else {
      setIsLoading(false); // Allow render only if authorized
    }
  }, [user, navigate]);

  if (isLoading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  return <>{children}</>;
};

export default ProtectedRoute;
