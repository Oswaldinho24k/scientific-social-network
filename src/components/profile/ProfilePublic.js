import React, {Component} from 'react';
import {ProfileDisplay} from "./ProfileDisplay";
import {CircularProgress, RaisedButton} from 'material-ui';
import toastr from 'toastr';
import {MainLoader} from '../loader/MainLoader';
import {ExperticeDisplay} from "./education/ExperticeDisplay";
import {EducationDisplay} from "./education/EducationDisplay";
import {Card} from "../../organisms";
import FontAwesome from 'react-fontawesome';
//redux
import {connect} from 'react-redux';
import {getUser} from "../../redux/actions/usuariosActions";
import {bindActionCreators} from 'redux';
//actions
import {toggleFollow} from "../../redux/actions/usuarioActions";

const defaultImg = "https://fthmb.tqn.com/cD0PNhMM0BxevlBvAgD1ntpQLac=/3558x2363/filters:fill(auto,1)/Cat-rolling-GettyImages-165893132-58ac5ef05f9b58a3c90a144f.jpg";
const Dportada = "https://wallpaperclicker.com/storage/wallpaper/hd-wallpaper-beautiful-art-full-hd-89223888.jpg";


const ProfilePublicDisplay = ({loading, onChange, fetched, posts, followers, following, photoURL, title, displayName, fullName, email, age, sex, facebook, twitter, github, linkedIn, bio, portada, id}) => {
    if(!portada) portada = Dportada;
    return(<div style={{ backgroundColor:"lightgrey", paddingBottom:100}}>

        <div className="profile-portada-publica" style={{backgroundImage:`url('${portada}')`}}>
            <figure>
                <img src={photoURL ? photoURL:defaultImg} alt="user"/>
                <h3 style={{minWidth:200,position:"absolute", bottom:-25, left:10}}>{fullName}</h3>
            </figure>
            <div className="profile-follow-data">
                <span>Seguidores <br/> {followers ? Object.keys(followers).length:0} {}</span>
                <span>Siguiendo <br/> {following ? Object.keys(following).length:0} </span>
                <span>Post{posts ? Object.keys(posts).length>1 ? "s":null:"s"} <br/> {posts ? Object.keys(posts).length:0} </span>
            </div>
        </div>

        <section style={{display:"flex", paddingTop:100, justifyContent:"center", alignItems:"flex-start"}}>
            <article>
                <ExperticeDisplay/>
                <EducationDisplay/>
            </article>
            <Card
                style={{marginLeft:50}}
                title="Info de contacto"
                body={<div>
                    <p>
                        <FontAwesome
                            name="envelope-o"
                        />/
                        {email}
                    </p>
                    <br/>
                    <p>
                        <FontAwesome
                            name="twitter"
                        />/
                        {twitter}
                    </p>
                    <br/>
                    <p>
                        <FontAwesome
                            name="facebook"
                        />/
                        {facebook}
                    </p>
                    <br/>
                    <p>
                        <FontAwesome
                            name="github"
                        />/
                        {github}
                    </p>
                    <br/>
                    <p>
                        <FontAwesome
                            name="linkedin"
                        />/
                        {linkedIn}
                    </p>
                    <br/>
                    <a style={{textDecoration:"none", color:"green"}}href={"/chat/"}>
                        <FontAwesome
                            name="comments-o"
                        />/
                        Chatea conmigo
                    </a>
                </div>}
            />
        </section>


    </div>);
};

class ProfilePublic extends Component{

    state = {
        loading:false
    };

    follow = () => {
        const userId = this.props.match.params.userId;
        this.props.toggleFollow(userId)
            .then(mensaje=>toastr.info(mensaje));
    };

    render(){
        const {loading} = this.state;
        const {fetched, profile, following, isSelf} = this.props;
        if(!fetched) return <MainLoader/>
        return(
            <div style={{backgroundColor:"lightgrey", height:"calc(100vh - 64px)"}}>
                <ProfilePublicDisplay
                    loading={loading}
                    fetched={fetched}
                    {...profile}/>
                <RaisedButton
                    disabled={isSelf}
                    style={{position:"absolute", top:370, right:20, zIndex:2}}
                    onClick={this.follow}
                     primary={!following ? true:false}
                    secondary={following ? true : false}
                    label={following ? "Siguiendo":"Seguir"}
                />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    const userId = ownProps.match.params.userId;
    //let following = state.usuario.following[userId];
    let following = false;
    if (state.usuario.following !== undefined){
        following = state.usuario.following[userId];
    }
    //if(following===undefined) following = false;
    //else following = true;
    console.log(following);
    return{
        isSelf:userId === state.usuario.id,
        profile: state.users.object[userId],
        following,
        fetched:state.users.object[userId] !== undefined,
    }
}

function mapDispatchToProps(dispatch, ownProps){
    const userId = ownProps.match.params.userId;
    dispatch(getUser(userId));
    return {
        toggleFollow: bindActionCreators(toggleFollow, dispatch)
    }
}

ProfilePublic = connect(mapStateToProps,mapDispatchToProps)(ProfilePublic);
export default ProfilePublic;

