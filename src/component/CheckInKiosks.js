import React from "react"

function CheckInKiosks (props){

    return (
      <div id="kiosk-location-row" className="col-md-12 add-divider">
          <h4>Airport check-in kiosk locations</h4>
          <p className="kiosklocation-data">{props.airport.airportkiosklocation}</p>
      </div>
    )

}

export default CheckInKiosks;
