import React from 'react';
import {List, ListItem, Divider, Subheader, Avatar, FloatingActionButton, RaisedButton, Dialog, TextField} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Link} from 'react-router-dom';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Work from 'material-ui/svg-icons/action/group-work';
import Org from 'material-ui/svg-icons/action/work';
import Calendar from 'material-ui/svg-icons/action/today';
import './newsfeed.css';



const MenuGroups = ({groups, addGroup, modal, handleClose, handleOpen, handleNewGroup}) => {
    return (
        <div className="lista-grupos">
            <Dialog
                title="Agrega un nuevo Grupo"
                modal={false}
                open={modal}
                onRequestClose={handleClose}>
                <TextField
                name="name"
                    onChange={handleNewGroup}
                fullWidth={true}/>
                <RaisedButton
                fullWidth={true}
                    onClick={addGroup}>guardar</RaisedButton>
            </Dialog>
            <FloatingActionButton mini={true} className="button-add-group">
                <ContentAdd onClick={handleOpen}/>
            </FloatingActionButton>
            <Subheader>Explora</Subheader>
            <List>
                <Link className="newsfeed-link" to="/eventos">
                    <ListItem secondaryText="Eventos" leftIcon={<Calendar/>}/>
                </Link>
                <Link className="newsfeed-link" to="/organizations">
                    <ListItem secondaryText="Organizaciones" leftIcon={<Org/>}/>
                </Link>
                <Link className="newsfeed-link" to="/chat">
                    <ListItem secondaryText="Conversaciones" leftIcon={<ContentSend />}/>
                </Link>

                <ListItem secondaryText="Grupos" leftIcon={<Work />}/>
                <ListItem secondaryText="Amigos" leftIcon={<ContentDrafts />}/>
            </List>
            <Divider/>
            <Subheader>Grupos</Subheader>
            <List className="groups-list2">
                {groups.map((group, key)=>{
                    return(
                    <Link className="newsfeed-link" to={"/groups/"+group.id} key={key}>
                        <ListItem

                            primaryText={group.name}
                            leftAvatar={<Avatar icon={<Work />}/>}/>
                    </Link>
                    )
                })}

            </List>


        </div>
    )
};

export default MenuGroups;