import React from "react"
import { convertMinutesToHours, makeTitleCase} from '../helper/Helper';

function WhenToArrive (props){
    return (
            <div className="add-divider">
                <h4>When to arrive at the airport</h4>
                { props.airport.arrivebags === 60 ? (
                    <p className="withbags-data"><strong>With bags</strong><br />{convertMinutesToHours(props.airport.arrivebags)} hour prior to scheduled departure.</p>
                ) : (
                    <p className="withbags-data"><strong>With bags</strong><br />{convertMinutesToHours(props.airport.arrivebags)} hours prior to scheduled departure.</p>
                )
                }

                { props.airport.arrivenobags === 60 ? (
                    <p className="withoutbags-data"><strong>Without bags</strong><br />{convertMinutesToHours(props.airport.arrivenobags)} hour prior to scheduled departure.</p>
                ) : (
                    <p className="withoutbags-data"><strong>Without bags</strong><br />{convertMinutesToHours(props.airport.arrivenobags)} hours prior to scheduled departure.</p>
                )
                }
                <p> Please see our <a href="/content/travel-info/at-the-airport/airport-boarding-times"><strong>check-in and boarding cut-off times</strong></a> for more information.</p>
            </div>
    )
}

export default WhenToArrive;
