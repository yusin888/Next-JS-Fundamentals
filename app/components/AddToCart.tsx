'use client';
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("Add to cart clicked");
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;
