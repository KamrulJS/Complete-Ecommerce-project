import React, { useEffect, useState } from "react";
import "./ProductItem.css";
import { BsPlusLg } from "react-icons/bs";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import { IoIosGitCompare, IoMdEye } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";




const ProductItem = (props) => {

  const [productData, setProductData] = useState();
  //  console.log(productData);
  
  useEffect(() => {
    
    // window.scrollTo(0,0)
    setProductData(props.item);
  }, [props.item]);



  return (
      <div className="productCard d-flex">
        {
        productData && 
          <>
          <Link to={`/product/${productData.id}`}>
          <div className="card ">
            {/* <!-- Image --> */}
            
              <div className="product-image">
                <img
                  alt="..."
                  src={productData?.catImg}
                  className="card-img position-relative "
                />
                <div className="product-icons position-absolute  ">
                  <ul className="icon-list">
                    <li
                      className="list-inline-item cursor"
                      tooltip="Add To Wishlist"
                    >
                      <CiHeart />
                    </li>
                    <li className="list-inline-item cursor" tooltip="Compare">
                      <IoIosGitCompare />
                    </li>
                    <li
                      className="list-inline-item cursor"
                      tooltip="Quick View"
                    >
                      <IoMdEye />
                    </li>
                  </ul>
                </div>
              </div>
            {/* <!-- Card Body --> */}
            <div className="card-body">
              <p className="cat d-flex gap-2 text-sm mb-3">
                Category: <span className="ml-2">{productData.brand}</span>
              </p>
              <h3 title={productData.productName} className="product-tittle">{productData.productName.substr(0, 50)+ '...'}</h3>
              <span className="rating d-flex justify-content-start align-items-center">
                <Rating
                  name="half-rating-read"
                  defaultValue={parseFloat(productData.rating)}
                  precision={0.5}
                  readOnly
                />
                {productData.rating}
              </span>

              {/* <!-- Subtitle --> */}
              <div className="price-cart-content d-flex flex-column align-items-start mt-2">
                <div className="price d-flex align-items-center justify ">
                  <p className="regular-price">${productData.price}</p>
                  <span className="old-price">${productData.oldPrice}</span>
                </div>
                <div className="cart-btn ms-auto mt-3 ">
                  <Button className="">
                    <BsPlusLg /> <span>Add To Cart</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          </Link>
          </>
        }
      </div>
  );
};

export default ProductItem;
