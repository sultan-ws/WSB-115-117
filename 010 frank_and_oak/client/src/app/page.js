"use client"
import React, { useEffect } from "react";
import Banner from "./HomeComponents/Banner";
import FeaturedCategories from "./HomeComponents/FeaturedCategories";
import ThisJustIn from "./HomeComponents/ThisJustIn";
import ProductReview from "./HomeComponents/ProductReview";
import BetterLiving from "./HomeComponents/BetterLiving";
import TextSlider from "./common/TextSlider";
import { useDispatch, useSelector } from "react-redux";


export default function Home() {
  return (
    <>
    {/* <TextSlider/> */}
    <Banner/>
    <FeaturedCategories/>
    {/* <ThisJustIn/> */}
    <ProductReview/>
    <BetterLiving/>
    </>
  );
}
