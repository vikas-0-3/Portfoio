import React from 'react'
import crm from '../project/crm.png'
import music from '../project/music.png'
import quiz from '../project/quiz.jpg'
import research from '../project/research.jpeg'


const Resumescreen = () => {
    return (
        <div className="container-fluid p-4" id="maindiv">
            <h2 className="text-start fw-bold" style={{ color: "skyblue" }}>Resume </h2>

            <div className="container my-2" id="resume_timelines">
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="text-start fw-bold text-white">Education</h5>

                        <div className="card text-white" style={{ backgroundColor: "#222" }}>
                            <div className="card-body">
                                <div id="content">
                                    <ul className="timeline">
                                        <li className="event" data-date="May 2022">
                                            <h3>B Tech CS (CSF)</h3>
                                            <p>GLA University, Mathura, India</p>
                                        </li>
                                        <li className="event" data-date="May 2018">
                                            <h3>Intermediate</h3>
                                            <p>Kendriya Vidhyalaya</p>
                                        </li>
                                        <li className="event" data-date="May 2016">
                                            <h3>High School</h3>
                                            <p>Kendriya Vidhyalaya</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-start">
                        <h5 className="text-start fw-bold text-white">Professional <span style={{ color: "skyblue" }}>Skills</span></h5>
                        <br />
                        <div className="col my-2">
                            <small className="text-white">Teamwork</small>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                            </div>
                        </div>

                        <div className="col my-2">
                            <small className="text-white">Creative Thinking</small>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                            </div>
                        </div>

                        <div className="col my-2">
                            <small className="text-white">Analytical Thinking</small>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                            </div>
                        </div>

                        <div className="col my-2">
                            <small className="text-white">Leadership</small>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                            </div>
                        </div>

                    </div>
                </div>

                <br />
                <div className="row">
                    <div className="col-md-6 text-start">
                        <h5 className="text-start fw-bold text-white">Technical <span style={{ color: "skyblue" }}>Skills</span></h5>
                        <br />
                        <div className="col my-2">
                            <small className="text-white">C / C++</small>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="50">50%</div>
                            </div>
                        </div>

                        <div className="col my-2">
                            <small className="text-white">Java</small>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "65%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="65">65%</div>
                            </div>
                        </div>

                        <div className="col my-2">
                            <small className="text-white">HTML / CSS / JAVASCRIPT</small>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                            </div>
                        </div>

                        <div className="col my-2">
                            <small className="text-white">PHP / CODEIGNITOR</small>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="85">85%</div>
                            </div>
                        </div>

                        <div className="col my-2">
                            <small className="text-white">PYTHON / DJANGO</small>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="80">80%</div>
                            </div>
                        </div>

                        <div className="col my-2">
                            <small className="text-white">MYSQL, SQLITE3, MONGODB</small>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="90">90%</div>
                            </div>
                        </div>

                        <div className="col my-2">
                            <small className="text-white">REST API</small>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">90%</div>
                            </div>
                        </div>

                        <div className="col my-2">
                            <small className="text-white">GIT / VCS</small>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="50">50%</div>
                            </div>
                        </div>

                    </div>


                    <div className="col-md-6">
                        <h5 className="text-start fw-bold text-white">Internship Experience</h5>

                        <div className="card text-white" style={{ backgroundColor: "#222" }}>
                            <div className="card-body">
                                <div id="content">
                                    <ul className="timeline">
                                        <li className="event" data-date="May 2021 - Sep 2021">
                                            <h3>SIKARWAR SOFTWARES</h3>
                                            <p>Full Stact Developer</p>
                                        </li>
                                        <li className="event" data-date="May 2020 - May 2021">
                                            <h3>ACCRETIVE TECHOLOGIES</h3>
                                            <p>Full Stact Developer</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <br />
                <br />

                <div className="row my-4 p-2">
                    <h5 className="text-start fw-bold" style={{ color: "skyblue" }}>PROJECTS</h5>


                    <div className="card col-sm m-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={crm} className="img-fluid rounded-start" alt="CRM" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">CRM APPLICATION</h5>
                                    <p className="card-text">Customer relationship management application in Django</p>
                                    <p className="card-text"><small className="text-muted">Last updated 16 Sep 2021</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card col-sm m-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={music} className="img-fluid rounded-start" alt="CRM" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">MUSIC PLAYER</h5>
                                    <p className="card-text">Simple music player in Django</p>
                                    <p className="card-text"><small className="text-muted">Last updated Apr 2021</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row my-4 p-2">

                    <div className="card col-sm m-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={quiz} className="img-fluid rounded-start" alt="CRM" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">QUIZ APPLICATION</h5>
                                    <p className="card-text">Simple quiz app in Node Js</p>
                                    <p className="card-text"><small className="text-muted">Last updated 30 Aug 2021</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card col-sm m-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={research} className="img-fluid rounded-start" alt="CRM" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">RESEARCH PAPER</h5>
                                    <p className="card-text">An analysis of authentication methods of web application</p>
                                    <p className="card-text"><small className="text-muted">1 May 2020</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>



        </div>
    )
}

export default Resumescreen
