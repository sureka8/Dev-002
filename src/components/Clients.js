import React from "react";
import bg from "../image/Image_9-300x197.jpg";
import client1 from "../image/client-image/Avatar.jpg";
import client2 from "../image/client-image/Avatar-1.jpg";

const Clients = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat md:h-[80vh]  relative overflow-hidden "
        style={{ backgroundImage: `url(${bg})`, filter: "grayscale(80%)" }}
      >
        <div className="container mx-auto mt-5 font-display md:px-0 px-10 md:pb-1 pb-10 ">
          <div className="flex flex-col items-center justify-center  py-20">
            <p className="pt-10 text-2xl text-black font-semibold">
              Client's Testimonial
            </p>
            <p className="text-gray-800 ">
              Lorem ipsum dolor sit amet, conectur adipscing elitsed do eiusmod
            </p>
         
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <div className="bg-white  rounded-md flex space-x-4 px-5 py-5 justify-center items-center">
                <img src={client1} alt="client  image" />
                <p className="text-start">
                  This is by far the best theme on Themeforest. It adapts to a
                  lot of the plugins, and their customer support is great. I
                  really love this theme!
                </p>
              </div>
              <div className="bg-white  rounded-md flex space-x-4 px-5 py-5 justify-center items-center">
                <img src={client2} alt="client  image" />
                <p className="text-start">
                  This is by far the best theme on Themeforest. It adapts to a
                  lot of the plugins, and their customer support is great. I
                  really love this theme!
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
