import React from "react"
import { makeTitleCase, makeAllCaps} from '../helper/Helper';

function AirportName (props){
    return (
      <div>
        <h1 className="airportname-data">{`${makeTitleCase(props.airport.city)} (${makeAllCaps(props.airport.airportcode)}) - ${makeTitleCase(props.airport.airportname)}`}</h1>
      </div>
    )
}

export default AirportName;
