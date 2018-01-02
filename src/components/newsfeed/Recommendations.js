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
                            image={'https://scontent.fmex5-1.fna.fbcdn.net/v/t34.0-12/25564661_10214514167705256_939305674_n.jpg?oh=f8d20db6dac90cd953243a138997af0f&oe=5A3C3B07'}
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