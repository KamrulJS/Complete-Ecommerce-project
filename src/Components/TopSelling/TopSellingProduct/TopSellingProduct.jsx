import React from "react";
import './TopSellingProduct.css';
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";

const TopSellingProduct = (props) => {
  return (
    <>
        <div className="topSellingProducts">
            <h1>{props.title}</h1>
            {/* -------------------  product items  ----------------------------- */}
            <Link> <div className="productsList">
              <div className="listBox ">
                <div className="image-product">
                  <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-1.jpg" alt="" />
                </div>
                <div className="content-box">
                  <h5>Lorem ipsum dolor sit amet.</h5>
                  <span className="rating d-flex justify-content-start align-items-center"><Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /> (4.5)</span>
                  <div className="pricing">
                    <p className="regular-price">28.50</p>
                    <p className="old-price">30.50</p>
                  </div>
                </div>
              </div>
            </div> </Link>
            {/* -------------------  product items  ----------------------------- */}
            <Link> <div className="productsList">
              <div className="listBox ">
                <div className="image-product">
                  <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-1.jpg" alt="" />
                </div>
                <div className="content-box">
                  <h5>Lorem ipsum dolor sit amet.</h5>
                  <span className="rating d-flex justify-content-start align-items-center"><Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /> (4.5)</span>
                  <div className="pricing">
                    <p className="regular-price">28.50</p>
                    <p className="old-price">30.50</p>
                  </div>
                </div>
              </div>
            </div> </Link>
            {/* -------------------  product items  ----------------------------- */}
            <Link> <div className="productsList">
              <div className="listBox ">
                <div className="image-product">
                  <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-1.jpg" alt="" />
                </div>
                <div className="content-box">
                  <h5>Lorem ipsum dolor sit amet.</h5>
                  <span className="rating d-flex justify-content-start align-items-center"><Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /> (4.5)</span>
                  <div className="pricing">
                    <p className="regular-price">28.50</p>
                    <p className="old-price">30.50</p>
                  </div>
                </div>
              </div>
            </div> </Link>
        </div>
    </>
  );
};

export default TopSellingProduct;
