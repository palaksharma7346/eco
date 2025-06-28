
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext.jsx'
import { useNavigate } from 'react-router-dom'

const Category = () => {
   const navigate = useNavigate()
  const { data, fetchApiProducts } = useContext(DataContext)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [filteredProducts, setFilteredProducts] = useState([])

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => curElem[property])
    return ['all', ...new Set(newVal)]
  }

  const categoryOnlyData = getUniqueCategory(data, 'category')

  const fetchCategoryProducts = async (category) => {
    let url = category === 'all'
      ? 'https://fakestoreapi.com/products'
      : `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`
    
    const res = await fetch(url)
    const result = await res.json()
    setFilteredProducts(result)
  }

  useEffect(() => {
    fetchApiProducts()
  }, [])

  useEffect(() => {
    fetchCategoryProducts(selectedCategory)
  }, [selectedCategory])

  return (
    <div className='bg-[#101829] text-white'>
      {/* Category Buttons */}
      <div className='max-w-7xl mx-auto flex flex-wrap gap-4 flex-wrap items-center justify-center  py-7 px-4'>
        {
          categoryOnlyData.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(prev => (prev === item ? null : item))}
              className={`uppercase bg-red-500 px-3 py-1 rounded-md cursor-pointer ${
                selectedCategory === item ? 'ring-2 ring-white' : ''
              }`}
            >
              {item}
            </button>
          ))
        }
      </div>

      {/* Display Filtered Products */}
       {selectedCategory !== null && (
      <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-10'>
        {
          filteredProducts.map(product => (
            <div key={product.id} className='bg-white text-black p-4 rounded-md shadow-md'>
              <img src={product.image} alt={product.title} className='h-40 w-full object-contain mb-2 cursor-pointer' onClick={()=>navigate(`/products/${product.id}`)} />
              <h2 className='font-semibold text-sm'>{product.title}</h2>
              <p className='text-green-600 font-bold'>${product.price}</p>
            </div>
          ))
        }
      </div>
       )}
    </div>
  )
}

export default Category
