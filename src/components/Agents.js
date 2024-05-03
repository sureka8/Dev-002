import React from "react";
import agent1 from "../image/agent_image/Photo.jpg";
import agent2 from "../image/agent_image/Photo-1.jpg";
import agent3 from "../image/agent_image/Photo-2.jpg";
import { FaStar } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Agents = () => {
  return (
    <div>
      <div className="bg-slate-50 h-auto py-10 md:px-0 px-10s">
      <div className="container mx-auto mt-5 font-display ">
        <div className="p-5 mb-3">
          <h1 className="md:text-4xl text-2xl text-center  font-bold capitalize">
            agent makes the differences
          </h1>
        
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:px-0 px-10 ">
          <div className="bg-white shadow-xl rounded-md  pb-10 space-x-3">
            <div className="flex flex-col justify-center items-center">
            <img src={agent1} alt="Blog Image" className="w-full rounded-md" />
            <h3 className="mt-4  font-semibold text-lg">
             Trevor Walsh
            </h3>
          
           <p className="text-primary text-xl "> Commercial Broker</p>
           </div>
            <div className="p-1 text-lg ">
                <div className="flex flex-row items-center justify-center text-slate-500 pb-3  space-x-3">
                    <FaFacebookF />
                    <FaXTwitter />
                    <FaInstagram />
                    
                    </div>
            </div>
            <p className="px-5 text-slate-400 text-center">There are many variations of passages olen Ipsum avaliable majority to suffered</p>
           
          </div>
          <div className="bg-white shadow-xl rounded-md  pb-10 space-x-3">
            <div className="flex flex-col justify-center items-center">
            <img src={agent2} alt="Blog Image" className="w-full rounded-md" />
            <h3 className="mt-4  font-semibold text-lg">
             Trevor Walsh
            </h3>
          
           <p className="text-primary text-xl "> Commercial Broker</p>
           </div>
            <div className="p-1 text-lg ">
                <div className="flex flex-row items-center justify-center text-slate-500 pb-3  space-x-3">
                    <FaFacebookF />
                    <FaXTwitter />
                    <FaInstagram />
                    
                    </div>
            </div>
            <p className="px-5 text-slate-400 text-center">There are many variations of passages olen Ipsum avaliable majority to suffered</p>
           
          </div>
          <div className="bg-white shadow-xl rounded-md  pb-10 space-x-3">
            <div className="flex flex-col justify-center items-center">
            <img src={agent3} alt="Blog Image" className="w-full rounded-md" />
            <h3 className="mt-4  font-semibold text-lg">
             Trevor Walsh
            </h3>
          
           <p className="text-primary text-xl "> Commercial Broker</p>
           </div>
            <div className="p-1 text-lg ">
                <div className="flex flex-row items-center justify-center text-slate-500 pb-3  space-x-3">
                    <FaFacebookF />
                    <FaXTwitter />
                    <FaInstagram />
                    
                    </div>
            </div>
            <p className="px-5 text-slate-400 text-center">There are many variations of passages olen Ipsum avaliable majority to suffered</p>
           
          </div>
        
        </div>
     
      </div>
    </div>
    </div>
  )
}

export default Agents
