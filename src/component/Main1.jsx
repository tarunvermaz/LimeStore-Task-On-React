import React from 'react'
import video from '../../public/images/video-1.mp4'
import { FaArrowRight } from "react-icons/fa6";

const Main1 = () => {
  return (
    

    <div className="main-1">
        <div className="content-1">
            <div className='cont-h1'>
                <div><img src="./images/icon-01.svg" alt="" /></div>
                <div><p>CLOUD FP&A SOFTWARE</p></div>
            </div>
            <h1 className='headline'><span>Meet Limelight:</span> Excel-free FP&A</h1>
            <h3 className='para'>A Modern Solution to a Decades-Old Problem</h3>
            <p className='para2'  style={{ color: "#606e7f",fontSize:"1.4vmax",lineHeight:"26px"}}>Limelight is an Excel-free FP&A platform designed for ease of use, fast onboarding, and powerful automation—allowing you to budget 3x faster without the headaches of spreadsheets. With built-in workflows, real-time collaboration, and seamless integrations, finance teams finally have a modern solution that helps them move beyond Excel.</p>
            <button className='btn-4'><span>Book a live demo</span> <span><FaArrowRight/></span></button>
        </div>
        <div className="video-1">
            <video autoPlay loop muted src={video}></video>
        </div>
    </div>
    
  )
}

export default Main1;