import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Toolbar, ToolbarGroup,  MenuItem, IconMenu, RaisedButton, ToolbarTitle, IconButton, Avatar} from 'material-ui';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import './navbar.css';
import Person from 'material-ui/svg-icons/social/person';
import {cerrarSesion} from "../../redux/actions/usuarioActions";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ButtonC from "../../organisms/button/ButtonC";
import logo from '../../assets/logo.png';
import nombre from '../../assets/nombre.png';

class Navbar extends Component {

    signOut = () => {
        this.props.cerrarSesion();
        this.props.history.push("/login");

    };

    render() {
        let user = false;
        const {fetched, usuario} = this.props;
        return (
            <div className="navbar">
                <Toolbar
                    style={{backgroundColor:"#3D6099"}}
                >
                   <ToolbarGroup>
                       <Link to="/" className="link-nav">
                           {/*<img style={{height:"40px"}} src={logo} alt=""/>
                           <img style={{width:"100px", marginBottom:"12px"}} src={nombre} alt=""/>*/}
                           <h2>Scientific-SN</h2>
                       </Link>
                   </ToolbarGroup>
                    {user ?
                        <ToolbarGroup>

                            <Link to="/register" className="link-nav">
                                <RaisedButton label="Regístrate" primary={true} />
                            </Link>
                            <span className="separador-nav">|</span>
                            <Link to="/logIn" className="link-nav">
                                <RaisedButton label="Inicia" primary={true} />
                            </Link>
                        </ToolbarGroup>
                        :
                        <ToolbarGroup>
                            <Link to="/" className="link-nav">
                                <ButtonC text={"Descubre"}/>
                            </Link>
                            <span className="separador-nav">|</span>
                            {fetched && <Avatar
                                src={usuario.photoURL}
                                size={50}
                            /> }
                            <IconMenu
                            iconButtonElement={
                                <IconButton touch={true}>
                                    <NavigationExpandMoreIcon />
                                </IconButton>
                            }
                                >

                                <MenuItem
                                    containerElement={<Link to="/profile" className="link-nav"/>}
                                    primaryText="Perfil" />

                                <MenuItem containerElement={<Link to="/chat" className="link-nav"/>} primaryText="Chat" />

                                <MenuItem onClick={this.signOut} primaryText="Cerrar Sesión" />
                            </IconMenu>
                        </ToolbarGroup>}
                </Toolbar>
            </div>
        )
    }
}

function mapStateToProps(state){
    //console.log(state);
    return{
        usuario: state.usuario,
        fetched: Object.keys(state.usuario).length > 0
    }
}

export default withRouter(connect(mapStateToProps, {cerrarSesion})(Navbar));