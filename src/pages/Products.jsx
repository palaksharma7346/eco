
import React, { useEffect } from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext.jsx'
import ProductCard from '../components/productCard.jsx'

const Products = () => {
  const { data, fetchApiProducts } = useContext(DataContext)

  useEffect(() => {
    fetchApiProducts()
    window.scrollTo(0,0)
  }, [])

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">All Products</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
           {data.length === 0 ? (
            <p className="text-center text-gray-600 col-span-full">No products found.</p>
          ) : (
            data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
           
        </div>
      </div>
    </div>
  )
}

export default Products
