import React from "react"
import AirportName from "./AirportName"
import AirportAlert from "./AirportAlert"
import AirportandGateLocation from "./AirportandGateLocation"
import AirportTicketHours from "./AirportTicketHours"
import AirportAdditionalNotes from "./AirportAdditionalNotes"
import AirportService from "./AirportService"
import AirportAccessibility from "./AirportAccessibility"
import AirportCheckKioskLoc from "./AirportCheckKioskLoc"
import AirportCheckInOptions from "./AirportCheckInOptions"

function AirportGuide (props){

        return (

            <div>
                <div className="container">
                    <AirportName />
                    <AirportAlert />
                    <AirportandGateLocation />
                    <AirportTicketHours />
                    <AirportAdditionalNotes />
                    <AirportService />
                    <AirportAccessibility />
                    <AirportCheckKioskLoc />
                    <AirportCheckInOptions />
                </div>               
            </div>

           

        )

    }


export default AirportGuide;
