"use client";

import { fetchProductBySpecificCategories } from "@/app/store/productSlice";
import { useDispatch } from "react-redux";

const CategoryCard = () => {
  return (
    <div className="flex flex-row">
      <a
        href="/mens-clothing"
        className="bg-men mr-5 font-title text-white font-main-header-weight text-main-header-size rounded-lg items-center justify-center text-center h-72 flex basis-1/2 shadow-md"
      >
        Men's Clothing
      </a>
      <a
        href="/womens-clothing"
        className="bg-woman ml-5 font-title text-white font-main-header-weight rounded-lg text-main-header-size items-center justify-center text-center h-72 flex basis-1/2 shadow-md"
      >
        Women's Clothing
      </a>
    </div>
  );
};

export default CategoryCard;
