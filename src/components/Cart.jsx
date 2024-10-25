import React  from 'react'
import CartItem from './CartItem'
import {useState} from 'react'
import {useSelector} from 'react-redux'
import FoodData from '../Data'
import { useDispatch } from 'react-redux'
import {Navigate ,useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'





const Cart = () => {
  const currentTheme = useSelector((state)=>state.theme.theme);
  const cartItems = useSelector((state)=> state.cart.cart)
  const [cartActive , setCartActive] = useState(false);
  const cartToggle = ()=>{
    setCartActive(!cartActive)
  }
  const cartQty = cartItems.reduce((cartQty,item)=> cartQty + item.qty,0);
  const totalPrice = cartItems.reduce((totalPrice,item)=> totalPrice + (item.price*item.qty),0);
  const navigate = useNavigate()
  
  return (
    <>
  <div className= {`${cartActive ? "translate-x-0" : "translate-x-full"} ${currentTheme==="dark" ? "bg-gray-900 text-white" :"bg-white"} w-full lg:w-[25vw] fixed right-0 top-0 h-screen flex justify-between flex-col transition-all duration-200 ease-out z-50`}>
    <div className='flex justify-between mt-8 mr-5 ml-5 mb-0 text-3xl'>
        <span>My Orders</span>
        <span className='rounded-full material-symbols-outlined text-3xl hover:cursor-grab hover:shadow-xl hover:scale-125   ' onClick={cartToggle}>close</span>
    </div>
    <div className='overflow-y-scroll flex flex-col align-top h-full'>
    {cartItems.length>0 ? cartItems.map((food)=>{
      return (<CartItem 
      title = {food.name}
      key={food.id}
      id={food.id}
      price={food.price}
      image={food.img}
      qty={food.qty}
      /> ) 
   }):<h1 className='text-3xl mt-72 ml-10 justify-center  '>Your Cart is Empty!!</h1>}
  
    </div>
    <div className='m-3'>
        <h3 className='text-xl lg:mb-3 ml-3'>Items:{cartQty}</h3>
        <h3 className='text-xl lg:mb-3 ml-3'>Total Price:{totalPrice}</h3>
        <button className='bg-orange-500 font-semibold rounded-lg p-2 hover:bg-orange-300 text-semibold text-white m-2 w-full outline-none'
        onClick={()=>{
          if(cartItems.length==0){
            toast("Please add something in your cart!")
          }else navigate("/success");
        }}
        >Proceed to Buy</button>
    </div>
  </div> 
  <div className={`${cartQty>0 ? "animate-bounce duration-75" : "animate-none"} rounded-full fixed bottom-5 right-5 bg-orange-500 h-12 w-12 flex justify-center hover:scale-125 shadow-md hover:cursor-grab`} onClick={()=>setCartActive(true)}  >
    <span className="material-symbols-outlined pt-2 font-semibold text-3xl">shopping_cart</span>
    </div>
  </>
  )
}

export default Cart
