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

                <div className="row container rendered-data">
                    {/* NAME */}
                    <div className="row" style={{marginBottom:15}}>
                      <div className="col-md-12">
                        <AirportName airport={props.myairport}/>
                      </div>
                    </div>

                    {/* ALERT */}
                    <div className="row">
                      <div className="col-md-12 margin-bottom">
                        <AirportAlert airport={props.myairport}/>
                      </div>
                    </div>

                    {/* AIRPORT AND GATE LOCATION */}
                    <div className="row">
                      <div className="col-md-6 margin-bottom">
                          <AirportLocation airport={props.myairport} />
                      </div>
                      <div className="col-md-6 margin-bottom">
                          <GateLocation airport={props.myairport} />
                      </div>
                    </div>

                    {/* TICKET COUNTER HOURS AND WHEN TO ARRIVE */}
                    <div className="row">
                      <div className="col-md-6 margin-bottom">
                          <TicketCounterHours airport={props.myairport} />
                      </div>
                      <div className="col-md-6 margin-bottom">
                          <WhenToArrive airport={props.myairport} />
                      </div>
                    </div>

                    {/* SERVICES */}
                    <div className="row">
                      <div className="col-md-12 margin-bottom">
                        <Services airport={props.myairport}/>
                      </div>
                    </div>

                    {/* ACCESSIBILITY */}
                    <div className="row">
                      <div className="col-md-12 margin-bottom">
                        <Accessibility airport={props.myairport}/>
                      </div>
                    </div>

                    {/* CHECK IN KIOSKS */}
                    <div className="row">
                      <div className="col-md-12 margin-bottom">
                        <CheckInKiosks airport={props.myairport} />
                      </div>
                    </div>

                    {/* ADDITIONAL NOTES */}
                    <div className="row">
                      <div className="col-md-12 margin-bottom">
                        <AdditionalNotes airport={props.myairport} />
                      </div>
                    </div>

                    {/* CHECK IN OPTIONS */}
                    <div className="row">
                      <div className="col-md-12 margin-bottom">
                        <CheckInOptions airport={props.myairport} />
                      </div>
                    </div>

                </div>

        )

    }


export default AirportGuide;
