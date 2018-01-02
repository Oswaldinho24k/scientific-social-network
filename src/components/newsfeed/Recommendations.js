import React from 'react';
import {List, ListItem, Divider, Subheader} from 'material-ui';
import Add from 'material-ui/svg-icons/content/add-circle';
import Work from 'material-ui/svg-icons/action/work';
import {Link} from 'react-router-dom';
import {MiAvatar} from '../../organisms/index';
import './newsfeed.css';

const defaultImg = "https://fthmb.tqn.com/cD0PNhMM0BxevlBvAgD1ntpQLac=/3558x2363/filters:fill(auto,1)/Cat-rolling-GettyImages-165893132-58ac5ef05f9b58a3c90a144f.jpg";
const Recommendations = ({users, organizations}) => {
    return (
        <div className={'recommendations'}>
            <Subheader>Deberías Seguir a...</Subheader>
            <List className="groups-list">

                {users.map(u=>{
                    return(
                        <MiAvatar
                            link={`/users/${u.id}`}
                            key={u.id}
                            name={u.fullName}
                            image={u.photoURL}/>

                    );
                })}


            </List>
            <Divider/>
            <Subheader>Organizaciones Destacadas</Subheader>
            <List className="groups-list">
                {organizations.map((o, key)=>{
                    return(
                        <MiAvatar
                            key={key}
                            image={'https://pbs.twimg.com/profile_images/719575066736889856/eL9HcziB_400x400.jpg'}
                            link={`/organizations/${o.id}`}
                            name={o.name}
                            />
                    )
                })}


            </List>
        </div>
    )
};

export default Recommendations;