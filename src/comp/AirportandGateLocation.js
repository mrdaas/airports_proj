import React from "react"

function AirportandGateLocation (props){

        return (
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
        )

    }

export default AirportandGateLocation;
