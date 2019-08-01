import React from "react"
import renderHTML from 'react-render-html'

function TicketCounterHours (props){
    return (
        <div className="add-divider">
            <h4>Ticket counter hours</h4>
            {renderHTML(props.airport.ticketcounterhours)}
        </div>
    )
}

export default TicketCounterHours;
