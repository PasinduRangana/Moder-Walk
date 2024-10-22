"use client";

import { useDispatch } from "react-redux";
import HomePage from "./pages/home/page";
import { fetchProducts } from "./store/productSlice";
import React, { useEffect } from "react";
import HeaderComp from "./components/Header/Page";
export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <React.Fragment>
      <HeaderComp />
      <HomePage />
    </React.Fragment>
  );
}
