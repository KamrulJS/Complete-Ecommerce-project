import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './CategorySlider.css'
import { Link } from "react-router-dom";


const CategorySlider = (props) => {

  const [productData, setProductData] = useState(props.data.productData);
  const [totalLength, setTotalLength] = useState([]);

  // const [itemBG, setItemBG] = useState([
  //   '#f2fce4',
  //   'rgb(239, 255, 247)',
  //   '#f2fce4',
  //   'rgb(239, 255, 247)',
  //   'rgb(239, 255, 247)',
  //   'rgb(239, 255, 247)',
  // ])

    var settings = {
        dots: false,
        arrow: true,
        infinite: false,
        speed: 500,
        duration: 2,
        slidesToShow:6,
        slidesToScroll: 1,
        autoplay: 2,
        // centerMode: true,
        // fade: true,
      };
      
    var categoryLength = 0;
    var LengthArray = [];

    useEffect(() => {
      productData &&
      productData.map((item)=>{
        item.items &&
        item.items.map((subItem)=>{
          categoryLength += subItem.products.length
        })
        LengthArray.push(categoryLength);
        categoryLength = 0;
      })
      const afterRemoveDuplicate = LengthArray.filter((item, index)=> LengthArray.indexOf(item) === index);
      setTotalLength(afterRemoveDuplicate)
    }, []);
    

  return (
    <>
       <div className="categoryList container-fluid">
        <div className="heading-content">
          <h1>Category List</h1>
        </div>
        <div className="slider">
          
        <Slider {...settings} className="category-sliders-main">

                    {
                      productData &&
                      productData.map((item, index)=>{
                        return(
                              
                              <div className="info" key={index}>
                                <Link to={`/category/${item.cat_name}`}>
                                  <div className="item">
                                   <img src={item.image} alt="" />
                                   <h4>{item.cat_name}</h4>
                                   <p >{totalLength[index]} items</p>
                                  </div>
                                </Link>
                              </div>
                        )
                      })
                    }
           </Slider>
        </div>
            </div>
    </>
  );
};

export default CategorySlider;
