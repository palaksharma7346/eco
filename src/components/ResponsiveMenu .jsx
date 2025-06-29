import { UserButton, useUser } from '@clerk/clerk-react'
import React,{useRef,useEffect} from 'react'
import { FaUserCircle } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/clerk-react";
const ResponsiveMenu  = ({openNav,setOpenNav}) => {

const navRef= useRef();

useEffect(()=>{
const handleClickOutside = (event)=>{
  if(openNav && navRef.current && !navRef.current.contains(event.target)){
    setOpenNav(false)
  }
};
document.addEventListener('mousedown',handleClickOutside);
return ()=>{
  document.removeEventListener('mousedown',handleClickOutside);
}
},[openNav,setOpenNav])

const{user} = useUser()
  return (
   <div>
    {openNav && 
    (
      <div ref = {navRef} className={`${openNav ? "left-0":"-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[50%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all `}>
     <div>
        <div className='flex items-center justify-start gap-3'>
            {
                user ? <UserButton  size ={40}/>:<FaUserCircle size ={40}/>
            }
            <div>
                <h1>hello{ user?.firstName}</h1>
            </div>
        </div>
        <nav className='mt-12'>
            <ul className='flex flex-col gap-7 text-2xl font-semibold'>
                    <Link
              to={"/"}
              onClick = {()=>setOpenNav(false)}
                className= "border-b-4  cursor-pointer text-black"
            >
              {" "}
              <li>Home</li>
            </Link>
            <Link
              to={"/products"}
               onClick = {()=>setOpenNav(false)}
                className= "border-b-4 cursor-pointer text-black"
            >
              <li>Products</li>
            </Link>
            <Link
              to={"/About"}
               onClick = {()=>setOpenNav(false)}
               className= "border-b-4  cursor-pointer text-black"
            >
            
              <li>About</li>
            </Link>
            <Link
              to={"/Contact"}
               onClick = {()=>setOpenNav(false)}
              className= "border-b-4  cursor-pointer text-black"
            >
              <li>Contact</li>
            </Link>
            <div className=" md:block">
            <SignedOut>
              <SignInButton className='bg-red-500 text-white px-1 py-1 text-xl rounded-md cursor-pointer ' />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
            </ul>
        </nav>
     </div>
    </div>
    )}
   </div>
  )
}

export default ResponsiveMenu 
