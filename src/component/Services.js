import React from "react"
import { replaceSpaceWithDashes} from '../helper/Helper';


function Services (props){

        return (

            <div className="add-divider">
                    <h4> Service</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <p className="wifi-data service">
                            {props.airport.haswifi === 'yes' ? (
                              <img src="https://resource.alaskaair.net/-/media/7ABAC0E1BDC4434EADD06CC82F34EA47" alt="check mark" />
                            ) : (
                              <img src="https://resource.alaskaair.net/-/media/E757FB31A613442F922A0A0185FAAF37" alt="not allowed mark" />
                            )} Free wifi at the airport</p>
                            <p className="tsa-data service">
                            {props.airport.hastsaprecheck === 'yes' ? (
                              <img src="https://resource.alaskaair.net/-/media/7ABAC0E1BDC4434EADD06CC82F34EA47" alt="check mark" />
                            ) : (
                              <img src="https://resource.alaskaair.net/-/media/E757FB31A613442F922A0A0185FAAF37" alt="not allowed mark" />
                            )} TSA Pre✓™</p>
                            <p className="cargoservice-data service">
                            {props.airport.hascargo === 'yes' ? (
                              <img src="https://resource.alaskaair.net/-/media/7ABAC0E1BDC4434EADD06CC82F34EA47" alt="check mark" />
                            ) : (
                              <img src="https://resource.alaskaair.net/-/media/E757FB31A613442F922A0A0185FAAF37" alt="not allowed mark" />
                            )} Cargo services</p>
                            <p className="alaskalounge-data service">
                            {props.airport.alaskalounge === 'yes' ? (
                              <img src="https://resource.alaskaair.net/-/media/7ABAC0E1BDC4434EADD06CC82F34EA47" alt="check mark" />
                            ) : (
                              <img src="https://resource.alaskaair.net/-/media/E757FB31A613442F922A0A0185FAAF37" alt="not allowed mark" />
                            )} Alaska lounge</p>
                            <p className="partnerlounge-data service">
                            {props.airport.partnerlounge === 'yes' ? (
                              <img src="https://resource.alaskaair.net/-/media/7ABAC0E1BDC4434EADD06CC82F34EA47" alt="check mark" />
                            ) : (
                              <img src="https://resource.alaskaair.net/-/media/E757FB31A613442F922A0A0185FAAF37" alt="not allowed mark" />
                            )} Partner airline lounge</p>
                        </div>
                        <div className="col-md-6">
                            <p className="kidsarea-data service">
                            {props.airport.haskidsarea === 'yes' ? (
                              <img src="https://resource.alaskaair.net/-/media/7ABAC0E1BDC4434EADD06CC82F34EA47" alt="check mark" />
                            ) : (
                              <img src="https://resource.alaskaair.net/-/media/E757FB31A613442F922A0A0185FAAF37" alt="not allowed mark" />
                            )} Kids area</p>
                            <p className="familyrestroom-data service">
                            {props.airport.hasfamilybathroom === 'yes' ? (
                              <img src="https://resource.alaskaair.net/-/media/7ABAC0E1BDC4434EADD06CC82F34EA47" alt="check mark" />
                            ) : (
                              <img src="https://resource.alaskaair.net/-/media/E757FB31A613442F922A0A0185FAAF37" alt="not allowed mark" />
                            )} Family restroom</p>
                            <p className="poweroutlets-data service">
                            {props.airport.hasgatepower === 'yes' ? (
                              <img src="https://resource.alaskaair.net/-/media/7ABAC0E1BDC4434EADD06CC82F34EA47" alt="check mark" />
                            ) : (
                              <img src="https://resource.alaskaair.net/-/media/E757FB31A613442F922A0A0185FAAF37" alt="not allowed mark" />
                            )} Power outlets at the gate</p>
                            <p className="clearservice-data service">
                            {props.airport.hasclear === 'yes' ? (
                              <img src="https://resource.alaskaair.net/-/media/7ABAC0E1BDC4434EADD06CC82F34EA47" alt="check mark" />
                            ) : (
                              <img src="https://resource.alaskaair.net/-/media/E757FB31A613442F922A0A0185FAAF37" alt="not allowed mark" />
                            )} CLEAR service</p>
                        </div>
                    </div>
                    <div className="row" id="buttons-layer">
                        {props.airport.alaskalounge === 'yes' || props.airport.partnerlounge === 'yes' ? (
                          <div className="col-sm-3"><a href="/content/airport-lounge/location-and-hours" className="btn btn-ghost-blue form-control">Lounge Info </a></div>
                        ) : (
                          <div></div>
                        )}


                        {props.airport.hascargo === 'yes' ? (
                          <div className="col-sm-3"><a href={`/content/cargo/city-information/${replaceSpaceWithDashes(props.airport.city)}`} className="btn btn-ghost-blue form-control">Cargo Info </a></div>
                        ) : (
                          <div></div>
                        )}


                    </div>

            </div>

        )

    }





export default Services;
