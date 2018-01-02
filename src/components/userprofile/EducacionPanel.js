import React from 'react';
import {Avatar, Paper, Subheader, List, ListItem, Divider, IconButton} from 'material-ui';
import { darkBlack} from 'material-ui/styles/colors';
import ActionInfo from 'material-ui/svg-icons/action/info';
import AddIcon from 'material-ui/svg-icons/content/add';

const EducacionPanel = ({titulos}) => {
    let listaTitulos = [];
    if(titulos){
        if (titulos.length > 0){
            listaTitulos = titulos.map( (titulo,key) => {
                return (
                    <div key={key}>
                        <ListItem
                            leftAvatar={<Avatar src="https://www.uaeh.edu.mx/excelencia/imagenes/uaeh.png" />}
                            primaryText={
                                <p>{titulo.universidad}&nbsp;&nbsp;</p>
                            }
                            secondaryText={
                                <p>
                                    <span style={{color: darkBlack}}>{titulo.titulo}</span>
                                    { } {titulo.fechaInicio.toString()} - {titulo.fechaFinal.toString()}
                                </p>
                            } rightIcon={<ActionInfo />}/>
                        <Divider inset={true}/>
                    </div>
                )
            });
        }else {
            listaTitulos = (<ListItem primaryText='Agregue un titulo nuevo'/>)
        }

    }
    return (
        <Paper zdepth={2} className="extra-info-paper">
            <Subheader>Educación</Subheader>
            <IconButton style={{position:'absolute'}} className="add-new-experience" tooltip="Agregar" >
                <AddIcon />
            </IconButton>
            <List className="scroll-overflow">
                {listaTitulos}
            </List>
        </Paper>
    );
};

export default EducacionPanel;