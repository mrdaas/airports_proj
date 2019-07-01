import React from "react"

function Accessibility (props){

        return (
            <div className="col-md-12">
                <h4>Airport accessibility</h4>
                <p className="additionalinfo-data">{props.airport.additionalinfo}</p>
            </div>
        )
    }

export default Accessibility;
