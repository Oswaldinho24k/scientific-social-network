import React from 'react';
import FontAwesome from 'react-fontawesome';

import './Event.css'


export const Event = ({id, photoUrl, photo ,hora,  titulo, usuario, descript, lugar, fecha, history}) => {
    return(
            <div>
                <div className="fondo">
                    <div className="card">
                        <div className="thumbnail">
                            <img className="left" onClick={()=>history.push(`/eventos/${id}`)} src={photoUrl} alt=""/>
                        </div>
                        <div className="right">
                            <h1 className="event_name">{titulo}</h1>
                            <div className="author">
                                <img  src={photo} alt=""/>
                                <h2 className="data">{usuario}</h2>
                            </div>
                            <div className="separator"></div>
                                <p style={{overflowY:"scroll", maxHeight:"210px"}}>{descript}</p>
                        </div>
                        <br/>
                        <h5 className="fech">{fecha}</h5>
                        <h6 className="lugar">{lugar}</h6>
                        <ul>
                            <li><FontAwesome name="eye" size="2x"/></li>
                            <li><FontAwesome name="heart" size="2x"/></li>
                            <li><FontAwesome name="envelope" size="2x"/></li>
                            <li><FontAwesome name="share"size="2x"/></li>
                        </ul>

                        </div>
                    </div>
                </div>
    );
}



