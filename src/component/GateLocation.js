import React from "react"

function GateLocation (props){

    return (
          <div>
              <h4>Gate Location</h4>
              <p className="gate-locations-data">{props.airport.gatelocations}</p>
          </div>
    )

}

export default GateLocation;
