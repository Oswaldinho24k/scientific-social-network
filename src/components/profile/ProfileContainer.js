import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateProfile} from '../../redux/actions/usuarioActions';
import {ProfileDisplay} from './ProfileDisplay';
import toastr from 'toastr';
import firebase from '../../firebase';

class ProfileContainer extends Component{

    state = {
        profile:{},
        loading:false
    };

    onChange = (e) => {
        let profile = Object.assign({}, this.state.profile);
        const field = e.target.name;
        const value = e.target.value;
        profile[field] = value;
        this.setState({profile});
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.updateProfile(this.state.profile)
            .then(()=>toastr.success("Tus datos se guardaron"))
            .catch(e=>toastr.error("no se pudo guardar", e));
    };

    changeCover = (e) => {
        let file = e.target.files[0];
        if(file.size > 1500000) return toastr.warning("Tu imagen es muy pesada");
        this.setState({loading:true});
        let profile = this.state.profile;
        firebase.storage().ref(this.props.usuario.id).child("portada").put(file)
            .then(s=>{
                profile["portada"] = s.downloadURL;
                this.setState({profile, loading:false});
            })
            .catch(e=>console.log(e))
    };

    changePic = (e) => {
        let file = e.target.files[0];
        if(file.size > 1500000) return toastr.warning("Tu imagen es muy pesada");
        this.setState({loading:true});
        let profile = this.state.profile;
        firebase.storage().ref(this.props.usuario.id).child("perfilPic").put(file)
            .then(s=>{
                profile["photoURL"] = s.downloadURL;
                this.setState({profile, loading:false});
            })
            .catch(e=>console.log(e))
    };

    componentWillReceiveProps(p){
        this.setState({profile:p.usuario});
    }

    componentDidMount(){
        this.setState({profile:this.props.usuario});
    }

    render(){
        const {profile, loading} = this.state;
        const {fetched} = this.props;
        return(
            <ProfileDisplay
                changePic={this.changePic}
                loading={loading}
                changeCover={this.changeCover}
                fetched={fetched}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                {...profile}/>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        usuario: state.usuario,
        fetched: Object.keys(state.usuario).length > 0
    };
}

export default ProfileContainer = connect(mapStateToProps, {updateProfile})(ProfileContainer);