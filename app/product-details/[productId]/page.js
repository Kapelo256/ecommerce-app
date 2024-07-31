"use client";
import BreadCrumb from "./_components/BreadCrumb";
import ProductApis from "../../_utils/ProductApis";
import React, { useEffect, useState } from "react";
import ProductBanner from "./_components/ProductBanner";
import ProductInfo from "./_components/ProductInfo";

function ProductDetails({ params }) {
  //   const path = usePathname();
  const [productDetails, setProductDetails] = useState({});
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProductById_();
  }, [params?.productId]);

  const getProductById_ = () => {
    ProductApis.getProductById(params?.productId).then((res) => {
      console.log("product item :", res.data.data);
      setProductDetails(res.data.data);
    });
  };
  return (
    <div className="px-10 py-8 md:px-28">
      <BreadCrumb />
      <div className="grid justify-around grid-cols-1 gap-5 mt-10 sm:gap-0 sm:grid-cols-2">
        <ProductBanner product={productDetails} />
        <ProductInfo product={productDetails} />
      </div>
    </div>
  );
}

export default ProductDetails;
