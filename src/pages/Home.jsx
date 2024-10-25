import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import FoodItem from '../components/FoodItem'
import Cart from '../components/Cart'
import ClipLoader from "react-spinners/ClipLoader";



const Home = () => {
  
  return (
    <>
    <Navbar />
    <CategoryMenu />
    <FoodItem />
    <Cart />
    
    </>
  )
}

export default Home