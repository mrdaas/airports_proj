import React from "react"

function WhenToArrive (props){
    return (
            <div>
                <h4>When to arrive at the airport</h4>
                <p className="withbags-data"><strong>With bags</strong><br /> hours prior to scheduled departure.</p>
                <p className="withoutbags-data"><strong>Without bags</strong><br /> hours prior to scheduled departure.</p>
                <p> Please see our <a href="/content/travel-info/at-the-airport/airport-boarding-times"><strong>check-in and boarding cut-off times</strong></a> for more information.</p>
            </div>
    )
}

export default WhenToArrive;
