/**
 * Created by BlisS on 22/03/17.
 */
import React, {Component} from 'react';
import ProfileContainer from "./ProfileContainer";
import EducationContainer from './education/EducationContainer';
import ExperticeContainer from './education/ExperticeContainer';
import GeneralProfile from './GeneralProfile';
import {Route, Switch} from 'react-router-dom';


class ProfilePage extends Component{
    componentWillMount(){
        if(!localStorage.getItem("user")) this.props.history.push("/login");
    }
    render(){
        return (
            <Switch>
                <Route exact path={"/profile/"} component={GeneralProfile}/>
                <Route path={"/profile/basic/edit"} component={ProfileContainer}/>
                <Route path={"/profile/education"} component={EducationContainer}/>
                <Route path={"/profile/expertice"} component={ExperticeContainer}/>
            </Switch>
        );
    }

}

export default ProfilePage;


