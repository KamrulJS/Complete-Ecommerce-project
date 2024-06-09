import React, { useEffect, useState } from "react";
import './ListingProduct.css'
import SidebarListing from "../../Components/SidebarListing/SidebarListing";
import ProductItem from "../../Components/ProductItem/ProductItem";
import { Button } from "@mui/material";
import { IoGridOutline } from "react-icons/io5";
import { PiSortAscending } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link, useParams } from "react-router-dom";




const ListingProduct = (props) => {
    const [allProductData, setAllProductData] = useState(props.data.productData);
    // console.log(allProductData);
    const [isOpenAccountDrop, setIsOpenAccountDrop] = useState(false);
    const [isOpenAccountDrop2, setIsOpenAccountDrop2] = useState(false);


    // after category and filter products
    const [newData, setNewData] = useState([]); 
    const {id} = useParams();
    var itemData = [];
    useEffect(() => {
    //   alert(props.single) 
    allProductData &&
    allProductData.map((item)=>{
        if (props.single === true) {
            if (item.cat_name === id) {
                item.items &&
                item.items.map((item)=>{
                    item.products &&
                    item.products.map((subCatProduct)=>{
                    // console.log(subCatPro);
                    itemData.push(subCatProduct);
                })})
                
            }
        }

        else {
                item.items &&
                item.items.map((subItem)=>{
                   if (subItem.cat_name.split(' ').join('-').toLowerCase() === id.toLowerCase()) {
                    subItem.products &&
                    subItem.products.map((subCatProduct)=>{
                    // console.log(subCatProduct);
                    itemData.push(subCatProduct);
                    })
                   }
             })
        }
    });
    // remove duplicates
    const afterRemoveDuplicate= itemData.filter((item, index) => itemData.indexOf(item) === index);
    setNewData(afterRemoveDuplicate);
    }, [id]);


    // -------  product rang filter ----------------------
    const filterByPrice = (minValue, maxValue) => {
        // console.log(minValue, maxValue);
        allProductData &&
        allProductData.map((item)=>{
            if (props.single === true) {
                if (item.cat_name === id) {
                    item.items &&
                    item.items.map((subItem)=>{
                        subItem.products &&
                        subItem.products.map((subCatProduct)=>{
                        let price = parseInt(subCatProduct.price.toString().split(',').join(''))
                        if (minValue <= price && maxValue >= price) {
                            // console.log(subCatProduct);
                            itemData.push({...subCatProduct, parentCatName: item.cat_name, subCatName: subItem.cat_name})
                        }
                    })})
                   }
                }

                else {
                    item.items &&
                    item.items.map((subItem)=>{
                        if (subItem.cat_name.split(' ').join('-').toLowerCase() == id.split(' ').join('-').toLowerCase()) {
                        subItem.products &&
                        subItem.products.map((subCatProduct)=>{
                        let price = parseInt(subCatProduct.price.toString().split(',').join(''))
                        if (minValue <= price && maxValue >= price) {
                            // console.log(subCatProduct);
                            itemData.push({...subCatProduct, parentCatName: item.cat_name, subCatName: subItem.cat_name})
                             }
                          }) 
                        }
                    })

                }
            })
            // remove duplicates
            const afterRemoveDuplicate= itemData.filter((item, index) => itemData.indexOf(item) === index);
            setNewData(afterRemoveDuplicate);
        }

    //  product filter by brand
    const filterByBrand = (keyword) => {
        allProductData &&
        allProductData.map((item)=>{
            if (props.single === true) {
                    item.items &&
                    item.items.map((subItem)=>{
                        subItem.products &&
                        subItem.products.map((subCatProduct)=>{
                        if (subCatProduct.brand == keyword) {
                            // console.log(subCatProduct);
                            itemData.push(subCatProduct)
                        }
                    })})
                }
                // for double category 
                else {
                    item.items &&
                    item.items.map((subItem)=>{
                        if (subItem.cat_name.split(' ').join('-') == id.split(' ').join('-')) {
                        subItem.products &&
                        subItem.products.map((subCatProduct)=>{
                        if (subCatProduct.brand == keyword) {
                            // console.log(subCatProduct);
                            itemData.push(subCatProduct)
                             }
                          }) 
                        }
                    })

                }
            })
            // remove duplicates
            const afterRemoveDuplicate= itemData.filter((item, index) => itemData.indexOf(item) === index);
            setNewData(afterRemoveDuplicate);

            // scroll to top when filter
            window.scrollTo(0,0);
        }

        // filterByRating
    const filterByRating = (keyword) => {
        itemData = [];
        allProductData &&
        allProductData.map((item)=>{
            if (props.single === true) {
                    item.items &&
                    item.items.map((subItem)=>{
                        subItem.products &&
                        subItem.products.map((subCatProduct)=>{
                        if (subCatProduct.rating == keyword) {
                            // console.log(subCatProduct);
                            itemData.push({...subCatProduct, parentCatName: item.cat_name, subCatName: subItem.cat_name})
                        }
                    })})
                }
                // for sub category 
                else {
                    item.items &&
                    item.items.map((subItem)=>{
                        if (subItem.cat_name.split(' ').join('-') == id.split(' ').join('-')) {
                        subItem.products &&
                        subItem.products.map((subCatProduct)=>{
                            let ratings = parseFloat(subCatProduct.rating)
                        if (ratings === keyword) {
                            // console.log(subCatProduct);
                            itemData.push({...subCatProduct, parentCatName: item.cat_name, subCatName: subItem.cat_name})
                             }
                          }) 
                        }
                    })

                }
            })
            // remove duplicates
            const afterRemoveDuplicate= itemData.filter((item, index) => itemData.indexOf(item) === index);
            setNewData(afterRemoveDuplicate);

            // scroll to top when filter
            window.scrollTo(0,0);
        }
    



  return (
    <>
        <section className="ProductListing">
            <div className="container-fluid">
                {/* ----------    breadcrumb    ----------- */}
                <div className="breadcrumb ">
                    <h2>{sessionStorage.getItem('category')}</h2>
                    <ul className="list list-inline ">
                        <li className="list-inline-item text-capitalize"><Link to={'/'}>Home -</Link></li>
                        <li className="list-inline-item text-capitalize "><Link to={`/category/${sessionStorage.getItem('category')}`}>{sessionStorage.getItem('category')} -</Link></li>
                        {
                            props.single == false &&
                            <li className="list-inline-item text-capitalize ">{id}</li>
                        }
                    </ul>
                </div>

                {/*  -------  listing product data  -------------------------- */}
                <div className="listing-data">

                    {/* ------------- side bar  ---------------- */}
                    <div className=" left-sidebar">
                        <SidebarListing allProductData={allProductData} currentCatData={newData} filterByPrice={filterByPrice} filterByBrand={filterByBrand} filterByRating={filterByRating}/>
                    </div>

                    {/* ---------- right side bar  --------------------- */}
                    <div className="right-products ">

                            {/* --- top bar listing filter  ---- */}
                            <div className="topListingHeader">
                                <div className="top-list-heading">
                                    <p>We Found {newData.length} Products</p>
                                </div>
                                <div className="sorting-product-listing">
                                    <div className="showProductGrid position-relative ">
                                    <Button onClick={()=> setIsOpenAccountDrop(!isOpenAccountDrop)} className="btn-main"><IoGridOutline/>Show: 100<MdOutlineKeyboardArrowDown/></Button>
                                    {
                                        isOpenAccountDrop === true &&  //  --------- Menu switch logic
                                        <ul className="showDropMenu list-inline ">
                                            <li><Button> 10</Button></li>
                                            <li><Button> 30</Button></li>
                                            <li><Button> 50</Button></li>
                                            <li><Button> 80</Button></li>
                                            <li><Button> 100</Button></li>
                                            <li><Button> 150</Button></li>
                                            <li><Button> 200</Button></li>
                                        </ul>
                                        }
                                    </div>
                                    <div className="sortList position-relative ">
                                        <Button onClick={()=> setIsOpenAccountDrop2(!isOpenAccountDrop2)} className="btn-main"><PiSortAscending/>Sort By: Features<MdOutlineKeyboardArrowDown/></Button>
                                        {
                                        isOpenAccountDrop2 === true &&  //  --------- Menu switch logic
                                        <ul className="sortingDropMenu list-inline ">
                                            <li><Button> Price: Low to High</Button></li>
                                            <li><Button> Price: High to Low</Button></li>
                                            <li><Button> Release Date</Button></li>
                                            <li><Button> Avg. Rating</Button></li>
                                        </ul>
                                        }
                                    </div>
                                </div>
                            </div>

                            {/* ----  product list grid  ---- */}
                            <div className="product-list">
                                {
                                    newData &&
                                    newData.map((item, index)=>{
                                        return(
                                            <div className="items">
                                            <ProductItem item={item}/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default ListingProduct;
