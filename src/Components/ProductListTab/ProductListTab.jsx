import React, { useEffect, useState } from "react";
import './ProductListTab.css'
import ProductItem from "../ProductItem/ProductItem";

const ProductListTab = (props) => {

    const [productData, setProductData] = useState(props.data.productData);
    const [categoryArray, setCategoryArray] = useState([]);
    const [activeTab, setActiveTab] = useState();
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [activeProductTabData, setActiveProductTabData] = useState([]);


    const catArray = [];
    useEffect(() => {
      productData && 
      productData.map((item, index)=>{
        item.items && 
        item.items.map((subCatItem, index)=>{
            catArray.push(subCatItem.cat_name);
        })
      })
      const catArray2 = catArray.filter((item, index) => catArray.indexOf(item) === index);
            setCategoryArray(catArray2)
            // console.log(catArray2);
            setActiveTab(catArray2[0])
    }, []);


    
    // active tab data -----------------
    useEffect(() => {
        var arr = [];
        setActiveProductTabData(arr);
        productData && 
        productData.map((item, index)=>{
            item.items && 
            item.items.map((subCatItem, index)=>{
                // console.log(subCatItem.products);
              if (subCatItem.cat_name === activeTab) {
                setActiveProductTabData(subCatItem.products)
              }  
            })
        })
    }, [activeTab, activeProductTabData]);


    
  return (
    <>
        <div className="productList-tab">
            <div className="container-fluid">
                {/* -------------------  Product filtering tab  ------------------------------ */}
                <div className="head-content d-flex align-items-center justify-content-between ">
                    <h3>Latest Product</h3>
                    <div className="filter-tabs">
                        <ul className="list">
                            {
                                categoryArray.length !==0 &&
                                categoryArray.map((item, index)=>{
                                    return (
                                    <li onClick={()=> {
                                        setActiveProductTabData([]); setActiveTab(item); setActiveTabIndex(index)  }}
                                         className={`list-inline-item ${activeTabIndex === index ? 'active' : ''}`}>
                                         {item} </li>      
                                    )})    
                             }
                        </ul>
                    </div>
                </div>

                {/* --------------  Product Grid list  ----------------------------------------------- */}
                <div className="product-section">
                    <div className="product-grid ">
                        {
                            activeProductTabData.length !==0 && 
                            activeProductTabData.map((item, index)=>{
                                return(
                                    <div className="items" key={index}>
                                    <ProductItem item={item}/>
                                </div>
                                )})
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default ProductListTab;
