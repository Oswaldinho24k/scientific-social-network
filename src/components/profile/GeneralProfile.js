import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Paper} from 'material-ui';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
//cv
import {EducationDisplay} from "./education/EducationDisplay";
import {ExperticeDisplay} from "./education/ExperticeDisplay";

const bliss = "https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAIAAQDGAAwAAQAAAAAAAAt1AAAAJDg0YWZkZDNiLTIwZTYtNGQyYy04ZWE5LWE0YmQwODdjMWZjNQ.jpg";

class GeneralProfile extends Component {

    state = {};

    render() {
        return (
            <div style={{maxWidth:800, position:"relative", margin:"0 auto"}}>
                <Paper className="paper" zDepth={3}>
                    <div className="general-profile-cover">
                        <img src={bliss} alt="user"/>
                    </div>
                    <div className="general-profile-info">
                        <h2>Héctor BlisS</h2>
                        <p>FullStack developer</p>
                        <p>Google developer groups</p>
                        <p>Pachuca de soto</p>
                        <Link to={"/profile/basic/edit"}>
                        <FontAwesome name={"ellipsis-h"} />
                        </Link>
                    </div>
                </Paper>
                <ExperticeDisplay/>
                <EducationDisplay/>

            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

export default GeneralProfile = connect(mapStateToProps, mapDispatchToProps)(GeneralProfile);