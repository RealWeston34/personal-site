import React from 'react'
import DownloadButton from '../DownloadButton'
import './index.css'

const Intro = () => {
    return (
        <div id="intro">
        <div id="intro-content">
            <h1>Scotty Boy</h1>
            <h2>Computer Engineering Student</h2>
            <DownloadButton
        fileUrl="../../assets/documents/Resume 01.pdf"
        fileName="Scott_Figueroa_Weston_Resume.pdf"
      />
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