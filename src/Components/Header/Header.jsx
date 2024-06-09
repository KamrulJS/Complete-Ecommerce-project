import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/react.svg";
import "../Header/Header.css";
import { CiSearch } from "react-icons/ci";
import SelectDropMenu from "./SelectDropMenu/SelectDropMenu";
import axios from "axios";
import { LuMapPin } from "react-icons/lu";
import { IoIosGitCompare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { Button } from "@mui/material";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { TbBaselineDensitySmall } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import Nav from "./Nav/Nav";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [categories, setcategories] = useState([
    "Milks and Dairies",
    "Wines & Drinks",
    "Clothing & beauty",
    "Fresh Seafood",
    "Pet Foods & Toy",
    "Fast food",
    "Baking material",
    "Vegetables",
    "Fresh Fruit",
    "Bread and Juice",
  ]);

  const [isOpenAccountDrop, setIsOpenAccountDrop] = useState(false);

  // country list API   ----------------------------------------------------------
  const countryList = [];
  useEffect(() => {
    getCounrty("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCounrty = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          res.data.data.map((items, index) => {
            countryList.push(items.country);
          });
          // console.log(res.data.data);
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  // --------------- scroll  nav menu   -----------------
  // const headerNavRef = useRef();
  // useEffect(() => {
  //         window.addEventListener("scroll", ()=>{
  //             let headerPosition = window.pageYOffset;
  //             if (headerPosition > 100) {
  //                 headerNavRef.current.classList.add('fixed')
  //             }
  //             else {
  //                 headerNavRef.current.classList.remove('fixed')
  //             }
  //         })
  // }, []);

  return (
    <>
      <header>
        <div className="container-fluid ">
          <div className="row justify-content-center align-items-center ">
            {/* ----------- logo */}
            <div className="col-sm-2 d-flex align-items-center ">
              {/* <Link to='/'><img src={logo} alt="" /></Link> */}
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </div>

            {/* ------  Header Search start */}
            <div className="col-sm-5 search">
              <div className="header-search d-flex justify-content-center align-items-center ">
                <SelectDropMenu
                  data={categories}
                  placeholder={"All Categories"}
                  icon={false}
                />
                <div className="searchField">
                  <div className="searchArea">
                    <input type="text" placeholder="Search your Items..." />
                    <CiSearch className="searchIcon" />
                  </div>
                </div>
              </div>
            </div>

            {/* ------- country list -------------------------*/}
            <div className="country">
              <div className="countryList">
                <SelectDropMenu
                  data={countryList}
                  placeholder={"Your Loacation"}
                  icon={<LuMapPin />}
                />
              </div>
            </div>

            {/* ----------------- ecommerce Icons start --------------------------------*/}
            <div className="iconsEcom ">
              <ClickAwayListener
                onClickAway={() => setIsOpenAccountDrop(false)}
              >
                <ul className="list">
                  <li className="list-inline-item ">
                    <span>
                      <IoIosGitCompare /> <span className="badge">2</span>{" "}
                      Compare
                    </span>
                  </li>
                  <li className="list-inline-item ">
                    <span>
                      <CiHeart />
                      <span className="badge">3</span>Wishlist
                    </span>
                  </li>
                  <li className="list-inline-item ">
                    <span>
                      <IoCartOutline />
                      <span className="badge">5</span> Cart
                    </span>
                  </li>

                  {/* ------    Account Menu ------------------ */}
                  <li
                    className="list-inline-item "
                    onClick={() => setIsOpenAccountDrop(!isOpenAccountDrop)}
                  >
                    <span
                      className="bg-global"
                      style={{
                        border: "1px solid rgb(234 234 237)",
                        padding: "6px 10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "5px",
                        color: "white",
                      }}
                    >
                      <VscAccount /> Account
                    </span>
                    {isOpenAccountDrop === true && ( //  --------- Menu switch logic
                      <ul className="accountDropMenu">
                        <li>
                          <Button>
                            {" "}
                            <VscAccount /> My Account
                          </Button>
                        </li>
                        <li>
                          <Button>
                            {" "}
                            <LuMapPin /> Order Tracking
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <MdOutlineSpeakerNotes /> My Voucher
                          </Button>
                        </li>
                        <li>
                          <Button>
                            {" "}
                            <CiHeart /> My Wishlist
                          </Button>
                        </li>
                        <li>
                          <Button>
                            {" "}
                            <TbBaselineDensitySmall /> Setting
                          </Button>
                        </li>
                        <li>
                          <Button>
                            {" "}
                            <CiLogout /> Sign out
                          </Button>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </ClickAwayListener>
            </div>
          </div>
        </div>
      </header>

      {/* --------------  Down Navigation Menu  ------------------------- */}
      <div className="navigationMenu mt-3">
        <Nav data={props.data} />
      </div>
    </>
  );
};

export default Header;
