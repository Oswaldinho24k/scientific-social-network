import React from 'react';
import {Event} from "../../organisms/Event";
import EventCard from './EventCard';
import {GridList, GridTile} from 'material-ui';
import moment from 'moment';
import 'moment/locale/es';

const EventsList = ({events, history}) => {
    let listaEventos = events.map( (event,key) => {
        moment.locale('es');
        let fecha = moment(event.date, 'x').format('DD MMMM YYYY');
        let hora = moment(event.date, 'x').format('hh:mm a');
        return (
            <GridTile key={key} cols={2}>
                <Event
                    id={event.id}
                    titulo={event.name}
                    usuario={event.profile.displayName}
                    photo={event.profile.photoURL}
                    fecha={fecha}
                    descript={event.description}
                    hora={hora}
                    lugar={event.place}
                    photoUrl={event.image}
                    history={history}

                />
            </GridTile>
        );
    });
    return (
        <div className="lista-productos">

            <GridList cellHeight={'auto'} cols={2} className="grid-list">
                {listaEventos}
            </GridList>

        </div>
    )
};

export default EventsList;