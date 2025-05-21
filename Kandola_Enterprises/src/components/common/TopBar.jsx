import React from "react";

const TopBar = () => {
  return (
    <div className="hidden md:flex bg-[#FF0000] text-white  tracking-wider font-semibold text-sm py-2 px-4 justify-between items-center"  style={{ fontFamily: '"Cabin", sans-serif' }}>
      <div>
        Gain expert buisness insights -
        <a href="#" className="ml-2 underline hover:text-white tracking-wider font-semibold">Subscribe to our newsletter today!</a>
      </div>
      <div className="flex gap-6 tracking-wider font-semibold ">
      
        <span>📧 info@kandolaenterprises.com</span>
      </div>
    </div>
  );
};

export default TopBar;
