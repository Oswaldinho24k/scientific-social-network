import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {EducationDisplay} from './EducationDisplay';
import {FloatingActionButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';


class EducationContainer extends Component {

    state = {};

    render() {
        return (
            <div style={{maxWidth:600, position:"relative", margin:"0 auto"}}>
                <EducationDisplay/>
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

export default EducationContainer = connect(mapStateToProps, mapDispatchToProps)(EducationContainer);