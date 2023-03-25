import React, { useState } from "react";
import { PRODUCTS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { buyProduct, sellProduct } from "../store/ProductsSlice";

const ProductList = ({ id, title, price, image }) => {
  const receipt = useSelector((state) => state.products.receipt);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const productTotalPrice = value * price;
  return (
    <div className="col-span-1 py-6 px-2 w-full h-full flex flex-col items-center justify-start gap-8 bg-white">
      <div className="max-w-40 w-auto h-32 max-h-32 object-contain">
        <img src={image} alt="big-mac" className="w-full h-full" />
      </div>
      <div className="text-center">
        <h2 className="font-semibold text-3xl">{title}</h2>
        <p className="font-medium text-green-400 text-2xl">${price}</p>
      </div>

      <div className="w-full h-full flex flex-row justify-around items-center">
        <button
          type="button"
          className={`${
            value
              ? "bg-gradient-to-b from-pink-400 to-pink-600 text-white"
              : "bg-gray-300"
          } px-8 py-2 font-medium text-xl rounded-md`}
          onClick={() => dispatch(sellProduct(id, +value, productTotalPrice))}
          disabled={value ? false : true}
        >
          Sell
        </button>
        <input
          type="number"
          placeholder={value}
          value={value}
          className="w-24 text-center px-8 py-2 placeholder-current border border-gray-400 rounded-md"
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button
          type="button"
          className="px-8 py-2 font-medium text-xl bg-gradient-to-b from-green-400 to-green-600 text-white rounded-md"
          onClick={() =>
            dispatch(buyProduct(id, title, +value, productTotalPrice))
          }
          disabled={value ? false : true}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  const totalAmount = useSelector((state) => state.products.totalAmount);
  return (
    <div className="col-span-3">
      <p className="sticky top-0 text-center text-white text-4xl font-semibold py-4 bg-gradient-to-b from-green-400 to-green-600 mb-5">
        ${totalAmount}
      </p>
      <div className="grid grid-cols-3 gap-5">
        {/* single product */}
        {PRODUCTS.map((item, i) => (
          <ProductList key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
