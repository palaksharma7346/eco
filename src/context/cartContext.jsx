import { Filter } from 'lucide-react'
import React, { createContext, useContext, useState, useEffect} from 'react'
import {toast} from 'react-toastify'
const CartContext = createContext()


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItem] = useState(() => {
    // 👇 Load cart from localStorage on first render
    const stored = localStorage.getItem('cartItems');
    return stored ? JSON.parse(stored) : [];
  });

  // 👇 Save cart to localStorage on any update
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  const addToCart = (product) => {
    const itemInCart = cartItems.find((item)=> item.id == product.id)
    if(itemInCart){
      const updatedCart = cartItems.map((item)=>
      item.id === product.id ? {...item,quantity :item.quantity +1}:item
      );
      setCartItem(updatedCart)
      toast.success("Product Quantity Increased")
    }
    else{
      setCartItem([...cartItems, {...product, quantity :1}])
      toast.success("Product is added to cart")
    }
   
  }
const updatedQuantity = (cartItems, productId, action)=>{
  setCartItem(
    cartItems.map(item => {
    if(item.id === productId){
      let newUnit = item.quantity
      if(action === "increase"){
        newUnit = newUnit+1;
        toast.success("Quantity is increased")
      }
      else if(action == "decrease"){
        newUnit = newUnit -1;
        toast.success("Quantity is decreased")
      }
      return newUnit >0 ? {...item, quantity :newUnit}  :null
    }
    return item;
  }).filter(item => item != null)
)
}
const deleteItem = (productId)=>{
  setCartItem(cartItems.filter(item =>item.id !== productId))
  toast.success("Product is removed from cart")
}
  return (
    <CartContext.Provider value={{ cartItems, addToCart,setCartItem,updatedQuantity,deleteItem }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
