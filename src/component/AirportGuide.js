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
                    <div className="row">
                      <AirportName airport={props.myairport}/>
                    </div>
                    <div className="row">
                      <AirportAlert airport={props.myairport}/>
                    </div>

                    <div className="row">
                      <div className="col-md-6 add-divider">
                          <AirportLocation airport={props.myairport} />
                      </div>
                      <div className="col-md-6 add-divider">
                          <GateLocation airport={props.myairport} />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 add-divider">
                          <TicketCounterHours airport={props.myairport} />
                      </div>
                      <div className="col-md-6 add-divider">
                          <WhenToArrive airport={props.myairport} />
                      </div>
                    </div>


                    <div className="row">
                      <Services airport={props.myairport}/>
                    </div>


                    <div className="row">
                      <Accessibility airport={props.myairport}/>
                    </div>

                    <div className="row">
                      <CheckInKiosks airport={props.myairport} />
                    </div>


                    <div className="row">
                      <AdditionalNotes airport={props.myairport} />
                    </div>


                    <div className="row">
                      <CheckInOptions airport={props.myairport} />
                    </div>

                </div>

        )

    }


export default AirportGuide;
