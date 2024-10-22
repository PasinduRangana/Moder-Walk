"use client"
import React, { useEffect } from "react";
import HeaderComp from "../components/Header/Page";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductBySpecificCategories } from "../store/productSlice";
import IteamCard from "../components/ItemCard/page";

const MensCloathing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductBySpecificCategories("men's clothing"));
  }, [dispatch]);


  const mensData = useSelector((state)=>state.products.categoriesProducts)
  return (
    <React.Fragment>
      <HeaderComp />
     
      <section className="mt-6 ml-12 mr-12">
        <h2 className="font-title text-black font-main-header-weight text-sub-header-size">
          Men's Clothing
        </h2>
    


      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 mt-6 auto-rows-auto">
          {mensData.map((data) => (
            <IteamCard data={data} key={data.id} />
          ))}
        </section>

        </section>
    </React.Fragment>
  );
};

export default MensCloathing;
