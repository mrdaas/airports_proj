import React from "react"
import renderHTML from "react-render-html"

function Accessibility (props){

        return (
            <div className="add-divider">
                <h4>Airport accessibility</h4>
                <p className="additionalinfo-data">{renderHTML(props.airport.additionalinfo)}</p>
            </div>
        )
    }

export default Accessibility;
