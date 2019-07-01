import React from "react"

function AirportGuide (props){

        return (


            <div>
                <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                <h1 className="airportname-data">This is a test</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 alert alert-warning" id="alert-div">
                                    <p className="alert-data"></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 add-divider">
                                    <h4>Airport Location</h4>
                                    <p className="address-data"></p>
                                    <p className="directions-data"></p>
                                    <p className="website-data"></p>
                                </div>
                                <div className="col-md-6 add-divider" id="gate-locations">
                                    <h4>Gate Locations</h4>
                                    <p className="gate-locations-data"></p>
                                </div>
                            </div>
                            <div className="row row-margin-top" id="ticket-counter-row">
                                <div className="col-md-6 add-divider">
                                    <h4>Ticket counter hours</h4>
                                    <p className="ticket-counter-data"></p>
                                </div>
                                <div className="col-md-6 add-divider">
                                    <h4>When to arrive at the airport</h4>
                                    <p className="withbags-data"></p>
                                    <p className="withoutbags-data"></p>
                                    <p> Please see our <a href="/content/travel-info/at-the-airport/airport-boarding-times"><strong>check-in and boarding cut-off times</strong></a> for more information.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="additionalnotes-data"></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 add-divider" id="services-row">
                                    <h4> Service</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className="wifi-data service"></p>
                                            <p className="tsa-data service"></p>
                                            <p className="cargoservice-data service"></p>
                                            <p className="alaskalounge-data service"></p>
                                            <p className="partnerlounge-data service"></p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="kidsarea-data service"></p>
                                            <p className="familyrestroom-data service"></p>
                                            <p className="poweroutlets-data service"></p>
                                            <p className="clearservice-data service"></p>
                                        </div>
                                    </div>
                                    <div className="row" id="buttons-layer">
                                        <div className="col-sm-3"><a href="#" className="btn btn-ghost-blue form-control">Lounge Info </a></div>
                                        <div className="col-sm-3"><a href="#" className="btn btn-ghost-blue form-control">Cargo Info </a></div>
                                    </div>
                                </div>
                            <div className="row">
                                <div id="additional-info-layer" className="col-md-12 add-divider">
                                    <h4>Airport accessibility</h4>
                                    <p className="additional-info-layer"></p>
                                </div>
                            </div>
                            <div className="row">
                                <div id="kiosk-location-row" className="col-md-12 add-divider">
                                    <h4>Airport check-in kiosk locations</h4>
                                    <p className="kiosklocation-data"></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 add-divider">
                                    <h4>Check-in options</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <br/>
                                            <h5>Online check-in</h5>
                                            <p>Skip the check-in line and just head straight for your gate.
                                            <a className="btn-link btn-block" href="https://webselfservice.alaskaair.com/checkinweb/default.aspx?language=en_US" target="_self"><strong>Check in online</strong></a></p>
                                        </div>
                                        <div className="col-md-6">
                                            <br/>
                                            <h5>Mobile check-in</h5>
                                            <p>Check in from your phone or tablet between 1 to 24 hours before your flight.
                                            <a className="btn-link btn-block" href="https://m.alaskaair.com/checkin" target="_self"><strong>Check in from your mobile device</strong></a></p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <br/>
                                            <h5>Check in with our apps</h5>
                                            <p>Book your flights, check in, check your flight status and more with our apps for Android and iPhone.
                                            <a className="btn-link btn-block" href="//www.alaskaair.com/content/mobile/mobile-apps" target="_self"><strong>View our apps</strong></a></p>
                                        </div>
                                        <div className="col-md-6">
                                            <br/>
                                            <h5>Kiosk check-in</h5>
                                            <p>Check yourself in using our check-in kiosks, located at all of the airports throughout the Alaska Airlines system.</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <br/>
                                            <h5>Ticket counter check-in</h5>
                                            <p>If you are traveling with a paper ticket, or just need some extra help with the check-in process on the date of departure our customer service agents are always available to help get you going with an in-person check-in.  Please note that checked baggage is only accepted within 4 hours of your scheduled departure.</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
            </div>

        )

    }





export default AirportGuide;
