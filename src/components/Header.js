import React, { useState } from 'react'
import { HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [open,setOpen]=useState(false)
  return (
   
    <nav className='  '>
   <div className='flex space-x-32 ml-5 mt-5 font-display md:justify-normal justify-between md:px-0 px-10 '>
    <div className=''>
        <p className='uppercase md:text-3xl text-sm text-green font-bold'>R-state</p>
        <p className='text-xs text-center'>Real Estate</p>
    </div>
    <div className='md:hidden text-3xl ' onClick={()=> setOpen(!open)}>
     {open? (<RxCross1 />) :( <HiBars3 /> )}
    </div>
    <div  className='md:flex hidden items-center '>
        <ul className='flex flex-row space-x-8' >
            <li className='hover:text-primary hover:border-b-2 hover:border-b-primary hover:font-bold text-base '>Home</li>
            <li className='hover:text-primary hover:border-b-2 hover:border-b-primary hover:font-bold text-base '>Luxury Villa</li>
            <li className='hover:text-primary hover:border-b-2 hover:border-b-primary hover:font-bold text-base '>Properties</li>
            <li className='hover:text-primary hover:border-b-2 hover:border-b-primary hover:font-bold text-base '>Blogs</li>
            <li className='hover:text-primary hover:border-b-2 hover:border-b-primary hover:font-bold text-base '>About Us</li>
            <li className='hover:text-primary hover:border-b-2 hover:border-b-primary hover:font-bold text-base '>Contacts</li>
        </ul>
    </div>
    </div>
    <div>
            {" "}
            <ul
              className={`
        md:hidden bg-white z-10 fixed w-full h-max  top-16 overflow-y-auto bottom-0 pt-10 pb-10 pl-4 justify-center space-y-5 
        duration-500 ${open ? "left-0" : "left-[-100%]"} 
        `}
            >
            <li className='hover:text-primary md:hover:border-b-2 hover:border-l-2  hover:border-l-primary md:hover:border-b-primary hover:font-bold text-base '>Home</li>
            <li className='hover:text-primary md:hover:border-b-2 hover:border-l-2  hover:border-l-primary md:hover:border-b-primary hover:font-bold text-base '>Luxury Villa</li>
            <li className='hover:text-primary md:hover:border-b-2 hover:border-l-2  hover:border-l-primary md:hover:border-b-primary hover:font-bold text-base '>Properties</li>
            <li className='hover:text-primary md:hover:border-b-2 hover:border-l-2  hover:border-l-primary md:hover:border-b-primary hover:font-bold text-base '>Blogs</li>
            <li className='hover:text-primary md:hover:border-b-2 hover:border-l-2  hover:border-l-primary md:hover:border-b-primary hover:font-bold text-base '>About Us</li>
            <li className='hover:text-primary md:hover:border-b-2 hover:border-l-2  hover:border-l-primary md:hover:border-b-primary hover:font-bold text-base '>Contacts</li>
            
            </ul>
          </div>
    </nav>
   
  )
}

export default Header
