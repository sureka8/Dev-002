import React from "react";
import image1 from "../image/blog_image/Image_6-300x197.jpg";
import image2 from "../image/blog_image/Image_2-250x165.jpg";
import image3 from "../image/blog_image/Image_3-300x197.jpg"
import { SlCalender } from "react-icons/sl";

const Blog = () => {
  return (
    <div className="bg-slate-50 h-auto py-10 md:px-0 px-10 ">
      <div className="container md:mx-auto  mx-0 font-display ">
        <h1 className="text-3xl text-center p-5 mb-3">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12  ">
          <div className="bg-white shadow-xl rounded-md flex flex-col justify-center items-center pb-10 space-x-3">
            <img src={image1} alt="Blog Image" className="w-full rounded-md" />
            <h3 className="mt-4 font-bold text-xl">10 Quick Tips About Business</h3>
            <div className="flex space-x-2 sp items-center mt-2">
                <SlCalender />
            <p>June 8. 2021</p>
            </div>
            

            <p className="text-center px-8 mt-5 text-lg">
              There are variations of passages of Lorems Ipsums available, but
              then. majority.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-md flex flex-col justify-center items-center pb-10 space-x-3">
            <img src={image2} alt="Blog Image" className="w-full rounded-md" />
            <h3 className="mt-4 font-bold text-xl">Learn The Truth Real Estate</h3>
            <div className="flex space-x-2 sp items-center mt-2">
                <SlCalender />
            <p>June 8, 2021</p>
            </div>
            

            <p className="text-center px-8 mt-5 text-lg">
            It is long established fact that a reader will distracted by the readable content.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-md flex flex-col justify-center items-center pb-10 space-x-3">
            <img src={image3} alt="Blog Image" className="w-full rounded-md" />
            <h3 className="mt-4 font-bold text-xl">Skills Learn In Real Estate</h3>
            <div className="flex space-x-2 sp items-center mt-2">
                <SlCalender />
            <p>June 8. 2021</p>
            </div>
            

            <p className="text-center px-8 mt-5 text-lg">
            There are many variations of passages ofen Ipsum available majority to suffered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
