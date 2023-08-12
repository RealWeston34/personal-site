import React from 'react'
import DownloadButton from '../DownloadButton'
import './index.css'
import Head from '../Head/'

const Intro = () => {
    return (
        <div id="intro">
            <div class="head-container">
                <Head/>
            </div>
            
        <div id="intro-content">
            <h1>Scott Figueroa Weston</h1>
            <h2>Computer Engineering Student</h2>
            <div id="button-area">
            <DownloadButton
        fileUrl="https://raw.githubusercontent.com/Realweston34/personal-site/main/public/documents/RESUME-02.pdf"
        fileName="Scott_Figueroa_Weston_Resume.pdf"
      />
        </div>
        </div>

        <div id="intro-overlay"></div>

        <div id="intro-down">
            <span>
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </span>
        </div>
    </div>
    )
}

export default Intro

