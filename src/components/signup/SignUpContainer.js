import React, {Component} from 'react';
import { RaisedButton} from 'material-ui';
import './signup.css';
import SignUpComponent from "./SignUpComponent";
import toastr from 'toastr';

class SignUpContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: {
                email: '',
                password: '',
                confirmPassword: ''
            },
            isMatching: true,
            checked: false,
            loading:false
        };
    }

    handleChangeNewUser = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let {newUser} = this.state;
        newUser[name] = value;
        this.setState({newUser}, () => {
            if(name === 'confirmPassword' || name === 'password'){
                this.isMatching();
            }
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({loading:true});
        const user = Object.assign({},this.state.newUser);
        this.props.usuarioActions.registrarEIniciarSesion(user)
            .then( r => {
                toastr.success("Bienvenido");
                this.setState({loading:false});
                this.props.history.push('/');


            })
            .catch(e=>{
                toastr.error(e);
                this.setState({loading:false});
            });
    };

    isMatching = () => {
        const {password, confirmPassword} = this.state.newUser;
        this.setState({isMatching: (password === confirmPassword) });

    };

    updateCheck = () => {
        this.setState((oldState) => {
            return {
                checked: !oldState.checked,
            };
        });
    };


    render() {
        //console.log(this.props.match);
        const {newUser} = this.state;
        return (
            <div className="signup">
                <SignUpComponent
                    newUser={newUser}
                    onChange={this.handleChangeNewUser}
                    onSubmit={this.handleSubmit}
                    matching={this.state.isMatching}
                    checked={this.state.checked}
                    updateCheck={this.updateCheck}
                    loading={this.state.loading}
                />
            </div>
        )
    }
}

export default SignUpContainer;