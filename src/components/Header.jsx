import React from "react";
import billGates from "../assets/billgates.jpg";

const Header = () => {
  return (
    <div className="col-span-3 flex flex-col justify-center items-center gap-4 bg-white py-5">
      <img src={billGates} alt="billgates" className="w-32 h-32 rounded-full" />
      <h1 className="text-3xl font-bold text-theme-light-black">
        spend bill gates' money
      </h1>
    </div>
  );
};

export default Header;
