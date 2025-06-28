import React, {useState} from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link, NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import {CgClose} from 'react-icons/cg'
import { useCart } from "../context/cartContext";
import{ HiMenuAlt1,HiMenuAlt3} from 'react-icons/hi'
import ResponsiveMenu from "./ResponsiveMenu ";
const Navbar = ({location,getLocation,setOpenDropdown,openDropdown}) => {
const [openNav,setOpenNav] = useState(false)
 const {cartItem } = useCart()
  const toggleDropdown =()=>{
    setOpenDropdown(!openDropdown)
  }

  return (
    <div className="bg-white py-3 px:4 shadow-2xl md:px-0">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/*logo section*/}
        <div className="flex gap-7 items-center">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl">
              <span className="text-red-500 font-serif">D</span>haage
            </h1>
          </Link>
          <div className="md:flex gap-1 cursor-pointer text-gray-700 items-center hidden">
            <MapPin className="text-red-500 " />
            <span className="font-semibold">
              {location ? <div> 
              <p>{location.country}</p>
               <p>{location.state}</p>
              </div> : "Add Address"}
            </span>
            <FaCaretDown onClick={toggleDropdown}/>
          </div>
          {
          openDropdown ? <div className="w-[250px] h-max shadow-2xl bg-white fixed top-15 left-60 border-2 p-5 border-gray-500 rounded-md">
            <h1 className="font-semibold mb-4 text-xl flex justify-between">Change location <span onClick={toggleDropdown}><CgClose/></span> </h1>
            <button onClick={getLocation} className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-400">detect my location</button>

          </div> : null}
        </div>
        {/* menu section*/}
        <nav className="flex gap-7">
          <ul className=" md:flex gap-7 items-center text-xl font-semibold hidden ">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-4 transition-all border-red-500"
                    : "text-black"
                }cursor-pointer`
              }
            >
              {" "}
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-4 transition-all border-red-500"
                    : "text-black"
                }cursor-pointer`
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"/About"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-4 transition-all border-red-500"
                    : "text-black"
                }cursor-pointer`
              }
            >
            
              <li>About</li>
            </NavLink>
            <NavLink
              to={"/Contact"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-4 transition-all border-red-500"
                    : "text-black"
                }cursor-pointer`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
          <Link to={"/cart"} className="relative top-3">
            <IoCartOutline className="h-7 w-7" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-4 -right-1 text-white">
              {cartItem.length}
            </span>
          </Link>
          <div className="hidden md:block">
            <SignedOut>
              <SignInButton className='bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer ' />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          {
            openNav ? <HiMenuAlt3 onClick={()=>setOpenNav(false)} className ='h-7 w-7 md:hidden '/>:<HiMenuAlt1  onClick={()=>setOpenNav(true)}  className ='h-7 w-7 md:hidden '/>
           
            }
        </nav>
      </div>
      <ResponsiveMenu openNav = {openNav} setOpenNav = {setOpenNav}/>
    </div>
  );
};

export default Navbar;
