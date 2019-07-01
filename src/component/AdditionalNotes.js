import React from "react"

function AdditionalNotes (props){
    return (
        <div className="col-md-12">
            <p className="additionalnotes-data">{props.airport.additionalnotes}</p>
        </div>
    )
}

export default AdditionalNotes;
