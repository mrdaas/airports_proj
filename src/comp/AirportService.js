import React from "react"

function AirportService (props){

        return (

            <div className="row">
                <div className="col-md-12 add-divider" id="services-row">
                    <h4> Service</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <p className="wifi-data service"></p>
                            <p className="tsa-data service"></p>
                            <p className="cargoservice-data service"></p>
                            <p className="alaskalounge-data service"></p>
                            <p className="partnerlounge-data service"></p>
                        </div>
                        <div className="col-md-6">
                            <p className="kidsarea-data service"></p>
                            <p className="familyrestroom-data service"></p>
                            <p className="poweroutlets-data service"></p>
                            <p className="clearservice-data service"></p>
                        </div>
                    </div>
                    <div className="row" id="buttons-layer">
                        <div className="col-sm-3"><a href="#" className="btn btn-ghost-blue form-control">Lounge Info </a></div>
                        <div className="col-sm-3"><a href="#" className="btn btn-ghost-blue form-control">Cargo Info </a></div>
                    </div>
                </div>
            </div>

        )

    }





export default AirportService;
