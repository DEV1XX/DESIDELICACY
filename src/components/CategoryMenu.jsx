import React, { useEffect } from 'react'
import { useState } from 'react'
import FoodData from '../Data'
import {useDispatch , useSelector} from 'react-redux'
import { setCategory } from '../Redux/Slices/CategorySlice'

const CategoryMenu = () => {
  const [categories,setCategories] = useState([]);
  const listUniqueCategories = ()=>{
    const uniqueCategories = [...new Set(FoodData.map((food)=>food.category))];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  }
  useEffect(()=>{
    listUniqueCategories();
  },[]);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state)=>state.cat.category)
  return (
    <>
    <h1 className='text-gray-500 text-xs lg:text-lg px-3 overflow-x-scroll lg:overflow-x-hidden mt-4'>Choose your craving—Lunch, Dinner, Breakfast, or a quick Snack!</h1>
    <div className='mx-4 flex justify-center lg:justify-start my-2'>
    <button  className='bg-gray-300 text-black rounded-lg p-2 hover:bg-orange-500 font-semibold m-1' onClick={()=>{dispatch(setCategory('All'))}}>All</button>
        {categories.map((category,index)=>{
          return (<button key={index} className={`bg-gray-300 text-black rounded-lg p-2 hover:bg-orange-500 font-semibold m-1 ${selectedCategory===category && "bg-orange-500"}`} onClick={()=>{dispatch(setCategory(category))}}>{category}</button>)

        })}
    </div>
    </>
  )
}

export default CategoryMenu