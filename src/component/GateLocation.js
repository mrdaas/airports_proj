import React from "react"
import renderHTML from 'react-render-html'
import { seattleGateLocations} from '../helper/Helper';


function GateLocation (props){

    return (
          <div>
            {
              props.airport.gatelocations !== '' ? (
                <div>
                  <h4>Gate Location</h4>
                  {
                    props.airport.airportcode === 'sea' ? (
                      <div className="add-divider">
                        {renderHTML(seattleGateLocations(props.airport.gatelocations))}
                      </div>
                    ) : (
                      <div className="add-divider">
                        <p className="gate-locations-data">{props.airport.gatelocations}</p>
                      </div>
                    )
                  }
                </div>
              ) : (
                <div></div>
              )

            }

          </div>
    )

}

export default GateLocation;
