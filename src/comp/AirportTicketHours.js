import React from "react"

function AirportTicketHours (props){

        return (
            <div className="row row-margin-top" id="ticket-counter-row">
                <div className="col-md-6 add-divider">
                    <h4>Ticket counter hours</h4>
                    <p className="ticket-counter-data"></p>
                </div>

                <div className="col-md-6 add-divider">
                    <h4>When to arrive at the airport</h4>
                    <p className="withbags-data"></p>
                    <p className="withoutbags-data"></p>
                    <p> Please see our <a href="/content/travel-info/at-the-airport/airport-boarding-times"><strong>check-in and boarding cut-off times</strong></a> for more information.</p>
                </div>
            </div>
        )
    }

export default AirportTicketHours;
