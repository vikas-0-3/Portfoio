import React from 'react'
import logo from '../myimage.jpg';
import resume from '../myresume.pdf'
const Sidebar = () => {

    return (
        <div className="col-2" id="profilediv">
            <img src={logo} className="userimage my-3" alt="MyImage" />
            <br />
            <h2 style={{color:"skyblue"}}>Vikash Gupta</h2>
            <h5 style={{color:"skyblue"}}>Full Stack Developer</h5>
            
            <a href={resume} download className="btn btn-outline-light mt-4" id="download_button">Download CV</a>
        </div>
    )
}

export default Sidebar
