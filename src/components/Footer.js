import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import image from '../image/footer_image/Payment.png'

const Footer = () => {
  const [email,setEmail] = useState('')
  console.log(email);

  const sentMail = () =>{
  alert(`sent your mail ${email}`)
  }
  return (
    <div className="bg-slate-900 text-white  p-10 ">
        <div className="container mx-auto mt-5 font-display mb-10  ">
      <div className="grid grid-cols-1 md:grid-cols-4  justify-items-center md:justify-items-start ">
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-5 capitalize">Popular Search</h3>
          <ul className="flex flex-col space-y-3 capitalize">
            <li>Apartment for Rent</li>
            <li>Apartment Law To Hiden</li>
            <li>Office For Buy</li>
            <li>Office for Rent</li>
            <li>Townhone for Rent</li>
            <li>shop for rent</li>
          </ul>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-5 capitalize">homepress market</h3>
          <ul className="flex flex-col space-y-3 capitalize">
            <li>las vegas office</li>
            <li>sacramento townhome</li>
            <li>new york apartment</li>
            <li>philodelphia office</li>
            <li>london townhome</li>
            <li>las angeles apartment</li>
          </ul>
        </div>
        <div className="mt-10">
        <h3 className="text-xl font-bold mb-5">Quick  Links</h3>
          <ul className="flex flex-col space-y-3 capitalize">
            <li>pricing plans</li>
            <li>xstore services</li>
            <li>about us</li>
            <li>terms & conditon</li>
            <li>privacy policy</li>
            <li>contact us</li>
          </ul>
        </div>
        <div className="mt-10 flex flex-col space-y-5">
        <h3 className="text-xl font-bold mb-5 capitalize">sign up for newsletter</h3>  
        <p>Enter your email bellow to receive a $30 coupon special 
            offers, excusive discounts and more!</p> 
            <div>
            <form>
                <input type="text" placeholder="Your email  address" value={email} onChange={(e) => setEmail(e.target.value)} className="px-5 py-2 text-gray-400"/>
                <button className=" text-slate-400 uppercase  py-2 px-2  w-[14.6rem] md:w-20 bg-white  hover:bg-primary mt-5 md:mt-0" onClick={() => (sentMail())}>sing up</button>
            </form>
            </div>
            <p>Follow Us</p>
            <div className="flex space-x-5 text-xl">
                < FaFacebookF />
                <FaXTwitter />
                <FaInstagram  />
                <FaWhatsapp />
                <FaYoutube />

                
            </div>
        </div>
      </div>
      <div >
      <ul className='flex md:flex-row flex-col md:space-x-8  items-center justify-center mt-8 mb-3' >
            <li className=' '>Home</li>
            <li className=' '>Luxury Villa</li>
            <li className=''>Properties</li>
            <li className=''>Blogs</li>
            <li className=' '>About Us</li>
            <li className=' '>Contacts</li>
        </ul>
        <hr />
      </div>
      <div className="mt-3 flex md:flex-row  flex-col  md:justify-between justify-center">
        <p>copyright 2024 R-State solution by R-State</p>
        <div><img src={image} alt="payment"/></div>

      </div>
      </div>
    </div>
  );
};

export default Footer;
