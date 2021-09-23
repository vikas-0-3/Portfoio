import React from 'react'

const Aboutscreen = () => {


    return (
        <div className="container-fluid p-4 aboutdiv" id="maindiv">
            <div className="container my-3">
                <h2 className="text-white text-start"><b>About <span style={{ color: "skyblue" }}>Me</span> </b></h2>
                <br />
                <div className="row mt-4">
                    <div className="col-sm-8">
                        <p className="text-break text-white text-start">
                            I am passionate about my work. Because i love what i do, I have a steady source of motivation that drives me to do my best,
                            this passion led me to challenge myself daily and learn new skills that helped me to do better work .&ensp;
                            I am an Engineering student, with experience developing web applications for various multi national companies.
                            My Engineering background is from cyber security branch which helps me to provide security for the application i made.
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <div className="text-start">
                            <ul className="list-group list-group-flush mylist">
                                <li className="list-group-item text-white"><span>Date of Birth&ensp;</span>03 feb 2000</li>
                                <li className="list-group-item text-white"><span>Place&ensp;</span>Delhi, India</li>
                                <li className="list-group-item text-white"><span>Profile&ensp;</span>Web developer</li>
                                <li className="list-group-item text-white"><span>Experience&ensp;</span>2+ Years</li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
            <br />

            <div className="container" id="todocards">
                <h5 className="text-white text-start"><b>What <span style={{ color: "skyblue" }}> I Do </span></b></h5>

                <div className="row text-start">
                    <div className="col-sm">
                        <div className="card my-3 p-3">
                            <span className="material-icons">&#xe871;</span>
                            <h6 className="my-1 fw-bold">WEB DESIGN</h6>
                            <p className="my-2">2+ Years Experience</p>
                        </div>
                        <div className="card my-3 p-3">
                            <span className="material-icons">&#xe3c9;</span>
                            <h6 className="my-1 fw-bold">WEB EDITING</h6>
                            <p className="my-2">2+ Years Experience</p>
                        </div>

                    </div>

                    <div className="col-sm">
                        <div className="card my-3 p-3">
                            <span className="material-icons">&#xe325;</span>
                            <h6 className="my-1 fw-bold">MOBILE APPS</h6>
                            <p className="my-2">0+ Years Experience</p>
                        </div>
                        <div className="card my-3 p-3">
                            <span className="material-icons">&#xe2e6;</span>
                            <h6 className="my-1 fw-bold">FREELANCING</h6>
                            <p className="my-2">1+ Years Experience</p>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Aboutscreen
