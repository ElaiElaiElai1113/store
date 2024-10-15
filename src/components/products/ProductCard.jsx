import React from "react";
import Button from "../Button";

const ProductCard = ({ imageSrc, name }) => {
  return (
    <div className="border shadow-md flex flex-col items-center pt-2 gap-2 w-40 px-4 py-2">
      <img src={imageSrc} className="w24 h-[124px]" />
      <span className="font-bold text-sm">{name}</span>

      <Button
        name="View"
        onClick={() => {
          console.log(name);
        }}
        className="bg-green-500 hover:bg-green-500/70"
      ></Button>
    </div>
  );
};

export default ProductCard;
