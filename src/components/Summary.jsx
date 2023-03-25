import React from "react";
import { useSelector } from "react-redux";

const Summary = () => {
  const totalReceipt = useSelector((state) => state.products.totalReceipt);
  const receipt = useSelector((state) => state.products.receipt);
  return (
    <div className="col-span-3">
      <p className="text-3xl font-semibold text-center mb-5">your receipt</p>
      <div className="w-1/2 mx-auto">
        <div className="flex flex-col items-center gap-2">
          {/* summary list */}
          {receipt.map((item, i) => (
            <div
              key={item.id}
              className="w-full flex flex-row justify-between items-center text-xl"
            >
              <p className="flex-1 text-start">{item.title}</p>
              <p className="flex-1 text-end lowercase">x{item.amount}</p>
              <p className="flex-1 text-end text-green-400 font-medium">
                ${item.totalProductPrice}
              </p>
            </div>
          ))}
        </div>
        {/* seperator */}
        <span className="block border-t border-theme-light-black my-2" />
        {/* total */}
        <div className="flex justify-between items-center">
          <p className="text-2xl font-medium uppercase">total</p>
          <p className="text-green-400 text-lg font-medium">${totalReceipt}</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
