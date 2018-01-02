/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {List, ListItem, Avatar, Subheader, IconMenu, MenuItem, IconButton} from 'material-ui';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {Link} from 'react-router-dom';

const institution = "http://www.pvhc.net/img201/xylshbjpezjrwafrnnim.png";


const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="Más"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400} />
    </IconButton>
);

const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Editar</MenuItem>
        <MenuItem>Eliminar</MenuItem>
    </IconMenu>
);

export const ExperticeDisplay = ({props}) => {
    return (
        <div>
            <List>
                <Subheader>Experiencia</Subheader>
                <ListItem
                    style={{backgroundColor:"white"}}
                    containerElement={<Link to={"/profile/expertice"}/>}
                    leftAvatar={<Avatar src={institution} />}
                    rightIconButton={rightIconMenu}
                    primaryText="Student Resercher"
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>Universidad Nacional Autónoma de México</span><br />
                            Actividad Actual
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider inset={true} />
                <ListItem
                    style={{backgroundColor:"white"}}
                    leftAvatar={<Avatar src={institution}  />}
                    rightIconButton={rightIconMenu}
                    primaryText="Marketing Director"
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>Microsoft</span><br />
                            2013 - 2015
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider inset={true} />
                <ListItem
                    style={{backgroundColor:"white"}}
                    leftAvatar={<Avatar src={institution}  />}
                    rightIconButton={rightIconMenu}
                    primaryText="MX Comissioner"
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>MLH</span><br />
                            2012 - 2013
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider inset={true} />
                <ListItem
                    style={{backgroundColor:"white"}}
                    leftAvatar={<Avatar src={institution}  />}
                    rightIconButton={rightIconMenu}
                    primaryText="Despachador"
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>OXXO</span><br />
                            2011 - 2012
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider inset={true} />
                <ListItem
                    style={{backgroundColor:"white"}}
                    leftAvatar={<Avatar src={institution}  />}
                    rightIconButton={rightIconMenu}
                    primaryText="Asistente Técnico"
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>GAM</span><br />
                            2010 - 2011
                        </p>
                    }
                    secondaryTextLines={2}
                />
            </List>
        </div>
    );
};

//EducationDisplay.propTypes = {};

const styles = {
    name: {}
};

