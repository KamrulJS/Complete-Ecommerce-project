import React from "react";
import TopSellingProduct from "./TopSellingProduct/TopSellingProduct";
import "./TopSelling.css";


const TopSelling = () => {
  return (
    <>
        <div className="topSelling">
            <div className="container-fluid">
                <div className="row ">
                    <div className="col">
                        <TopSellingProduct title="Top Selling"/>
                    </div>
                    <div className="col">
                        <TopSellingProduct title="Trending Products"/>
                    </div>
                    <div className="col">
                        <TopSellingProduct title="Recently added"/>
                    </div>
                    <div className="col">
                        <TopSellingProduct title="Top Rated"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default TopSelling;
