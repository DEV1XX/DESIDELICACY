import React from 'react'
import FoodData from '../Data'
import { removeFromCart,incItem ,decItem} from '../Redux/Slices/CartSlice'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'


const CartItem = ({title,image,id,price,qty=22}) => {
  const dispatch = useDispatch();
 
  return (
    <div className='flex align-middle justify-between shadow-md rounded-md m-5'>
        <div className='w-[30vw] lg:w-[8vw]'>
            <img src={image} alt={title} />
        </div>
        <div className='flex align-middle flex-col justify-center'>
            <h3 className='font-semibold text-sm '>{title}</h3>
            <h2 className='flex text-orange-500 font-bold text-xl'><span className="material-symbols-outlined ">currency_rupee</span>{price}</h2>
        </div>
        <div className='flex align-middle  my-6 p-1'>
        <span className="material-symbols-outlined hover:scale-110 hover:shadow-md hover:cursor-grab h-8 w-8 flex justify-center  rounded-full" 
        onClick={() => {
         qty==1 ? dispatch(removeFromCart({id})) : dispatch(decItem({id,qty}))
        }}
        >remove_circle</span>
        <div className='text-orange-500 font-bold text-2xl flex align-middle justify-center mx-2 mb-3'>{qty}</div>
        <span className="material-symbols-outlined hover:scale-110 hover:shadow-md hover:cursor-grab h-8 w-8 flex justify-center  rounded-full"
        onClick={() => {
          dispatch(incItem({id,qty}))
        }}
        >add_circle</span>
        <span className="material-symbols-outlined mx-3 hover:scale-110 hover:shadow-md rounded-full h-8 w-8 flex align-middle justify-center" 
        onClick={() => {
          dispatch(removeFromCart({id}))
          toast("item removed successfully!!")}}>delete</span>
        </div>
    </div>
  )
}

export default CartItem