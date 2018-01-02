import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SignUpContainer from './SignUpContainer';
import * as usuarioActions from '../../redux/actions/usuarioActions';

function mapStateToProps(state, ownProps) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        usuarioActions: bindActionCreators(usuarioActions, dispatch)
    }
}

const SignUpPage = connect(mapStateToProps,mapDispatchToProps)(SignUpContainer);

export default SignUpPage;