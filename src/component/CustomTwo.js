import React from "react"
import renderHTML from 'react-render-html'

function CustomTwo (props){


    return (
      <div className="">
        {
          props.airport.alerts !== '' ? (
            <div className="col-md-12" id="custom2-div">
                {renderHTML(props.airport.custom2)}
            </div>
          ) : (
            <div></div>
          )
        }


      </div>
    )

}

export default CustomTwo;
