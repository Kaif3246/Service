import React from "react";

const TopBar = () => {
  return (
    <div className="hidden md:flex bg-[#E10600] text-white text-sm py-2 px-4 justify-between items-center">
      <div>
        Trusted partner in business excellence
        <a href="#" className="ml-2 underline hover:text-white font-semibold">Join us now</a>
      </div>
      <div className="flex gap-6">
        <span>📅 Mon - Friday from 9:00 - 18:00</span>
        <span>📧 support@solvior.com</span>
      </div>
    </div>
  );
};

export default TopBar;
