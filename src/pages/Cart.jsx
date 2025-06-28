import React from 'react'
import { useCart } from '../context/cartContext'
import { FaRegTrashAlt } from 'react-icons/fa';
import { LuNotebookText } from 'react-icons/lu';
import { MdDeliveryDining } from 'react-icons/md';
import { GiShoppingBag } from 'react-icons/gi';
import {useUser} from'@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import emptyCart from '../assets/vecteezy_empty-state-empty-cart-illustration_47468658.jpg'
const Cart = ( {location,getLocation}) => {
  const {cartItem, updatedQuantity, deleteItem} = useCart()
  const navigate = useNavigate()
  const totalPrice = cartItem.reduce((total,item)=> total+(item.price*item.quantity),0)
  const {user} = useUser()
  return (
    <div className='mt-30 max-w-6xl mx-auto mb-5 px-4 md:px-0'>
     {
      cartItem.length >0 ? <div> 
        <h1 className='font-bold text-2xl'>My Cart  ({cartItem.length})</h1>
        <div>
          <div className='mt-10'>
            {cartItem.map ((item,index) =>{
              return <div key ={index} className='bg-gray-100 rounded-md flex items-center justify-between mt-3 w-full'>
                <div className='flex items-center md:gap-4 gap-0'>
                  <img src={item.image} alt={item.title} className='w-20 h-20 object-cover border-2 border-none rounded-full mx-auto' />
                  <div>
                    <h1 className='md:w-[300px] w-[100px] line-clamp-2'>{item.title}</h1>
                    <p className='text-red-500 text-semibold text-lg'>${item.price}</p>
                  </div>
                </div>
                <div className='bg-red-500 text-white flex flex-gap-4 p-2 rounded-md font-semibold md:font-bold text-xl'>
                  <button className='cursor-ponter ' onClick={()=>updatedQuantity(cartItem, item.id,"decrease")}>-</button>
                  <span>  {item.quantity}  </span>
                  <button className='cursor-pointer' onClick={()=>updatedQuantity(cartItem, item.id,"increase")}>+</button>
                </div>
                <span  onClick={()=>deleteItem(item.id)} className='hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl '>
                  <FaRegTrashAlt/>
                </span>
              </div>
            })}
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 md:gap-20'>
            <div className='bg-gray-100 rounded-md p-7 mt-4 space-y-2'>
              <h1 className='text-gray-800 font-bold text-xl'>Delivery Info</h1>
              <div className='flex flex-col space-y-1'>
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder='EnterYour Name' className='p-2 rounded-md' value ={user?.fullName} />
              </div>
              <div className='flex flex-col space-y-1'>
                  <label htmlFor="">Address</label>
                  <input type="text" placeholder='EnterYour Address' className='p-2 rounded-md' value ={location.country} />
              </div>
              <div className='flex w-full gap-5'>
                <div className='flex flex-col space-y-1 w-full'>
                    <label htmlFor="">State</label>
                    <input type="text" placeholder='EnterYour State' className='p-2 rounded-md w-full' value ={location.state} />
                </div>
                <div className='flex flex-col space-y-1 w-full'>
                    <label htmlFor="">PostCode</label>
                    <input type="text" placeholder='EnterYour PosrCode' className='p-2 rounded-md w-full' value ={location.postcode} />
                </div>
              </div>
              <div className='flex w-full gap-5'>
                <div className='flex flex-col space-y-1 w-full'>
                    <label htmlFor="">Country</label>
                    <input type="text" placeholder='EnterYour Country' className='p-2 rounded-md w-full' value ={location.country}/>
                </div>
                <div className='flex flex-col space-y-1 w-full'>
                    <label htmlFor="">Phone No.</label>
                    <input type="number" placeholder='EnterYour Number' className='p-2 rounded-md w-full' />
                </div>
              </div>
              <button className='bg-red-500 text-white px-3 py-1 rounded-md mt-3 cursor-pointer'>Submit</button>
              <div className='flex item-center justify-center w-full text-gray-700'>
              ------------OR------------
            </div>
            <div className='flex  justify-center'>
             <button onClick={getLocation} className='bg-red-500 text-white px-3 py-2 rounded-md'>Detect Location</button>
            </div>
            </div>
              <div className='bg-white border border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2 h-max'>
                <h1 className='text-gray-800 font-bold text-xl'>Bill details</h1>
                <div className='flex justify-between items-center'>
                  <h1 className='flex gap-1 items-center text-gray-700'><span><LuNotebookText /></span>Items total</h1>
                  <p>${totalPrice}</p>
                </div>
                <div className='flex justify-between items-center'>
                  <h1 className='flex gap-1 items-center text-gray-700'><span><MdDeliveryDining /></span>Delivery Charge</h1>
                  <p className='text-red-500 font-semibold'><span className='text-gray-600 line-through'>$15</span> FREE</p>
                </div>
                <div className='flex justify-between items-center'>
                  <h1 className='flex gap-1 items-center text-gray-700'><span><GiShoppingBag /></span>Handling Charge</h1>
                  <p className='text-red-500 font-semibold'>$5</p>
                </div>
                <hr  className='text-gray-200 mt-2'/>
                <div className='flex justify-between items-center'>
                  <h1 className='font-semibold text-lg'>Grand total</h1>
                  <p className='font-semibold text-lg'>${totalPrice + 5}</p>
                </div>
                <div>
                  <h1 className='font-semibold text-gray-700 mb-3 mt-7'>Apply Promo Code</h1>
                  <div className='flex gap-3'>
                    <input type="text" placeholder='Enter code' className='p-2 rounded-md w-full'/>
                    <button className='bg-white text-black border border-gray-200 px-4 cursor-pointer py-1 rounded-md'>Apply</button>
                  </div>
                </div>
                <button className='bg-red-500 text-white px-3 py-2 rounded-md w-full cursor-pointer mt-3'>Proceed to Checkout</button>
              </div>
            </div>
          </div>
          </div>
        
       : <div className='flex flex-col gap-3 justify-center items-center h-[500px]'>
       <h1 className=' text-red-500/80 font-bold text-5xl text-muted mt-8'>Oops! Cart is empty</h1>
       <img src={emptyCart} alt="" className='w-[400px]' />
       <button onClick={()=> navigate('/products')} className='bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer'>Continue shopping</button>
       </div>
     }
    </div>
  )
}

export default Cart
