import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../Redux/Slices/SearchSlice'
import  { themeSwitch } from '../Redux/Slices/ThemeSlice'
import { useSelector } from 'react-redux'
import logo from './OOLogo.png';




const Navbar = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state)=>state.theme.theme);
  return (
    <>
    
    <div className='flex flex-col lg:flex-row justify-between p-4 sticky '>
        <div className='flex'>
        <div className='h-28 w-28 m-3'>
    <img className='' src={logo} alt="Logo" />
    </div>
    <div className='m-6'>
            <h3 className='text-gray-400 font-bold text-xl'>{Date().slice(0,15)}</h3>
            <h1 className={`${currentTheme==="dark" ? "text-orange-500":"text-black"} text-3xl  font-semibold hover:text-orange-600 `}>DesiDelicacy</h1></div>
        </div>
   
        <div className='flex'>
            <div className='mr-5 '>
              <button className='bg-white h-11 p-3 text-xs lg:text-xl rounded-lg hover:bg-gray-300 font-semibold hover:scale-105'
              onClick={
                ()=>{
                  dispatch(themeSwitch())
                }
              }>
              {currentTheme==="light" ? " Dark Mode" :"  Light Mode"}
              </button>
             </div>
            <input 
            type="search" 
            name="search" 
            placeholder='Search Here..' 
            id='' 
            className='border border-gray-400 rounded-lg p-2 w-full h-12 lg:w-80 outline-none  ' 
            onChange={(e)=>dispatch(setSearch(e.target.value))}
            />
        </div>
    </div>
    </>
  )
}

export default Navbar