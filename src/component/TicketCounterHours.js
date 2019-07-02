import React from "react"
import renderHTML from 'react-render-html'

function TicketCounterHours (props){
    return (
        <div>
            <h4>Ticket counter hours</h4>
            <p className="ticket-counter-data">{renderHTML(props.airport.ticketcounterhours)}</p>
        </div>
    )
}

export default TicketCounterHours;
