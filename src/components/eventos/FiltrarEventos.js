import React from 'react';
import {List, ListItem, Subheader,Paper, Divider} from 'material-ui';
import DateIcon from 'material-ui/svg-icons/action/today';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import LawIcon from 'material-ui/svg-icons/action/book';
import BusinessIcon from 'material-ui/svg-icons/communication/business';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Tomorrow from 'material-ui/svg-icons/image/wb-sunny';
import DateRange from 'material-ui/svg-icons/action/date-range';
import Week from 'material-ui/svg-icons/content/weekend';
import {THIS_WEEK, TODAY, TOMORROW} from './EventosContainer';

const FiltrarEventos = ({filterEvents}) => {
    return (
        <div>
            <Paper zdepth={3} >
                <Subheader>Buscar eventos</Subheader>
                <List>
                    <ListItem
                        onClick={() => filterEvents(TODAY) }
                        primaryText="Hoy"
                        leftIcon={<DateIcon />} /*rightIcon={<ActionInfo />}*/
                    />
                    <ListItem
                        onClick={() => filterEvents(TOMORROW) }
                        primaryText="Mañana"
                        leftIcon={<Tomorrow />}
                    />
                    <ListItem
                        onClick={() => filterEvents(THIS_WEEK) }
                        primaryText="Esta semana"
                        leftIcon={<Week />}
                    />
                    <ListItem
                        primaryText="Rango de fecha"
                        leftIcon={<DateRange />}
                    />

                </List>
                <Divider inset={true}/>
                <Subheader>Categorias</Subheader>
                <List>
                    <ListItem primaryText="Negocios" leftIcon={<BusinessIcon />} />
                    <ListItem primaryText="Politica" leftIcon={<LawIcon />} />
                </List>
            </Paper>
        </div>
    );
};

export default FiltrarEventos;