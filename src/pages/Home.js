import React from 'react'
import home from '../image/blog_image/Image_4-300x197.jpg'
import Header from '../components/Header'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";


const Home = () => {
  return (
    <div>
    <div  className="bg-cover bg-no-repeat h-screen w-full  relative overflow-hidden "  style={{ backgroundImage: `url(https://monarchhomesdesign.ca/cdn/shop/files/custom-home-homepage.png?v=1707845640)` }}>
     <Header />
     <div className='container mx-auto  font-display '>
    
     <div className='flex flex-col justify-center  items-center text-white py-28 pl-20'>
    
     <p className='text-lg font-medium'>All type properties are published here</p>
     <h1 className='text-5xl font-bols'>Find The Best Place To Be</h1>
     <button className='bg-primary px-5 py-3 font-semibold rounded-md'>Start Exploring</button>
    
     </div>
     </div>
     
 
     
    </div>
    <div className='bg-primary text-white'>
            <div className='container mx-auto  font-display py-10 md:px-0 px-10'>
                <div className='flex md:flex-row flex-col md:justify-between justify-center space-y-5 items-center'>
                    <h1 className='  text-xl '>don't see the city you were looking for? help us out by suggesting!</h1>
                    <div className='bg-primary border-white  border-[1px] px-5 py-3 rounded-md flex flex-row  space-x-5 items-center'>
                    <MdOutlineCheckBoxOutlineBlank /> 
                   <button >Suggest City</button>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
