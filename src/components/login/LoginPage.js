import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginContainer from './LoginContainer';
import * as usuarioActions from '../../redux/actions/usuarioActions';

function mapStateToProps() {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        usuarioActions: bindActionCreators(usuarioActions, dispatch)
    }
}

const LoginPage = connect(mapStateToProps,mapDispatchToProps)(LoginContainer);

export default LoginPage;