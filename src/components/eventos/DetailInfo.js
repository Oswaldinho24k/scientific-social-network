import React from 'react';
import {Card, CardHeader, CardText, CardTitle, FlatButton} from 'material-ui';
import moment from 'moment';

const DetailInfo = ({event,isOwner,removeThisEvent}) => {
    const date = moment(event.date, 'x').format('DD MMMM YYYY');
    const time = moment(event.date, 'x').format('hh:mm a');
    return (
        <Card className="event-detail-left-section">
            {/*<CardHeader*/}
                {/*title='Información adicional'*/}
                {/*//avatar="https://static.pexels.com/photos/355956/pexels-photo-355956.jpeg"*/}
            {/*/>*/}
            <CardTitle title={event.name} subtitle={`by ${event.owner}`} />
            <CardText>
                <p>en {event.place}</p>
                <p>el {date}</p>
                <p>a las {time}</p>
                <br/>
                <p>{ event.isPrivate ? 'Evento privado' : 'Evento público'}</p>
                <br/>
                { isOwner &&
                    <FlatButton onClick={removeThisEvent} label={'Eliminar'} primary={true}/>
                }
            </CardText>

        </Card>
    );
};

export default DetailInfo;