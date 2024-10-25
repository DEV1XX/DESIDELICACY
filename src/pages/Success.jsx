import React, { useEffect, useState } from 'react'
import {HashLoader} from 'react-spinners'
import { useSelector } from 'react-redux';


const Success = () => {
  const currentTheme =useSelector((state)=>state.theme.theme)
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
   setTimeout(()=>{
    setLoading(false);
   },4000)
  },[])
  return ( loading  ? <div className='flex  w-full align-middle justify-center mt-80'><HashLoader color="#fa6a13"/></div> :
    (<div className={`${currentTheme==="dark" ?"bg-gray-900" :"bg-white"}flex  h-full text-xl lg:text-3xl font-bold text-orange-500 text-center  `}>
      <h2 className='mt-96 mr-52 lg:mt-80 text-center ml-28 text-nowrap'>Order successful !!!</h2>
    </div>)
  )
}

export default Success