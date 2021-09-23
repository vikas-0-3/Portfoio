import React from 'react'
import { Link, useLocation } from "react-router-dom";
import resume from '../myresume.pdf'

const Sideicons = () => {
    const location = useLocation();
    return (
        <div className="container col-1" id="sideicons">
            <p className="text-white text-center">
                <Link to="/"><span className={`material-icons ${location.pathname==="/"?"active":""} `}>&#xE88A;</span>
                    <small className={` ${location.pathname==="/"?"active":"text-white"} `}>Home</small></Link>
            </p>
            <hr className="bg-white" />
            <p className="text-white text-center">
                <Link to="/about"><span className={`material-icons ${location.pathname==="/about"?"active":""} `}>&#xe8a6;</span>
                    <small className={` ${location.pathname==="/about"?"active":"text-white"} `}>About</small></Link>
            </p>
            <hr className="bg-white" />
            <p className="text-white text-center">
                <Link to="/contact"><span className={`material-icons ${location.pathname==="/contact"?"active":""} `}>&#xe0be;</span>
                    <small className={` ${location.pathname==="/contact"?"active":"text-white"} `}>Contact</small></Link>
            </p>
            <hr className="bg-white" />
            <p className="text-white text-center">
                <Link to="/resume"><span className={`material-icons ${location.pathname==="/resume"?"active":""} `}>&#xe80c;</span>
                    <small className={` ${location.pathname==="/resume"?"active":"text-white"} `}>Resume</small></Link>
            </p>
            <hr className="bg-white" />
            <p className="text-white text-center">
                <Link to="/certificates"><span className={`material-icons ${location.pathname==="/certificates"?"active":""} `}>&#xe8f7;</span>
                    <small className={` ${location.pathname==="/certificates"?"active":"text-white"} `}>Certificates</small></Link>
            </p>

            <hr className="bg-white" />
            <p className="text-white text-center" id="download_sidebar_button">
                <a href={resume} download><span className={`material-icons ${location.pathname==="/download"?"active":""} `}>&#xe2c4;</span>
                <small className={` ${location.pathname==="/download"?"active":"text-white"} `}>Download</small></a>
            </p>

        </div>
    )
}

export default Sideicons
