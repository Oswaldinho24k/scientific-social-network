import React, {Component} from 'react';
import {GridTile, GridList,  Paper, Dialog, Subheader, List, ListItem, FlatButton } from 'material-ui';
import './userprofile.css';
//import Person from 'material-ui/svg-icons/social/person';
import PostCard from "../newsfeed/PostCard";
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {fakeProfile} from './fakeProfile';
import PerfilSummary from "./PerfilSummary";
import ExperienciaPanel from "./ExperienciaPanel";
import AddNewExperienciaForm from "./AddNewExperienciaForm";
import EditSummary from "./EditSummary";
import EducacionPanel from "./EducacionPanel";

class UserProfilePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            addExperienciaShowed : false,
            editSummaryShowed: false,
            profile: fakeProfile,
            nuevaExperiencia: {cargo: '', empresa: '', fechaInicio: {}, fechaFinal:{}, ubicacion:'', descripcion: '', publico: true},
            nuevoResumen: {nombre: fakeProfile.nombre, cargoActual: fakeProfile.cargoActual, titulo:fakeProfile.titulo, breveDescripcion:fakeProfile.breveDescripcion }
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////

    showEditSummary = () => {
        const{profile,nuevoResumen} = this.state;
         nuevoResumen.nombre= profile.nombre ;
         nuevoResumen.cargoActual= profile.cargoActual ;
         nuevoResumen.titulo= profile.titulo ;
         nuevoResumen.breveDescripcion= profile.breveDescripcion ;
        this.setState({editSummaryShowed: true, nuevoResumen});
    };

    closeEditSummary = () => {
        this.setState({editSummaryShowed: false});
    };

    handleEditSummaryChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let {nuevoResumen} = this.state;
        nuevoResumen[name] = value;
        this.setState({nuevoResumen});
    };

    editSummary = () => {
        const{profile,nuevoResumen} = this.state;
        profile.nombre = nuevoResumen.nombre;
        profile.cargoActual = nuevoResumen.cargoActual;
        profile.titulo = nuevoResumen.titulo;
        profile.breveDescripcion = nuevoResumen.breveDescripcion;
        this.setState({profile});
        this.closeEditSummary();
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////

    showAddExperiencia = () => {
        this.setState({addExperienciaShowed: true});
    };

    closeAddExperiencia = () => {
        this.setState({addExperienciaShowed: false});
    };

    handleAddExperienciaChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let {nuevaExperiencia} = this.state;
        nuevaExperiencia[name] = value;
        this.setState({nuevaExperiencia});
    };

    handleFechaInicioChange = (event, date) => {

        let {nuevaExperiencia} = this.state;
        nuevaExperiencia['fechaInicio'] = date;
        this.setState({nuevaExperiencia});
    };

    handleFechaFinalChange = (event, date) => {
        let {nuevaExperiencia} = this.state;
        nuevaExperiencia['fechaFinal'] = date;
        this.setState({nuevaExperiencia});
    };
    addExperiencia = () => {
        let {profile} = this.state;
        profile.experiencias.push(this.state.nuevaExperiencia);
        const nuevaExperiencia =  {cargo: '', empresa: '', fechaInicio: {}, fechaFinal:{}, ubicacion:'', descripcion: '', publico: true};
        this.setState({profile, nuevaExperiencia});
        this.closeAddExperiencia();
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////77
    render() {
        const {addExperienciaShowed, profile, nuevaExperiencia, nuevoResumen, editSummaryShowed} = this.state;
        const {experiencias,titulos} = profile;

        const actionsAddExperiencia  = [
            <FlatButton
                label="Cancelar"
                primary={true}
                onClick={this.closeAddExperiencia}
            />,
            <FlatButton
                label="Agregar"
                primary={true}
                keyboardFocused={true}
                onClick={this.addExperiencia}
            />,
        ];

        const actionsEditSummary  = [
            <FlatButton
                label="Cancelar"
                primary={true}
                onClick={this.closeEditSummary}
            />,
            <FlatButton
                label="Agregar"
                primary={true}
                keyboardFocused={true}
                onClick={this.editSummary}
            />,
        ];
        return (
            <div className="userprofile">

                <GridList cellHeight={'auto'} cols={3}>

                    <GridTile cols={2} className="left-side">
                        <PerfilSummary showEditSummary={this.showEditSummary} user={fakeProfile}/>
                        <ExperienciaPanel showAddExperiencia={this.showAddExperiencia} experiencias={experiencias}/>
                        <EducacionPanel titulos={titulos}/>
                        <Dialog
                            open={addExperienciaShowed}
                            onRequestClose={this.closeAddExperiencia}
                            modal={false}
                            actions={actionsAddExperiencia}
                        >
                            <AddNewExperienciaForm
                                experiencia={nuevaExperiencia}
                                onChange={this.handleAddExperienciaChange}
                                onFechaInicioChange={this.handleFechaInicioChange}
                                onFechaFinalChange={this.handleFechaFinalChange}
                            />
                        </Dialog>
                        <Dialog
                            open={editSummaryShowed}
                            onRequestClose={this.closeEditSummary}
                            modal={false}
                            actions={actionsEditSummary}
                        >
                            <EditSummary
                                profile={nuevoResumen}
                                onChange={this.handleEditSummaryChange}
                            />
                        </Dialog>
                        <Paper zdepth={2} className="extra-info-paper">
                            <Subheader>Explora</Subheader>
                            <List className="scroll-overflow">
                                <ListItem primaryText="Conversaciones" leftIcon={<ContentInbox />} rightIcon={<ActionInfo />}/>
                                <ListItem primaryText="Grupos" leftIcon={<ActionGrade />} rightIcon={<ActionInfo />}/>
                                <ListItem primaryText="Amigos" leftIcon={<ContentSend />} rightIcon={<ActionInfo />}/>
                                <ListItem primaryText="Posts" leftIcon={<ContentDrafts />} rightIcon={<ActionInfo />}/>

                            </List>
                        </Paper>
                    </GridTile>
                    <GridTile cols={1} className="right-side">
                        <div className="last-post">
                            <PostCard image={'https://static.pexels.com/photos/256381/pexels-photo-256381.jpeg'}/>
                            <PostCard image={'https://static.pexels.com/photos/256381/pexels-photo-256381.jpeg'}/>
                            <PostCard image={'https://static.pexels.com/photos/256381/pexels-photo-256381.jpeg'}/>
                        </div>

                    </GridTile>
                </GridList>
            </div>
        )
    }
}

export default UserProfilePage;