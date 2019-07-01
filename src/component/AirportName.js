import React,{Component} from "react"

function AirportName (props){
    return (
        <h1 className="airportname-data">{props.airport.airportname}</h1>
    )
}

export default AirportName;
