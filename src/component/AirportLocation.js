import React from "react"

function AirportLocation (props){

    return (
          <div>
              <h4>Airport Location</h4>
              <p className="address-data">{props.airport.streetaddress} <br /> {props.airport.city}, {props.airport.state} {props.airport.zip}</p>
              <p className="directions-data"></p>
              <p className="website-data"></p>
          </div>
    )

}

export default AirportLocation;
