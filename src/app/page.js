"use client";

import { useDispatch, useSelector } from "react-redux";
import HomePage from "./pages/home/page";
import { fetchProducts } from "./store/productSlice";
import React, { useEffect } from "react";
import HeaderComp from "./components/Header/Page";
import Loader from "./components/Loader/page";
export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const allDataloadindStatus = useSelector(
    (state) => state.products.allProductsStatus
  );

  if (allDataloadindStatus === "loading") {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <HeaderComp />
      <HomePage />
    </React.Fragment>
  );
}
