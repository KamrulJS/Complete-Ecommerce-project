import React, { useEffect, useRef, useState } from "react";
import './ProductDetails.css';
import Rating from '@mui/material/Rating';
import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { IoIosGitCompare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Slider from "react-slick";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMinus } from "react-icons/hi";




const ProductDetails = (props) => {
    // ---------   slider sittings
    var settings = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        duration: 2,
        slidesToShow:4,
        slidesToScroll: 1,
      };
    var settings2 = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        duration: 2,
        slidesToShow:4,
        slidesToScroll: 1,
      };

    //   current product
    let {id} = useParams();
    const [currentProduct, setCurrentProduct] = useState({});
    console.log(currentProduct);
    useEffect(() => {
      window.scrollTo(0,0)
      props.data.productData &&
      props.data.productData.map((item)=>{
        item.items &&
        item.items.map((subItems)=>{
            subItems.products &&
            subItems.products.map((product)=>{
                if (parseInt(product.id) === parseInt(id)) {
                    // console.log(product);
                    setCurrentProduct(product);
                }
            })
        })
      })
    }, [id]); 
    

    const [zoomImage, setZoomImage] = useState('');
    const zoomSlider = useRef();
      const setMainImg = (url) => {
        setZoomImage(url);
      }

    //   variation
    const [activeSize, setActiveSize] = useState(0);
      const isActive = (index) =>{
        setActiveSize(index)
      }

    //   productQuantity
    const [productQuantity, setProductQuantity] = useState(0);
    const increment = () =>{
        setProductQuantity(productQuantity + 1)
    }
    const dicrement = () =>{
        if (productQuantity!==0) {
            setProductQuantity(productQuantity - 1)
        }
    }

    // ------- tab content active
    const [isActivetab, setIsActivetab] = useState(0);



  return (
    <>
       <section className="productDetailsPage">
        <div className="container-fluid">
        {/* ---------------- breadcrumb  ------------------ */}
            <div className="breadcrumb-nav ">
                <ul className="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Pictures</a></li>
                    <li><a href="#">Summer 15</a></li>
                    <li>Italy</li>
                </ul>
            </div>

            
            {/* ------------------------------   main product details   ------------------------------ */}
            <div className="product-details">
                            <div className="product-top-section">
                                {/* ----- leftSide -------- */}
                                <div className=" product-image">
                                    <div className="product-zoom-image">
                                    <InnerImageZoom className="image" zoomType="hover" zoomScale={1.2} src={zoomImage}  />
                                    {/* <Slider {...settings2} className="detail-product-image-slider" ref={zoomSlider}>
                                            {
                                                currentProduct.productImages &&
                                                currentProduct.productImages.map((itemImg, index)=>{
                                                    return(
                                                        <InnerImageZoom className="image" zoomType="hover" zoomScale={1.4} src={itemImg}  />
                                                    )
                                                })
                                            }
                                    </Slider> */}
                                    </div>
                                    <div className="zoom-image">
                                        <Slider {...settings} className="detail-product-image-slider" ref={zoomSlider}>
                                            {
                                                currentProduct.productImages &&
                                                currentProduct.productImages.map((itemImg, index)=>{
                                                    return(
                                                        <div className="item">
                                                          <img onClick={()=> setMainImg(itemImg)} src={itemImg} className="w-100" alt="" />
                                                        </div>
                                                    )
                                                })
                                            }

                                        </Slider>
                                        
                                     </div>
                                </div>

                                {/* ----------  rightSide   ------------ */}
                                <div className="product-info">
                                        <span className="sale-discount">{currentProduct.discount}% OFF</span>
                                        <h2>{currentProduct.productName}</h2>
                                        <span className="rating d-flex justify-content-start align-items-center"><Rating name="half-rating-read" value={parseFloat(currentProduct.rating)} precision={0.5} readOnly /> {currentProduct.rating}</span>
                                        <div className="price ">
                                            <p className="regular-price">${currentProduct.price}</p>
                                            <span className="old-price">${currentProduct.oldPrice}</span>
                                        </div>
                                        <p className="short-description">{currentProduct.description}</p>
                                        {/* for weight */}
                                        {
                                            currentProduct.weight !== undefined && currentProduct.weight.length !== 0 &&
                                            <div className="variations display-flex-row justify-content-center ">
                                            <h6>Size / Weight:</h6>
                                            <ul className="list inline mb-0">
                                                {
                                                    currentProduct.weight.map((item, index)=>{
                                                        return (
                                                            <li onClick={()=> isActive(index)} className={`list-inline-item ${activeSize === index ? 'active' : ''}`}>{item}g</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        }
                                        {/* for RAM  */}
                                        {
                                            currentProduct.RAM !== undefined && currentProduct.RAM.length !== 0 &&
                                            <div className="variations display-flex-row justify-content-center ">
                                            <h6>RAM:</h6>
                                            <ul className="list inline mb-0">
                                                {
                                                    currentProduct.RAM.map((RAM, index)=>{
                                                        return (
                                                            <li onClick={()=> isActive(index)} className={`list-inline-item ${activeSize === index ? 'active' : ''}`}>{RAM} GB</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        }
                                        {/* for TV size  */}
                                        {
                                            currentProduct.SIZE !== undefined && currentProduct.SIZE.length !== 0 &&
                                            <div className="variations display-flex-row justify-content-center ">
                                            <h6>SIZE:</h6>
                                            <ul className="list inline mb-0">
                                                {
                                                    currentProduct.SIZE.map((SIZE, index)=>{
                                                        return (
                                                            <li onClick={()=> isActive(index)} className={`list-inline-item ${activeSize === index ? 'active' : ''}`}>{SIZE}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        }

                                    {/* --------   quantity , cart button, wish icons */}
                                    <div className="quantity-cart display-flex-row align-items-sm-stretch  justify-content-between ">
                                        <div className="quantity display-flex-row">
                                            <span onClick={dicrement} className="inc-dic-btn dicrement" ><HiMinus/></span>
                                            <input type="text" value={productQuantity} />
                                            <span onClick={increment} className="inc-dic-btn increment"><AiOutlinePlus/></span>
                                        </div>
                                        <div className="cart-btn">
                                            <Link ><Button>Add To Cart <BsCart2/></Button></Link>
                                        </div>
                                        <div className="cart-icons display-flex-row">
                                            <span className="wishlist same-style"><CiHeart/></span>
                                            <span className="compare same-style"><IoIosGitCompare/></span>
                                        </div>
                                    </div>
                                    {/* ----- meta tag  -------------- */}
                                    <div className="meta-tags">
                                        <div className="left-meta meta-same">
                                            <ul className="list list-inline ">
                                                <li ><strong>Type:</strong> Organic</li>
                                                <li ><strong>MFG:</strong> Jun 4.2022</li>
                                                <li ><strong>LIFE:</strong> 70 days</li>
                                            </ul>
                                        </div>
                                        <div className="right-meta meta-same">
                                        <ul className="list list-inline ">
                                                <li ><strong>Type:</strong> Organic</li>
                                                <li ><strong>MFG:</strong> Jun 4.2022</li>
                                                <li ><strong>LIFE:</strong> 70 days</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                  </div>


                    {/* -----------------------  Product description Tabs  -------------------------- */}

                    <div className="tab-product-details card ">
                        <div className="container-fluid">
                            {/* - tab items */}
                            <div className="tab-items">
                                <ul className="mb-0 pb-0" >
                                 <li onClick={()=>setIsActivetab(0)} className={`list-inline-item ${isActivetab=== 0 ? 'active' : ''}`}><Button>Description</Button></li>
                                 <li onClick={()=>setIsActivetab(1)} className={`list-inline-item ${isActivetab=== 1 ? 'active' : ''}`}><Button>Additional info</Button></li>
                                 <li onClick={()=>setIsActivetab(2)} className={`list-inline-item ${isActivetab=== 2 ? 'active' : ''}`}><Button>Reviews</Button></li>
                                </ul>
                            </div>
                            {/* tab content */}
                            {
                                isActivetab ==0 &&
                           
                                <div className="tab-content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iure nihil, reprehenderit quisquam minima numquam nisi atque corporis expedita et.</p>
                                    <h3>Lorem ipsum dolor sit amet.</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, quisquam!</p>
                                    <h3>Lorem ipsum dolor sit amet.</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem laudantium, voluptatum debitis cumque minus voluptate saepe odit officiis animi aspernatur.</p>
                                </div>
                             }

                             {
                                isActivetab === 1 &&
                                 <div className="tab-content">
                                      <tbody>
                                                <tr class="stand-up">
                                                    <th>Stand Up</th>
                                                    <td>
                                                        <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                                    </td>
                                                </tr>
                                                <tr class="folded-wo-wheels">
                                                    <th>Folded (w/o wheels)</th>
                                                    <td>
                                                        <p>32.5″L x 18.5″W x 16.5″H</p>
                                                    </td>
                                                </tr>
                                                <tr class="folded-w-wheels">
                                                    <th>Folded (w/ wheels)</th>
                                                    <td>
                                                        <p>32.5″L x 24″W x 18.5″H</p>
                                                    </td>
                                                </tr>
                                                <tr class="door-pass-through">
                                                    <th>Door Pass Through</th>
                                                    <td>
                                                        <p>24</p>
                                                    </td>
                                                </tr>
                                                <tr class="frame">
                                                    <th>Frame</th>
                                                    <td>
                                                        <p>Aluminum</p>
                                                    </td>
                                                </tr>
                                                <tr class="weight-wo-wheels">
                                                    <th>Weight (w/o wheels)</th>
                                                    <td>
                                                        <p>20 LBS</p>
                                                    </td>
                                                </tr>
                                                <tr class="weight-capacity">
                                                    <th>Weight Capacity</th>
                                                    <td>
                                                        <p>60 LBS</p>
                                                    </td>
                                                </tr>
                                                <tr class="width">
                                                    <th>Width</th>
                                                    <td>
                                                        <p>24″</p>
                                                    </td>
                                                </tr>
                                                <tr class="handle-height-ground-to-handle">
                                                    <th>Handle height (ground to handle)</th>
                                                    <td>
                                                        <p>37-45″</p>
                                                    </td>
                                                </tr>
                                      </tbody>
                                 </div>
                              }
                             {
                                isActivetab === 2 &&
                                 <div className="tab-content">
                                     <h2>Review</h2>
                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, esse.</p>
                                 </div>
                              }
                        </div>
                    </div>
         </div>
       </section>
    </>
  );
};

export default ProductDetails;


