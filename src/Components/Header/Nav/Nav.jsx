import React, { useEffect, useState } from "react";
import './Nav.css'
import { Button } from "@mui/material";
import { MdArrowDropDown } from "react-icons/md";
import { BsGrid3X3Gap } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SlEarphonesAlt } from "react-icons/sl";


const Nav = (props) => {


  const [navData, setNavData] = useState([]);


useEffect(() => {
//   console.log(props.data.productData); 
  setNavData(props.data.productData);
}, []);




  return (
    <nav className="nav d-flex justify-content-center align-items-center">
        <div className="container-fluid">
            <div className="row position-relative ">

                {/* Category Menu */}
                <div className="col-sm-3 nav-category">
                    <Button className="bg-global text-white"> <BsGrid3X3Gap /> Browse All Categories <MdArrowDropDown/></Button>
                </div>

                {/* Nav Menu */}
                <div className="col-sm-7 nav-menu position-static ">
                        <ul className="navMenuList list-inline">
                            <li className="list-inline-item "><Button><Link to={'/'}>Home</Link></Button></li>
                            <li className="list-inline-item "><Button><Link to={'/shop-listing'}>Shop Listing</Link></Button></li>
                            <li className="list-inline-item position-static "><Button><Link>Mega Menu <MdArrowDropDown/></Link></Button>

                                {/* ------ Mega Menu pages dropdown menu */}
                                  <div className="pages-dropMenu MegaMenu">
                                  {/* ----------   API data for nav menu  ----------- */}
                                  {
                                    navData &&  navData.map((item, index) => {
                                        return (
                                          <div className="col" key={index}>
                                          <a onClick={()=> sessionStorage.setItem('category', item.cat_name)} href={`/category/${item.cat_name}`}> <h4>{item.cat_name}</h4></a>
                                             {item.items && 
                                               <ul>
                                                {
                                                   item.items.map((subCatName, index)=>{
                                                     return (
                                                      <li key={index}>
                                                        <Button>
                                                            <a href={`/category/${item.cat_name}/${subCatName.cat_name.replace(/\s/g,'-')}`}
                                                             onClick={()=> sessionStorage.setItem('category', item.cat_name)}
                                                            >{subCatName.cat_name}</a>
                                                          </Button>
                                                        </li>
                                                          )})
                                                 }
                                               </ul>
                                              }
                                                 </div>
                                                )})
                                            
                                     }
                                    <div className="col">
                                        <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png" alt="" />
                                    </div>
                                    </div>
                            </li>

                            <li className="list-inline-item ">
                                <Button><Link to={'/'}>Pages <MdArrowDropDown/></Link></Button>
                                {/* ------  pages dropdown menu */}
                                <div className="pages-dropMenu">
                                    <ul>
                                        <li><Button><Link to='/'>About</Link></Button></li>
                                        <li><Button><Link to='/'>My Account</Link></Button></li>
                                        <li><Button><Link to='/'>Login</Link></Button></li>
                                        <li><Button><Link to='/'>Register</Link></Button></li>
                                        <li><Button><Link to='/'>Order</Link></Button></li>
                                        <li><Button><Link to='/'>History</Link></Button></li>
                                        <li><Button><Link to='/'>Forget Password</Link></Button></li>
                                        <li><Button><Link to='/'>Pages More</Link></Button></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="list-inline-item "><Button><Link to={'/product/details'}>Product Details</Link></Button></li>
                            <li className="list-inline-item "><Button><Link to={'/about'}>About</Link></Button></li>
                      </ul>
                </div>
                <div className="col-sm-2 contact-btn d-flex justify-content-center  align-items-center ">
                    <div className="phoneNum d-flex justify-content-center  align-items-center">
                        <span><SlEarphonesAlt /> </span>
                        <div className="phone-info ml-3 d-flex flex-column  justify-content-center  align-items-start">
                            <h4>99999999999</h4>
                            <p>24/7 Support Center</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Nav;

