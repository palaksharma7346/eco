
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Breadcrums from '../components/Breadcrums'
import { IoCartOutline } from 'react-icons/io5'
import { useCart } from '../context/cartContext';


const SingleProduct = () => {
  const { id } = useParams()
  const [SingleProduct, setSingleProduct] = useState(null)
  const { addToCart } = useCart();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setSingleProduct(res.data)
        console.log("Fetched:", res.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchProduct()
    window.scrollTo(0, 0)
  }, [id])

  return (
    <>
      {SingleProduct && SingleProduct.title ? (
        <div className="px-4 pb-4 md:px-0">
          <Breadcrums title={SingleProduct.title} />
          <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div >
                <img src={SingleProduct.image} alt={SingleProduct.title} className='w-45 h-45  border-2 border-none  ' />
            </div>
            <div className='flex flex-col gap-6'>
                 <h1 className="md:text-4xl text-2xl font-bold text-gray-800">{SingleProduct.title}</h1>
                <p className="text-gray-700 text:xl md:text-2xl">{SingleProduct.description}</p>
                <p className="md:text-2xl text-xl font-semibold mt-2 text-red-500">${SingleProduct.price}</p>
                <div className='flex items-center gap-4'>
                    <label htmlFor="" className='text-sm font-medium text-gray-700'>Quantity</label>
                    <input type="number" min ={1} value={1} className='w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500 ' />

                </div>
                <div className='flex gap-4 mt-4'>
                    <button  onClick={()=>addToCart(SingleProduct)} className='px-6 flex gap-2 py-2 text-lg bg-red-500 text-white rounded-md  '><IoCartOutline className='w-6 h-6'/>Add to cart</button>
                </div>
            </div>

           
          
          
          

          </div>
          
        </div>
      ) : (
        <div className="text-center py-10">Nothing</div>
      )}
    </>
  )
}

export default SingleProduct
