import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data'
import handleToast from './FoodCard'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import CategorySlice from '.././Redux/Slices/CategorySlice'


const FoodItem = () => {
  const category = useSelector((state)=>state.cat.category) 
   const search = useSelector((state) => state.search.search)
  return (
    <>
    <div className='flex flex-wrap m-10 h-1/4 justify-evenly'>
    {FoodData.filter((food)=>{
      if(category==="All"){
        return food.name.toLowerCase().includes(search.toLowerCase())
      }else{
        return category === food.category && food.name.toLowerCase().includes(search.toLowerCase());
      }
    }).map((food)=>{
      return (
        <FoodCard 
        title={food.name}
        key={food.id}
        id={food.id}
        price={food.price}
        image={food.img}
        description={food.desc.slice(0,50)}
        handleToast={handleToast}
        rating={food.rating}
        />
      )
    })}
    </div>
    </>
  )
}

export default FoodItem 

