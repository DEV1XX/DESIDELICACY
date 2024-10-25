import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/Slices/CartSlice'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const FoodCard = ({title,price,id,image,description,category,rating}) => {
  const currentTheme = useSelector((state)=>state.theme.theme);

  const dispatch = useDispatch();
  function AddToCartHandler(){
    dispatch(addToCart({title,price,id,rating,qty:1}));
    handleToast(title);
  }
  const handleToast = (name)=>{
    toast.success(`${name} added to cart successfully!!`)
   }
  return (
    <>
    <Toaster position="top-center" reverseOrder={false}  />
    <div className={`w-full  m-5 lg:w-1/5 ${currentTheme==="dark" ? "bg-gray-900 text-white" :"bg-white"} rounded-xl lg:m-5 hover:scale-105 lg:h-1/5 `}>
     <div className='p-10 bg-gray-50 w-auto flex justify-center '>
        <img src={image} alt="" className='h-[20vh] w-500px' />
     </div>
     <div className='flex justify-between text-xl font-semibold m-3 '>
     <h1 className='text-base'>{title}</h1>
     <h2 className='flex align-middle text-orange-600'><span className="material-symbols-outlined">
currency_rupee
</span>{price}</h2>
     </div> 
     <div className='m-3'> <p className='text-xsm'>{description}...... </p></div>
     <div className='flex justify-between align-middle m-3'>
        <div className='flex justify-center align-middle m-3'> <span className="material-symbols-outlined ">
     star
      </span>{rating}</div>
        <button className='bg-orange-500 
        text-black 
        rounded-lg p-2 hover:bg-orange-300 font-semibold m-3'
        onClick={AddToCartHandler} 
        >Add to Cart</button>
      </div>
    </div>
    </>
  )
}

export default FoodCard