import React from "react";
import './Slider.css'
import Slider from "react-slick";
import { Button } from "@mui/material";
import { Telegram } from "@mui/icons-material";


const Sliders = () => {

    var settings = {
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        duration: 2,
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true,
      };
  return (
    <>
        <section className="homeSlider">
                <div className="container-fluid">
                <Slider {...settings} className="sliders-main">
                    <div className="item">
                        <img className="w-100" src='https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-1.png' alt="" />
                        <div className="slider-info">
                            <h1>Lorem ipsum dolor sit amet.</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, iusto!</p>
                            <div className="newsletter-slider mt-5">
                              <Telegram/>
                              <input type="text" placeholder="Your Email Address" />
                              <Button>Subscribe</Button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img className="w-100" src='https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-1.png' alt="" />
                        <div className="slider-info">
                            <h1>Lorem ipsum dolor sit amet.</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, iusto!</p>
                            <div className="newsletter-slider mt-5">
                              <Telegram/>
                              <input type="text" placeholder="Your Email Address" />
                              <Button>Subscribe</Button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img className="w-100" src='https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-1.png' alt="" />
                        <div className="slider-info">
                            <h1>Lorem ipsum dolor sit amet.</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, iusto!</p>
                            <div className="newsletter-slider mt-5">
                            <Telegram/>
                              <input type="text" placeholder="Your Email Address" />
                              <Button>Subscribe</Button>
                            </div>
                        </div>
                    </div>


                    </Slider>
                    {/* newsletter */}
                    
                </div>
        </section>
    </>
  );
};

export default Sliders;
