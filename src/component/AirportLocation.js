import React from "react"
import { convertMinutesToHours, makeTitleCase, makeAllCaps} from '../helper/Helper';

function AirportLocation (props){

    return (
          <div className="add-divider">
              <h4>Airport Location</h4>
              <p className="address-data">{makeTitleCase(props.airport.streetaddress)} <br /> {makeTitleCase(props.airport.city)}, {makeAllCaps(props.airport.statecode)} {props.airport.zip}</p>
              <p className="directions-data"><a href={"http://www.google.com/maps/place/"+props.airport.latitude+","+props.airport.longitude} target="_blank"><strong>Get directions&nbsp;<span class="sr-only">"This indicates a link to an external site that may not meet accessibility guidelines."</span><span title="This indicates a link to an external site that may not meet accessibility guidelines."><sup><i class="stepout-icon blue"></i></sup></span></strong></a></p>
              <p className="website-data"><a href={props.airport.custom1} target="_blank"><strong>Website&nbsp;<span class="sr-only">"This indicates a link to an external site that may not meet accessibility guidelines."</span><span title="This indicates a link to an external site that may not meet accessibility guidelines."><sup><i class="stepout-icon blue"></i></sup></span></strong></a></p>
          </div>
    )

}

export default AirportLocation;
