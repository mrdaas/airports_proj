import React from "react"
import renderHTML from "react-render-html"

function CheckInKiosks (props){

    return (
      <div className="add-divider">
          <h4>Airport check-in kiosk locations</h4>
          <p className="kiosklocation-data">{renderHTML(props.airport.airportkiosklocation)}</p>
      </div>
    )

}

export default CheckInKiosks;
