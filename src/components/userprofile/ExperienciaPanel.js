import React from 'react';
import {Avatar, Paper, Subheader, List, ListItem, Divider, IconButton} from 'material-ui';
import { darkBlack} from 'material-ui/styles/colors';
import ActionInfo from 'material-ui/svg-icons/action/info';
import AddIcon from 'material-ui/svg-icons/content/add';

const ExperienciaPanel = ({experiencias, showAddExperiencia}) => {
    let listaExperiencias = [];
    if(experiencias){
        if (experiencias.length > 0){
            listaExperiencias = experiencias.map( (experiencia,key) => {
                return (
                    <div key={key}>
                        <ListItem
                            leftAvatar={<Avatar src="https://www.fixter.camp/static/assets/images/LOGIS-01.png" />}
                            primaryText={
                                <p>{experiencia.cargo}&nbsp;&nbsp;</p>
                            }
                            secondaryText={
                                <p>
                                    <span style={{color: darkBlack}}>{experiencia.empresa}</span>
                                    { } {experiencia.fechaInicio.toString()} - {experiencia.fechaFinal.toString()} en {experiencia.ubicacion}
                                </p>
                            } rightIcon={<ActionInfo />}/>
                        <Divider inset={true}/>
                    </div>
                )
            });
        }else {
            listaExperiencias = (<ListItem primaryText='Agregue una experiencia nueva'/>)
        }

    }
    return (
        <Paper zdepth={2} className="extra-info-paper">
            <Subheader>Experiencia</Subheader>
            <IconButton onClick={showAddExperiencia} style={{position:'absolute'}} className="add-new-experience" tooltip="Agregar" >
                <AddIcon />
            </IconButton>
            <List className="scroll-overflow">
                {listaExperiencias}
            </List>

        </Paper>
    );
};

export default ExperienciaPanel;