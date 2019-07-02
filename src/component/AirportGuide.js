import React from "react"
import AirportName from "./AirportName"
import AirportAlert from "./AirportAlert"
import AirportLocation from "./AirportLocation"
import GateLocation from "./GateLocation"
import TicketCounterHours from "./TicketCounterHours"
import WhenToArrive from "./WhenToArrive"
import AdditionalNotes from "./AdditionalNotes"
import Services from "./Services"
import Accessibility from "./Accessibility"


import CheckInKiosks from "./CheckInKiosks"
import CheckInOptions from "./CheckInOptions"


function AirportGuide (props){
  console.log(props.myairport)

        return (

                <div className="container">
                    {/* NAME */}
                    <div className="row" style={{marginBottom:15,borderBottom:'1px solid #ccc'}}>
                      <div className="col-md-12">
                        <AirportName airport={props.myairport}/>
                      </div>
                    </div>

                    {/* ALERT */}
                    <div className="row">
                      <div className="col-md-12">
                        <AirportAlert airport={props.myairport}/>
                      </div>
                    </div>

                    {/* AIRPORT AND GATE LOCATION */}
                    <div className="row">
                      <div className="col-md-6">
                          <AirportLocation airport={props.myairport} />
                      </div>
                      <div className="col-md-6">
                          <GateLocation airport={props.myairport} />
                      </div>
                    </div>

                    {/* TICKET COUNTER HOURS AND WHEN TO ARRIVE */}
                    <div className="row">
                      <div className="col-md-6">
                          <TicketCounterHours airport={props.myairport} />
                      </div>
                      <div className="col-md-6">
                          <WhenToArrive airport={props.myairport} />
                      </div>
                    </div>

                    {/* SERVICES */}
                    <div className="row">
                      <div className="col-md-12">
                        <Services airport={props.myairport}/>
                      </div>
                    </div>

                    {/* ACCESSIBILITY */}
                    <div className="row">
                      <div className="col-md-12">
                        <Accessibility airport={props.myairport}/>
                      </div>
                    </div>

                    {/* CHECK IN KIOSKS */}
                    <div className="row">
                      <div className="col-md-12">
                        <CheckInKiosks airport={props.myairport} />
                      </div>
                    </div>

                    {/* ADDITIONAL NOTES */}
                    <div className="row">
                      <div className="col-md-12">
                        <AdditionalNotes airport={props.myairport} />
                      </div>
                    </div>

                    {/* CHECK IN OPTIONS */}
                    <div className="row">
                      <div className="col-md-12">
                        <CheckInOptions airport={props.myairport} />
                      </div>
                    </div>

                </div>

        )

    }


export default AirportGuide;
