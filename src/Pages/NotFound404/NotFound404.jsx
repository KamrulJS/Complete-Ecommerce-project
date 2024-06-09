import React from "react";
import './NotFound404.css'
import { Button } from "@mui/material";
import { FiCornerDownLeft } from "react-icons/fi";
import { Link } from "react-router-dom";


const NotFound404 = () => {
  return (
    <>
        {/* <!--====== ERROR PART START ======--> */}
            <section class="error-area error-one">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xxl-7 col-xl-8 col-lg-8">
                        <div class="error-content text-center">
                        <span class="error-404">404</span>
                        <h5 class="sub-title">Page Not Found</h5>
                        <p class="text">
                            There are many variations of passages of Lorem Ipsum avaable, b
                            majority have suffered alteration in some form
                        </p>
                        <Link to={'/'}><Button>Go Back Home <FiCornerDownLeft/></Button></Link>
                        </div>
                        {/* <!-- error content --> */}
                    </div>
                </div>
                {/* <!-- row --> */}
            </div>
            {/* <!-- container --> */}
            </section>
            {/* <!--====== ERROR PART ENDS ======--> */}
</>
  );
};

export default NotFound404;
