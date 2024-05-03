import React from "react";
import image1 from "../image/blog_image/Image_1-300x197.jpg";
import image2 from "../image/blog_image/Image_2-250x165.jpg";
import image3 from "../image/blog_image/Image_4-300x197.jpg";
import { FaStar } from "react-icons/fa";

const Villa = () => {
  return (
    <div className="bg-slate-50 h-auto py-10 md:px-0 px-10">
      <div className="container mx-auto mt-5 font-display  ">
        <div className="p-5 mb-3">
          <h1 className="md:text-4xl text-2xl text-center  font-bold capitalize">
            serching for the best places?
          </h1>
          <p className="text-gray-500 text-center md:text-lg text-sm mt-2">
            Handpicked properties by your Agent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12  ">
          <div className="bg-white shadow-xl rounded-md  pb-10 space-x-3">
            <div className="flex flex-col justify-center items-center">
            <img src={image1} alt="Blog Image" className="w-full rounded-md" />
            <h3 className="mt-4  md:text-2xl text-lg">
              Historical Grand Family Villa Rio
            </h3>
            <div className="flex space-x-2 sp items-center mt-5 text-xl md:text-2xl text-yellow-500 ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
           <p className="text-primary md:text-xl text-lg text-semibold mt-3"> <span className="line-through">$18600.00</span> $16500.00</p>
           </div>
            <div className="p-5 md:text-lg text-sm ">
                <div className="flex flex-row justify-between text-slate-500 pb-3  border-b-slate-400 border-b-2 mt-3">
                    <p className="uppercase">bedrooms :</p>
                    <p>7 Rooms</p>
                    </div>
                    <div className="flex flex-row justify-between text-slate-500 pb-3  border-b-slate-400 border-b-2 mt-3">
                    <p className="uppercase">squarefeet :</p>
                    <p>3226</p>
                    </div>
                    <div className="flex flex-row justify-between text-slate-500 pb-3  mt-3">
                    <p className="uppercase">Location :</p>
                    <p>89th st, London</p>
                    </div>
            </div>
           
          </div>
          <div className="bg-white shadow-xl rounded-md  pb-10 space-x-3">
            <div className="flex flex-col justify-center items-center">
            <img src={image2} alt="Blog Image" className="w-full rounded-md" />
            <h3 className="mt-4  text-2xl">
             Luxury Villa In Rego Park
            </h3>
            <div className="flex space-x-2 sp items-center mt-5 text-2xl text-yellow-500 ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
           <p className="text-primary text-xl  text-semibold mt-3"> $125000.00</p>
           </div>
            <div className="p-5 text-lg ">
                <div className="flex flex-row justify-between text-slate-500 pb-3  border-b-slate-400 border-b-2 mt-3">
                    <p className="uppercase">bedrooms :</p>
                    <p>8 Rooms</p>
                    </div>
                    <div className="flex flex-row justify-between text-slate-500 pb-3  border-b-slate-400 border-b-2 mt-3">
                    <p className="uppercase">squarefeet :</p>
                    <p>2256</p>
                    </div>
                    <div className="flex flex-row justify-between text-slate-500 pb-3  mt-3">
                    <p className="uppercase">Location :</p>
                    <p>54th st, London</p>
                    </div>
            </div>
           
          </div>
          <div className="bg-white shadow-xl rounded-md  pb-10 space-x-3">
            <div className="flex flex-col justify-center items-center">
            <img src={image3} alt="Blog Image" className="w-full rounded-md" />
            <h3 className="mt-4  text-2xl">
             Boutiqus Space Greenville
            </h3>
            <div className="flex space-x-2 sp items-center mt-5 text-2xl text-yellow-500 ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
           <p className="text-primary text-xl  text-semibold mt-3">  $115000.00</p>
           </div>
            <div className="p-5 text-lg ">
                <div className="flex flex-row justify-between text-slate-500 pb-3  border-b-slate-400 border-b-2 mt-3">
                    <p className="uppercase">bedrooms :</p>
                    <p>6 Rooms</p>
                    </div>
                    <div className="flex flex-row justify-between text-slate-500 pb-3  border-b-slate-400 border-b-2 mt-3">
                    <p className="uppercase">squarefeet :</p>
                    <p>4556</p>
                    </div>
                    <div className="flex flex-row justify-between text-slate-500 pb-3  mt-3">
                    <p className="uppercase">Location :</p>
                    <p>81th st, London</p>
                    </div>
            </div>
           
          </div>
        
        </div>
       <div className="flex items-center justify-center p-3">
      <button className="bg-primary p-3 text-white text-sm font-bold rounded-md">Load more</button>
      </div>
      </div>
    </div>
  );
};

export default Villa;
