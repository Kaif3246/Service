import React from "react";

const TopBar = () => {
  return (
    <div className="hidden md:flex bg-[#A9ABAA] text-white font-normal text-lg py-2 px-4 justify-center items-center"  >
      <div>
        <span className=""style={{ fontFamily: '"Cabin", sans-serif' }}>Kandola Enterprises, LLC | info</span><span className="leading-tight text-sm">@</span><span className=""style={{ fontFamily: '"Cabin", sans-serif' }}>kandolaenterprises.com</span>

      </div>
      <div className="flex gap-6 tracking-wider text-lg font-normal ">
      
        <span>  </span>
      </div>
    </div>
  );
};

export default TopBar;
