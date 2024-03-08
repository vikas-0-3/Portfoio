import React from 'react'

const Aboutscreen = () => {


    return (
        <div className="container-fluid p-4 aboutdiv" id="maindiv">
            <div className="container my-3 mx-0">
                <h2 className="text-white text-start"><b>About <span style={{ color: "skyblue" }}>Me</span> </b></h2>
                <br />
                <div className="row mt-4">
                    <div className="col-sm">
                        <p className="text-break text-white text-start">
                        I thrive on challenges and enjoy turning complex problems into simple, elegant solutions. My goal is to build scalable and efficient applications that not only meet but exceed the expectations of users. With a solid foundation in both front-end and back-end technologies, I bring a holistic approach to development projects.
                        </p>
                    </div>
                    <div className="col-sm">
                        <div className="text-start">
                            <ul className="list-group list-group-flush mylist">
                                <li className="list-group-item text-white"><span>Date of Birth&ensp;</span>03 feb 2000</li>
                                <li className="list-group-item text-white"><span>Place&ensp;</span>Delhi, India</li>
                                <li className="list-group-item text-white"><span>Profile&ensp;</span>Full-Stack Developer</li>
                                <li className="list-group-item text-white"><span>Experience&ensp;</span>2+ Years</li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
            <br />

            <div className="container mx-0" id="todocards">
                <h5 className="text-white text-start"><b>What <span style={{ color: "skyblue" }}> I Do </span></b></h5>

                <div className="row text-start">
                    <div className="col-sm">
                        <div className="card my-3 p-3">
                            <span className="material-icons">&#xe871;</span>
                            <h6 className="my-1 fw-bold">FULL STACK DEVELOPMENT</h6>
                            <p className="my-2">2+ Years Experience</p>
                        </div>
                        <div className="card my-3 p-3">
                            <span className="material-icons">&#xe3c9;</span>
                            <h6 className="my-1 fw-bold">WEB AUTOMATION</h6>
                            <p className="my-2">2+ Years Experience</p>
                        </div>

                    </div>

                    <div className="col-sm">
                        <div className="card my-3 p-3">
                            <span className="material-icons">&#xe325;</span>
                            <h6 className="my-1 fw-bold">MOBILE APPS DEVELOPMENT</h6>
                            <p className="my-2">1+ Years Experience</p>
                        </div>
                        <div className="card my-3 p-3">
                            <span className="material-icons">&#xe2e6;</span>
                            <h6 className="my-1 fw-bold">CRM / CMS</h6>
                            <p className="my-2">2+ Years Experience</p>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Aboutscreen
