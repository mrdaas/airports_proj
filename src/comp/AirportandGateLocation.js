import React from "react"

function AirportandGateLocation (props){

        return (
            <div className="row">
                <div className="col-md-6 add-divider">
                    <h4>Airport Location</h4>
                    <p className="address-data">
                    
                    {airport.streetaddress}
                    <br/>
                    
                    {airport.addresscity},{airport.statecode} {airport.zip}
                    </p>
                    <p className="directions-data">
                    <a href={"http://www.google.com/maps/" + airport.latitude + "," + airport.longitude} target="_blank"><strong>Get directions&nbsp;<span className="sr-only">"This indicates a link to an external site that may not meet accessibility guidelines."</span><span title="This indicates a link to an external site that may not meet accessibility guidelines."><sup><i className="stepout-icon blue"></i></sup></span></strong></a>

                    </p>
                    <p className="website-data"><a href={airport.custom1} target="_blank"> View Web information</a></p> 
                </div>

                <div className="col-md-6 add-divider" id="gate-locations">
                    <h4>Gate Locations</h4>
                    <p className="gate-locations-data">{airport.gatelocations}</p>
                </div>
            </div>         
        )

    }

export default AirportandGateLocation;
