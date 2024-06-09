import React from "react";
import Sliders from "./Slider/Slider";
import CategorySlider from "./CategorySlider/CategorySlider";
import ProductListTab from "../../Components/ProductListTab/ProductListTab";
import ProductSlider from "./ProductSlider/ProductSlider";
import BannerShow from "./BannerShow/BannerShow";
import TopSelling from "../../Components/TopSelling/TopSelling";

const Home = (props) => {
  return (
    <>
      <Sliders/>
      <CategorySlider data={props.data}/>
      <BannerShow/>
      <ProductListTab data={props.data}/>
      <ProductSlider data={props.data}/>
      <TopSelling/>
    </>
  );
};

export default Home;
