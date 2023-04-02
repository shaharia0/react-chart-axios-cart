import React from "react";
import Features from "../Features/Features";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-cyan-300 p-5 rounded flex flex-col">
      <h4 className="text-center">
        <span className="text-purple-500 text-3xl font-extrabold">
          {price.price}
        </span>
        <span className="text-2xl">/mon</span>
      </h4>
      <h5 className="text-4xl font-bold text-center"> {price.name}</h5>
      <p className="mt-2 font-bold text-xl">Features: </p>
      {price.features.map((feature, index) => (
        <Features feature={feature} key={index}></Features>
      ))}
      <div className=" text-center mt-auto">
        {" "}
        <button className=" w-full text-xl bg-rose-400 hover:bg-red-500 p-1 rounded text-white font-bold">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
