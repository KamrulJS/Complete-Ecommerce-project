import React from "react";
import Box from '@mui/material/Box';
import './BannerShow.css'
import { Button } from "@mui/material";

const BannerShow = () => {
  return (
    <>
        <div className="banner-box">
            <Box className="box" component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                 <div className="box-area">
                 <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-1.png" alt="" />
                 <div className="content-box">
                    <h3>Make your Breakfast Healthy and Easy</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, eveniet.</p>
                    <Button className="bg-global text-white ">Learn More</Button>
                 </div>
                 </div>
            </Box>
            <Box className="box" component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                 <div className="box-area">
                 <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-1.png" alt="" />
                 <div className="content-box">
                    <h3>Make your Breakfast Healthy and Easy</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, eveniet.</p>
                    <Button className="bg-global text-white ">Learn More</Button>
                 </div>
                 </div>
            </Box>
            <Box className="box" component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                 <div className="box-area">
                 <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-1.png" alt="" />
                 <div className="content-box">
                    <h3>Make your Breakfast Healthy and Easy</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, eveniet.</p>
                    <Button className="bg-global text-white ">Learn More</Button>
                 </div>
                 </div>
            </Box>
            
        </div>
    </>
  );
};

export default BannerShow;
