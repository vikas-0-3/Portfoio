import React from 'react'

const Contactscreen = () => {


    return (
        <div className="container-fluid p-4 contactdiv" id="maindiv">
            <div className="container my-3">
                <h2 className="text-start"  style={{ color: "skyblue" }}><b>Contact</b></h2>

            </div>
            <br />

            <div className="container" id="contact_cards">
                <div className="row">
                    <div className="col-sm">
                        <div className="card my-3 py-2">
                            <span className="material-icons">&#xe8b4;</span>
                            <div className="card-body">
                                Location
                            </div>
                        </div>
                        <div className="card my-3 py-2">
                            <span className="material-icons">&#xe0b0;</span>
                            <div className="card-body">
                                +91-9643460132
                            </div>
                        </div>
                        <div className="card my-3 py-2">
                            <span className="material-icons">&#xe0be;</span>
                            <div className="card-body">
                                contact.vikasgupta@gmail.com
                            </div>
                        </div>
                        {/* <div className="card my-3 py-2">
                            <span className="material-icons">&#xe2e6;</span>
                            <div className="card-body">
                                Freelancing available
                            </div>
                        </div> */}
                    </div>
                    {/* how can i help you part */}
                    <div className="col-sm text-start">
                        <h4 className="text-white"><b>How Can I <span style={{ color: "skyblue" }}>Help You? </span></b></h4>
                        <br />

                        <div className="row">
                            <div className="col-sm">
                                <div classNAme="mb-3">
                                    <label htmlFor="username" className="form-label">Full name</label>
                                    <input type="text" className="form-control bg-dark text-white" id="username" placeholder="Full name" />
                                </div>
                                <div classNAme="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control bg-dark text-white" id="email" placeholder="Email address" />
                                </div>
                                <div classNAme="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone number</label>
                                    <input type="text" className="form-control bg-dark text-white" id="phone" placeholder="Phone number" />
                                </div>
                            </div>
                            <div className="col-sm">

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control bg-dark text-white" id="message" rows="7" placeholder="message"></textarea>
                                </div>
                            </div>
                            <div class="d-grid mx-auto">
                            <button type="button" class="btn btn-outline-info p-2" id="send_button">Send Message</button>

                            </div>
                        </div>




                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contactscreen
