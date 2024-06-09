import React, { useEffect, useState } from "react";
import './SidebarListing.css';
import Slider from '@mui/material/Slider';
import { Box, Button, FormControlLabel, RadioGroup } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { Link, useParams } from "react-router-dom";
import { RiRadioButtonFill } from "react-icons/ri";


    // function filtering ------
    function valuetext(value) {
        return `${value}°C`;
    }
    // check box
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const SidebarListing = (props) => {
        const {allProductData} = props;
        let {id} = useParams();

        // find the length of products
        const [totalLength, setTotalLength] = useState([]);
        var categoryLength = 0;
        var LengthArray = [];

        useEffect(() => {
            allProductData &&
            allProductData.map((item)=>{
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


        // filtering progress bar
        const [value, setValue] = React.useState([200, 100000]);
        const handleChange = (event, newValue) => {
        setValue(newValue);
        props.filterByPrice(newValue[0], newValue[1])
        };

        //  brand filter  -----------------
        const [brandFilter, setBrandFilter] = useState([]);
        const [ratingsArray, setRatingsArray] = useState([]);
        var brands = [];
        var ratings = [];
        useEffect(() => {
            brands = [];
            ratings = [];
            props.currentCatData &&
            props.currentCatData.map((item)=>{
                brands.push(item.brand);
                ratings.push(parseFloat(item.rating)); 
            })

            const brandRemoveDuplicate = brands.filter((item, index)=> brands.indexOf(item) === index);
            setBrandFilter(brandRemoveDuplicate);

            const ratingsRemoveDuplicate = ratings.filter((item, index)=> ratings.indexOf(item) === index);
            setRatingsArray(ratingsRemoveDuplicate);

        }, [brandFilter, ratingsArray]);
       
        // filters function call here
        const filterByBrand = (keyword) =>{
            props.filterByBrand(keyword);
        }
        const filterByRating = (keyword) =>{
            props.filterByRating(parseFloat(keyword));
        }



  return (
    <>
    <div className="sideBar">
        {/* ---------- category   ------------------- */}
        <div className="category">
            <h1 className="heading">Category</h1>
            <div className="categoryList">
                {
                    allProductData &&
                    allProductData.map((item, index)=>{
                        return(
                            <a href={`/category/${item.cat_name}`}>
                                <div className="categoryItem" key={index}>
                                    <img src={item.image} alt="" />
                                    <p className="text-capitalize">{item.cat_name}</p>
                                    {/* <span className="cat-total-items">{item.items.products.length}</span> */}
                                    <span className="cat-total-items">{totalLength[index]}</span>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </div>

        {/* ---------- filter   ------------------- */}
        <div className="Filter">
            <h1 className="heading">Filter by Price</h1>
            <div className="filter-range">
            <Box>
                <Slider
                    min={0}
                    step={1}
                    max={100000}
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    color="success"

                />
                <div className="valueFromTo d-flex justify-content-between align-items-center ">
                    <span>From <strong className="global-text">${value[0]}</strong></span>
                    <span >To <strong className="global-text">${value[1]}</strong></span>
                </div>
            </Box>
            {/* filter color */}
             <div className="filter-color">
                <div className="check-box">
                    <h3>Filter by Brand</h3>
                    <ul className="mb-0 list-inline">
                        <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue='female'
                        name="radio-buttons-group"
                        >
                            {
                              brandFilter &&
                              brandFilter.map((item, index)=>{
                                 return (
                                   <li key={index}> <FormControlLabel value={item} control={<Checkbox onChange={()=> filterByBrand(item)} />} label={item}/></li>
                                 )
                              })
                            }
                        </RadioGroup>
                    </ul>
                </div>
            </div>
            {/* filter Item Condition */}
             <div className="filter-item-rating">
                <div className="check-box">
                    <h3>Filter By Rating</h3>
                    <ul className="list-inline ">
                        {
                              ratingsArray &&
                              ratingsArray.map((item, index)=>{
                                 return (
                                   <li key={index}> <FormControlLabel value={item} control={<Checkbox onChange={()=> filterByRating(item)} />} label={item}/></li>
                                 )
                              })
                         }
                        <li><Checkbox {...label} /> Red(50)</li>
                    </ul>
                </div>
            </div>

            </div>
            <Button className="filter-btn bg-global">Filter</Button>
        </div>
    </div>
       
    </>
  );
};

export default SidebarListing;
