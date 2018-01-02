import React from 'react';
import {TextField,RaisedButton} from 'material-ui';
import {NavLink} from "react-router-dom";

const styleButton = {
    margin: '30px 0px 10px 0px ',
    display: 'block'
};

const textFieldStyle = {
    display: 'block',
    margin: '5px 0px'
};

const formStyle = {
    width: '30vw',
    textAlign: 'center'
};

const pStyle = {
    fontSize: '14px',
    display: 'inline'
};

const navStyle = {
    fontSize: '14px',
    display: 'inline'
};

const LoginComponent = (props) => {
    console.log(props.usuario);
    return (
        <form
            onSubmit={props.onSubmit}
            className="login-box">
            <TextField
                name="email"
                required
                floatingLabelText="Email"
                value={props.usuario.email}
                onChange={props.onChange}
                type="email"
                style={textFieldStyle}
                fullWidth={true}
            />
            <TextField
                style={textFieldStyle}
                name="password"
                required
                floatingLabelText="Contraseña"
                value={props.usuario.password}
                onChange={props.onChange}
                type="password"
                fullWidth={true}
            />
            <RaisedButton
                label="Entrar"
                primary={true}
                style={styleButton}
                type="submit"
                fullWidth={true}
            />
            <p style={pStyle}>¿Aún no tienes cuenta? </p>
            {' '}
            <NavLink style={navStyle} to='/signup'>Registrate</NavLink>
        </form>
    );
};

export default LoginComponent;