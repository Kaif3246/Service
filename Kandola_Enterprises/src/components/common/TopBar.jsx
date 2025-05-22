import React from "react";

const TopBar = () => {
  return (
    <div className="hidden md:flex bg-[#A9ABAA] text-white  tracking-wider font-normal text-lg py-2 px-4 justify-center items-center"  style={{ fontFamily: '"Cabin", sans-serif' }}>
      <div>
        Kandola Enterprises, LLC | info@kandolaenterprises.com

      </div>
      <div className="flex gap-6 tracking-wider text-lg font-normal ">
      
        <span>  </span>
      </div>
    </div>
  );
};

export default TopBar;
