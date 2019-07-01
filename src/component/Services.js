import React from "react"

function Services (props){

        return (

            <div className="col-md-12">
                    <h4> Service</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <p className="wifi-data service">{props.airport.haswifi} Free wifi at the airport</p>
                            <p className="tsa-data service">{props.airport.hastsaprecheck} TSA Pre✓™</p>
                            <p className="cargoservice-data service">{props.airport.hascargo} Cargo services</p>
                            <p className="alaskalounge-data service">{props.airport.alaskalounge} Alaska lounge</p>
                            <p className="partnerlounge-data service">{props.airport.partnerlounge} Partner airline lounge</p>
                        </div>
                        <div className="col-md-6">
                            <p className="kidsarea-data service">{props.airport.haskidsarea} Kids area</p>
                            <p className="familyrestroom-data service">{props.airport.hasfamilybathroom} Family restroom</p>
                            <p className="poweroutlets-data service">{props.airport.hasgatepower} Power outlets at the gate</p>
                            <p className="clearservice-data service">{props.airport.hasclear} CLEAR service</p>
                        </div>
                    </div>
                    <div className="row" id="buttons-layer">
                        <div className="col-sm-3"><a href="#" className="btn btn-ghost-blue form-control">Lounge Info </a></div>
                        <div className="col-sm-3"><a href="#" className="btn btn-ghost-blue form-control">Cargo Info </a></div>
                    </div>

            </div>

        )

    }





export default Services;
