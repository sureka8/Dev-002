import React from 'react'
import point1 from '../image/store_image/Point.png'
import point2 from "../image/store_image/Point-1.png"
import point3 from "../image/store_image/Point-2.png"
import point4 from "../image/store_image/Point-3.png"
import photo from "../image/store_image/Photo.png"
const Store = () => {
  return (
    <div className=''>
        <div className='container mx-auto mt-5 font-display'>
            <h1 className='text-center md:text-4xl text-2xl '>Eye Catching XStore Real Estate Demo</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 md:p-0 px-5'>

                <div className='flex items-center flex-col space-y-4 p-5'>
                    <img src={point1} alt="Point-1" />
                    <p className='md:text-2xl text-xl'>Develop Objective</p>
                    <p className='text-center md:text-lg  text-slate-500 font-medium'>Vestibulum lacinia arcu nulla Class aptent taciti sociosqu litr Torquent per conubia</p>

                </div>

                <div className='flex items-center flex-col space-y-4 p-5'>
                    <img src={point2} alt="Point-1" />
                    <p className='md:text-2xl text-xl'>Determine Resource</p>
                    <p className='text-center md:text-lg text-slate-500 font-medium'>Ontry to popular belief Lorom not simply random text has rot classical Latin litera</p>

                </div>

                <div className='flex items-center flex-col space-y-4 p-5'>
                    <img src={point3} alt="Point-1" />
                    <p className='md:text-2xl text-xl'>Create A Timeline</p>
                    <p className='text-center md:text-lg text-slate-500 font-medium'>There are many variations ofen passages of Lorem Ipsum avaible majority have suffered</p>

                </div>
                <div className='flex items-center flex-col space-y-4 p-5'>
                    <img src={point4} alt="Point-1" />
                    <p className='md:text-2xl text-xl'>Finalize Plan</p>
                    <p className='text-center md:text-lg text-slate-500 font-medium'>Iten is a long established fact that a reader will be distracte by the readable content</p>

                </div>
            </div>
        </div>
        <div className='bg-primary text-white'>
            <div className='container mx-auto mt-5 font-display py-10 md:px-0 px-10'>
                <div className='flex md:flex-row flex-col md:justify-between justify-center space-y-5'>
                    <h1 className=' md:text-3xl text-xl '>Gorgeous Home For Sale In Greenville</h1>
                    <div className='flex md:flex-row  space-x-5'>
                        <img src={photo} alt='photo' />
                        <div>
                            <p>Martin Miller</p>
                            <p>Our Agent</p>
                        </div>
                        <button  className='bg-white text-black px-8 py-2 rounded-md'>Discover More</button>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Store
