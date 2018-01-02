import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ExperticeDisplay} from "./ExperticeDisplay";
import {FloatingActionButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';


class ExperticeContainer extends Component {

    state = {};

    render() {
        return (
            <div style={{maxWidth:600, position:"relative", margin:"0 auto"}}>
                <ExperticeDisplay/>
                <FloatingActionButton
                    style={{position:"fixed", bottom:25, right:25}}
                    backgroundColor="grey"
                >
                    <ContentAdd />
                </FloatingActionButton>
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

export default ExperticeContainer = connect(mapStateToProps, mapDispatchToProps)(ExperticeContainer);