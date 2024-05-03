import React from 'react'
import homeimg from '../image/blog_image/Image_7-300x197.jpg'

const Specialdeal = () => {
  return (
    <div className='container mx-auto mt-5 pt-12 md-px-0 px-10 '>
   <div className='flex flex-col justify-center items-center'>
    <h1 className='md:text-3xl text-xl'>Special Deal On Properties</h1>
    <p className='text-slate-500 md:text-lg md:text-start text-center'>Properties are selected for discount. Choose any property from Deals.</p>
   </div>
   <div className='flex flex-col md:flex-row p-3 mt-8'>
    <div className='w-full flex flex-col space-y-5 p-5'>
   <div>
   <label className='bg-primary text-white text-xs p-2 rounded-md'>30% OFF</label>
    <p className='md:text-2xl text-xl my-2'>Gorgeous Historic House For Sale</p>
   </div>
   <div className='flex items-center space-x-2 md:pb-10 pb-5'>
   <p className='md:text-lg line-through px-1 text-slate-500'>$675000</p> 
    <p className='md:text-2xl text-xl text-primary font-medium'> $5500.00</p>
   
   </div>
   <div className='pr-5 md:w-3/4 w-full'>
    <p className='text-slate-500 text-left'>unt thepe away from QM2 express bus to Monnattan and 
        locals pomenonly minutes from the URR Walkings distances 
        to Bay Terrace shopping centrs Baytridge Common Shopping 
        Center, pool clubs, movie theaters and tennis courts.</p>
        <button className='bg-primary px-3 py-2 text-white rounded-md mt-3'>Order now</button>
   </div>
    </div>
    <div className='md:w-3/4 h-84 w-full  '>
        <img src={homeimg} alt="property" className='object-cover w-full h-84 rounded-md' />
    </div>
   </div>
    </div>
  )
}

export default Specialdeal
