import React from "react"
import renderHTML from 'react-render-html'

function AirportAlert (props){


    return (
      <div className="">
        {
          props.airport.alerts !== '' ? (
            <div className="col-md-12 alert alert-warning" id="alert-div">
                {renderHTML(props.airport.alerts)}
            </div>
          ) : (
            <div></div>
          )
        }


      </div>
    )

}

export default AirportAlert;
