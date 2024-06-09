import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import './ProductSlider.css';
import Slider from "react-slick";
import ProductItem from "../../../Components/ProductItem/ProductItem";


const ProductSlider = (props) => {

  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    duration: 2,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: 2,
    // fade: true,
  };

  const [productData, setProductData] = useState(props.data.productData);
  // console.log(productData);



  const [bestSelling, setBestSelling] = useState();
  const bestSellArray = [];

  useEffect(() => {
          productData &&
          productData.map((cat, index)=>{
            if (cat.cat_name === 'Electronics') {
                cat.items &&
                cat.items.map((subCat, index)=>{
                subCat.products &&
                subCat.products.map((item, index)=>{
                bestSellArray.push(item);
                })
              })
             }
           })
          setBestSelling(bestSellArray)
  }, []);
  
  


  return (
    <>
        <div className="row productSlider">
            <div className="box-item col-md-3 ">
              <Box className="box" component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                      <div className="box-area">
                      <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-4.png" alt="" />
                      <div className="content-box">
                          <h3>Bring nature into your home</h3>
                          <Button className="bg-global text-white ">Learn More</Button>
                      </div>
                      </div>
              </Box>
            </div>

             <div className="productsSlide col-md-9">
              <Slider {...settings} className="sliders-product">

                {
                  bestSelling &&
                  bestSelling.map((item, index)=>{
                    return(
                      <div className="product-item" key={index}>
                       <ProductItem item={item}/>
                       </div>
                    )
                  })
                  
                }


              
                  
                  {/* <div className="product-item">
                    <ProductItem/>
                  </div>
                  <div className="product-item">
                    <ProductItem/>
                  </div>
                  <div className="product-item">
                    <ProductItem/>
                  </div>
                  <div className="product-item">
                    <ProductItem/>
                  </div>
                  <div className="product-item">
                    <ProductItem/>
                  </div> */}
              </Slider>
             </div>
        </div>
    </>
  );
};

export default ProductSlider;
