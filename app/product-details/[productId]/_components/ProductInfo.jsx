'use client'

import React from "react";
import { ShoppingCart, BadgeCheck, AlertOctagon } from "lucide-react";
import SkeletonProductInfo from "./SkeletonProductInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function ProductInfo({ product }) {
  const {user} = useUser();
  const router = useRouter();

  const handleAddToCart = () => {
    if(!user) {
      router.push('/sign-in')
    } else {
      /*logic to add to Cart*/
    }
  }
  return (
    <div>
      {product?.id ? (
        <div>
          <h2 className="text-[20px]">{product?.attributes?.title}</h2>
          <h2 className="text-[15px] text-gray-400">
            {product?.attributes?.category}
          </h2>
          <h2 className="text-[15px] mt-5">
            {product?.attributes?.description[0]?.children[0].text}
          </h2>
          <h2 className="text-[11px] text-gray-500 flex gap-2 mt-2 items-center">
            {product?.attributes?.instantDelivery ? (
              <BadgeCheck className="w-5 h-5 text-green-500" />
            ) : (
              <AlertOctagon />
            )}{" "}
            Eligible For Instant Delivery
          </h2>
          <h2 className="text-[24px] text-primary mt-2">
            $ {product?.attributes?.price}
          </h2>
          <button onClick={() => handleAddToCart()}
            className="flex gap-2 p-2 text-white rounded-lg bg-primary hover:bg-teal-600">
            <ShoppingCart /> Add To Cart</button>
        </div>
      ) : (
        <SkeletonProductInfo />
      )}
    </div>
  );
}

export default ProductInfo;
