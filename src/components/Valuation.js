import React, { useState } from "react";
import bg from "../image/Image_9-300x197.jpg";

const Valuation = () => {
  const [data, setData] = useState({
    select: "",
    name: "",
    email: "",
    slecteType: "",
    city: "",
    badget: "",
    Nbed: "",
    size: "",
  });
  const [errors, setErrors] = useState({});

  const handeChange = (e) =>{
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!data.slecteType) {
      errors.slecteType = "Select Type is required";
      isValid = false;
    }
    if(!data.name){
      errors.name="Name is Required";
      isValid=false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email ) {
      errors.email = "Email is required";
      isValid = false;
    }
    else if(!emailPattern.test(data.email)){
      errors.email = "Invalid email format";
      isValid = false;
    }

    if(data.badget){
      errors.badget="Budget is required";
      isValid= false
    }

    if(data.Nbed){
      errors.Nbed="Number of bed required";
      isValid= false
    }

    if(data.city){
      errors.city="City is required";
      isValid=false
    }

    if(data.select){
      errors.select="select is required"
      isValid=false
    }
    if(data.size){
      errors.size="Minimum size is required"
      isValid=false
    }

    setErrors(errors);
    return isValid;
  }

  const handleSubmit =(e) =>{
    e.preventDefault();
    const isValid = validateForm();
    if(isValid){
      alert('sent sucuess')
    }
  }

  return (
    <div>
      {/* <div
        className="bg-cover bg-no-repeat h-[80vh]  relative overflow-hidden "
        style={{ backgroundImage: `url(${bg})`, }}
      > */}
      <div className="bg-primary text-white pb-5">
        <div className="container mx-auto  font-display   ">
          <div className="flex flex-col text-sm md:text-xl capitalize  ">
            <form>
              <div className="flex flex-col px-10  md:px-24 p-5  w-full space-y-5 ">
                <h1 className="mt-10 capitalize md:text-3xl text-lg text-center ">
                  requests your property valuation
                </h1>
                <p>Personal Information :</p>
                <input
                  type="text"
                  placeholder="Select"
                  className={`bg-primary border-[1px] border-white p-2 rounded-md  px-3 ${errors.select ? "border-red-500" : ""}`}
                  name="select"
                  value={data.select}
                  onChange={handeChange}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-5 md:gap-y-0">
                  <input
                    type="text"
                    placeholder="Yuor name"
                    name="name"
                    className={`bg-primary border-[1px] border-white p-2 rounded-md  px-3 ${errors.name? "border-red-500" : ""}`}
                    value={data.name}
                    onChange={handeChange}
                  />
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className={`bg-primary border-[1px] border-white p-2 rounded-md  px-3 ${errors.email ? "border-red-500" : ""}`}
                    value={data.email}
                    onChange={handeChange}
                  />
                </div>
              </div>

              <div className="flex flex-col px-10  md:px-24 p-5  w-full space-y-5 ">
                <p>Property Information :</p>
                <select
                  className={`bg-primary border-[1px] border-white p-2 rounded-md  px-3 ${errors.slecteType ? "border-red-500" : ""}`}
                  name="selectType"
                  value={data.slecteType}
                  onChange={handeChange}
                >
                  <option>Select Type</option>
                </select>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-5 md:gap-y-0">
                  <select
                     className={`bg-primary border-[1px] border-white p-2 rounded-md  px-3 ${errors.city ? "border-red-500" : ""}`}
                    name="city"
                    value={data.city}
                    onChange={handeChange}
                  >
                    <option>Select City</option>
                  </select>
                  <select
                     className={`bg-primary border-[1px] border-white p-2 rounded-md  px-3 ${errors.badget ? "border-red-500" : ""}`}
                    name="badget"
                    value={data.badget}
                    onChange={handeChange}
                  >
                    <option>Your Budget</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-5 md:gap-y-0">
                  <select
                   className={`bg-primary border-[1px] border-white p-2 rounded-md  px-3 ${errors.Nbed ? "border-red-500" : ""}`}
                    name="Nbed"
                    value={data.Nbed}
                    onChange={handeChange}
                  >
                    <option>Number of Beds</option>
                  </select>
                  <select
                    className={`bg-primary border-[1px] border-white p-2 rounded-md  px-3 ${errors.size ? "border-red-500" : ""}`}
                    name="size"
                    value={data.size}
                    onChange={handeChange}
                  >
                    <option>Minimum Size</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col px-10  md:px-24 py-3  w-full space-y-5">
                <button className="bg-white text-black py-2 rounded-md " onClick={handleSubmit}>
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Valuation;
