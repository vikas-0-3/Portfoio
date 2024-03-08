import React from 'react'
import phpcertificate from '../certificates/phpcertificate.jpg'
import codeigniter from '../certificates/codeigniter.jpg'
import git from '../certificates/git.jpg'
import workshop from '../certificates/workshop.jpg'
import accretivetraining from '../certificates/accretivetraining.jpg'
import dell from '../certificates/dellcertificate.jpg'
import landingpage from '../certificates/landingpage.jpg'
const Certificatescreen = () => {

    return (
        <div className="container-fluid p-4" id="maindiv">
            <div className="container mx-0 my-3">
                <h2 className="text-start fw-bold" style={{ color: "skyblue" }}>Certificates </h2>
                <br />
                <div className="row mt-4 text-muted">
                    <ul className="nav">
                        <li className="nav-item mx-1 text-white">
                            All
                        </li>
                        <li className="nav-item mx-1">
                            Tech
                        </li>
                        <li className="nav-item mx-1">
                            Workshop
                        </li>
                        <li className="nav-item mx-1">
                            Others
                        </li>
                    </ul>

                </div>


            </div>
            <br />

            <div className="container mx-0" id="certificates_cards">

                <div className="row">

                    <div className="col-sm card m-3 text-white">
                        <img src={accretivetraining} className="card-img-top img-thumbnail" alt="Certificate of training" />
                        <div className="card-body">
                            <h5 className="card-title">CERTIFICATE OF TRAINING</h5>
                            <p className="card-text"><small className="text-muted">ACCRETIVE TECHNO (01 APR 2020 - 31 MAR 2021)</small></p>
                        </div>
                    </div>
                    <div className="col-sm card m-3">
                        <img src={dell} className="card-img-top img-thumbnail" alt="Codeigniter certificate" />
                        <div className="card-body">
                            <h5 className="card-title">WEB DEVELOPMENT TRAINING</h5>
                            <p className="card-text"><small className="text-muted">SKILL INDIA [DELL] (28 SEP 2020 - 03 NOV 2020)</small></p>
                        </div>
                    </div>
                    <div className="col-sm card m-3">
                        <img src={landingpage} className="card-img-top img-thumbnail" alt="Codeigniter certificate" />
                        <div className="card-body">
                            <h5 className="card-title">CERTIFICATE OF APPRECIATION</h5>
                            <p className="card-text"><small className="text-muted">ACCRETIVE TECHNO (15 JUN 2020)</small></p>
                        </div>
                    </div>

                </div>



                <div className="row">

                    <div className="col-sm card m-3 text-white">
                        <img src={phpcertificate} className="card-img-top img-thumbnail" alt="Php Certificate" />
                        <div className="card-body">
                            <h5 className="card-title">PHP BOOTCAMP CERTIFICATE</h5>
                            <p className="card-text"><small className="text-muted">UDEMY (25 JUN 2020)</small></p>
                        </div>
                    </div>
                    <div className="col-sm card m-3">
                        <img src={codeigniter} className="card-img-top img-thumbnail" alt="Codeigniter certificate" />
                        <div className="card-body">
                            <h5 className="card-title">COMPLETE GUIDE TO CODEIGNITER</h5>
                            <p className="card-text"><small className="text-muted">UDEMY (23 NOV 2020)</small></p>
                        </div>
                    </div>
                    <div className="col-sm card m-3">
                        <img src={git} className="card-img-top img-thumbnail" alt="Codeigniter certificate" />
                        <div className="card-body">
                            <h5 className="card-title">INTRODUCTION TO GIT AND GITHUB</h5>
                            <p className="card-text"><small className="text-muted">COURSERA (07 DEC 2020)</small></p>
                        </div>
                    </div>

                </div>

                <div className="row">

                    <div className="col-sm card m-3 text-white">
                        <img src={workshop} className="card-img-top img-thumbnail" alt="Php Certificate" />
                        <div className="card-body">
                            <h5 className="card-title">ETHICAL HACKING WORKSHOP</h5>
                            <p className="card-text"><small className="text-muted">REGEX (04 SEP 2020)</small></p>
                        </div>
                    </div>
                    <div className="col-sm card m-3">
                        <img src={workshop} className="card-img-top img-thumbnail" alt="Codeigniter certificate" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"><small className="text-muted">REGEX (04 SEP 2020)</small></p>
                        </div>
                    </div>
                    <div className="col-sm card m-3">
                        <img src={workshop} className="card-img-top img-thumbnail" alt="Codeigniter certificate" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"><small className="text-muted">REGEX (04 SEP 2020)</small></p>
                        </div>
                    </div>

                </div>
            </div>


        </div >
    )
}

export default Certificatescreen
