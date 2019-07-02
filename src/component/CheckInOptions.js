import React from "react"

function CheckInOptions (props){
    return (

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

    )

  }

export default CheckInOptions;
