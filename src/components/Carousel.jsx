import React from 'react'
import {useContext, useState, useEffect} from 'react'
import {getData} from '../context/DataContext.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  Slider  from 'react-slick';
import Category from './Category.jsx'
import { AiOutlineArrowLeft as OutlineArrowLeft, AiOutlineArrowRight as OutlineArrowRight } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
     const navigate = useNavigate()
 const { data, fetchApiProducts } = getData()

  useEffect(() => {
    fetchApiProducts();
  }, [])

  const SamplePrevArrow =(props)=>{
    const {className,style,onClick}= props;
    return(
      <div onClick = {onClick} className={`arrow ${className}`} style ={{zIndex:3}}>
        <OutlineArrowLeft className = 'arrows' style={{...style,display:"block", borderRadius:"50px", background:"#f53347", color:"white",position:"absolute",padding:"2px",left:"50px"}} onMouseOver="this.style.backgroundColor='#555' "/>
      </div>
    )
  }
  const SampleNextArrow =(props)=>{
    const {className,style,onClick}= props;
    return(
      <div onClick = {onClick} className={`arrow ${className}`} style ={{zIndex:3}}>
        <OutlineArrowRight  className = 'arrows' style={{...style,display:"block", borderRadius:"50px", background:"#f53347", color:"white",position:"absolute",padding:"2px",right:"50px"}} onMouseOver="this.style.backgroundColor='#555' "/>
      </div>
    )
  }
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed:2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<SampleNextArrow to ="next"/>,
    prevArrow:<SamplePrevArrow to ="prev"/>,
  };
  return (
    <div>
       <Slider {...settings}>{
        data?.slice(0,7)?.map((product)=>{
          return <div key = {product.id} className=' -z-10'>
            <div className='flex flex-col  gap-10 justify-center h-[500px] items-center md:my-0 my-20 px-4 md:flex-row'>
              <div className='md:space-y-6 space-y-3'>
                <h3 className='text-red-500 text-2xl font-semibold font-sans text-sm'>Because every thread tells a story</h3>
                <h1 className='md:text-4xl text-xl font-bold uppercase line-clamp-3 md:w-[500px] text-black'>{product.title}</h1>
                <p className='md:w-[500px] line-clamp-3 text-gray-700 pr-7'>{product.description}</p>
                <button className='bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2' onClick={()=>navigate(`/products/${product.id}`)}>shop now</button>
              </div>
              <div>
                <img src= {product.image} alt={product.title} className='w-80 h-80 object-cover border-2 border-none rounded-full mx-auto'/>
              </div>
            </div>
          </div>
        })}
      
    </Slider>
    <Category/>
    </div>
  )
}

export default Carousel
