import React, {Component} from 'react';
import LoginComponent from './LoginComponent';
import './login.css';
import toastr from 'toastr';
import {listenUserChanges} from "../../redux/actions/usuarioActions";

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario:{
                email: '',
                password: '',
            }
        };
    }

    loginWithPassword = (e) => {
        e.preventDefault();
        const user = Object.assign({},this.state.usuario);
        console.log(user.email + user.password);
        this.props.usuarioActions.iniciarSesion(user)
            .then( (uid) => {
                this.props.usuarioActions.listenUserChanges(uid);
                toastr.success("Bienvenido");
                this.props.history.push('/profile');
            })
            .catch(e=>toastr.error(e));
    };

    handleChange = (e) => {
        let usuario = this.state.usuario;
        usuario[e.target.name] = e.target.value;
        this.setState({usuario});
    };


    render() {
        console.log(this.props.match);
        return (
            <div className="login">
                <LoginComponent
                    onChange={this.handleChange}
                    onSubmit={this.loginWithPassword}
                    usuario={this.state.usuario}
                />
            </div>
        )
    }
}

export default LoginContainer;