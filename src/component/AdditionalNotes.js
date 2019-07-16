import React from "react"
import renderHTML from "react-render-html"

function AdditionalNotes (props){
    return (
        <div className="">
            <p className="additionalnotes-data">{renderHTML(props.airport.additionalnotes)}</p>
        </div>
    )
}

export default AdditionalNotes;
