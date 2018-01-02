/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {List, ListItem, Avatar, Subheader, IconMenu, MenuItem, IconButton} from 'material-ui';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {Link} from 'react-router-dom';

const institution = "https://images.emojiterra.com/mozilla/512px/1f393.png";


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

export const EducationDisplay = ({props}) => {
    return (
        <div>
            <List>
                <Subheader>Educación</Subheader>
                <ListItem
                    style={{backgroundColor:"white"}}
                    containerElement={<Link to={"/profile/education"}/>}
                    leftAvatar={<Avatar src={institution} />}
                    rightIconButton={rightIconMenu}
                    primaryText="Universidad Nacional Autónoma de México"
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>Doctorado en Tecnologías de la información</span><br />
                            Cursando Actualmente
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider inset={true} />
                <ListItem
                    style={{backgroundColor:"white"}}
                    leftAvatar={<Avatar src={institution}  />}
                    rightIconButton={rightIconMenu}
                    primaryText="The University of Texas Austin"
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>Lic. en ciencias de la computación</span><br />
                           2006 - 2010
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider inset={true} />
                <ListItem
                    style={{backgroundColor:"white"}}
                    leftAvatar={<Avatar src={institution}  />}
                    rightIconButton={rightIconMenu}
                    primaryText="Institu Politecnico Nacional"
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>Bachillerato</span><br />
                            2003 - 2006
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider inset={true} />
                <ListItem
                    style={{backgroundColor:"white"}}
                    leftAvatar={<Avatar src={institution}  />}
                    rightIconButton={rightIconMenu}
                    primaryText="Universidad Autónoma del Estado de Hidalgo"
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>Diplomado</span><br />
                            2003
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider inset={true} />
                <ListItem
                    style={{backgroundColor:"white"}}
                    leftAvatar={<Avatar src={institution}  />}
                    rightIconButton={rightIconMenu}
                    primaryText="Instituto Tecnológico Atónomo de México"
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>Secundaria</span><br />
                            1999 - 2002
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

