import React from "react"

function AirportGeneralAdvisories (props){
    return (
        <div className="add-divider">
            <h4>Airport General Advisories</h4>
            <p className="additionalnotes-data">{props.airport.custom2}</p>
        </div>
    )
}

export default AirportGeneralAdvisories;
