import React, {Component} from 'react';
import PostCard from "./PostCard";
import {GridList, GridTile, RaisedButton} from 'material-ui';
import './newsfeed.css';
import NewPost from "./NewPost";
import MenuGroups from "./MenuGroups";
import Recommendations from "./Recommendations";
import {connect} from "react-redux";
import * as postActions from '../../redux/actions/postsActions';
import * as groupActions from '../../redux/actions/groupActions';
import {getAllUsers} from '../../redux/actions/usuariosActions';
import {bindActionCreators} from "redux";
import firebase from '../../firebase';
import {Feed} from "../../organisms/index";
import {MainLoader} from "../loader/MainLoader";

class NewsfeedPage extends Component {
    state={
        loader:false,
        newPost:{
            text:'',
            image:''
        },
        newGroup:{
            name:''
        },
        newGroupModal:false,
    };

    //check for user
    componentWillMount(){
     const user = localStorage.getItem("user");
     this.setState({screen:window.innerHeight-60})
     if(!user) this.props.history.push("/login");
    }

    //newPost Functions
    handleText=(e)=>{
      let newPost = this.state.newPost;
      let field = e.target.name;
      newPost[field] = e.target.value;
      this.setState({newPost});

    };
    addPost=()=>{
        this.props.postActions.savePost(this.state.newPost);
        let newPost = this.state.newPost;
        newPost['text']='';
        newPost['image']='';
        this.setState({newPost})
    };
    uploadPhoto=(e)=>{
    let file = e.target.files[0];
        let uploadTask = firebase.storage().ref().child('postfiles/'+file.name).put(e.target.files[0]);
        uploadTask.then(r=>{

            let newPost = this.state.newPost;
            newPost['image']=r.downloadURL;
            this.setState({newPost, loader:false})
        });
        uploadTask.on('state_changed', snapshot=>{
            this.setState({loader:true});
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        });

    };
    //newGroupFunctions
    addGroup=()=>{
        this.props.groupActions.newGroup(this.state.newGroup);
        this.setState({newGroupModal: false});
    };
    handleNewGroup=(e)=>{
        let newGroup = this.state.newGroup;
        let field = e.target.name;
        newGroup[field] = e.target.value;
        this.setState({newGroup});

    };
    handleOpen = () => {
        this.setState({newGroupModal: true});
    };

    handleClose = () => {
        this.setState({newGroupModal: false});
    };
    render() {
        if(this.props.posts.length===0) return <MainLoader/>

        return (

            <div className='newsfeed'>

                <GridList cellHeight={this.state.screen} cols={5}>
                    <GridTile cols={1}>
                        <MenuGroups
                            handleNewGroup={this.handleNewGroup}
                            modal={this.state.newGroupModal}
                            addGroup={this.addGroup}
                            groups={this.props.groups}
                            handleOpen={this.handleOpen}
                            handleClose={this.handleClose}/>
                    </GridTile>
                    <GridTile cols={3}>
                        <div className={'elfeed'}>
                            <Feed
                                uploadPhoto={this.uploadPhoto}
                                handleText={this.handleText}
                                text={this.state.newPost.text}
                                image={this.state.newPost.image}
                                addPost={this.addPost}
                                loader={this.state.loader}
                                posts={this.props.posts}
                            />
                        </div>
                    </GridTile>
                    <GridTile cols={1}>
                        <Recommendations
                            users={this.props.users}
                            organizations={this.props.organizations}/>
                    </GridTile>

                </GridList>
            {/*<div className='newsfeed'>
               <GridList cellHeight={'auto'} cols={4} className='news-sections'>
                   <div className='menu-left-section'>
                       <GridTile cols={1} >
                           <MenuGroups
                               handleNewGroup={this.handleNewGroup}
                               modal={this.state.newGroupModal}
                               addGroup={this.addGroup}
                               groups={this.props.groups}
                               handleOpen={this.handleOpen}
                               handleClose={this.handleClose}/>
                       </GridTile>
                   </div>
                   <GridTile cols={2} className='posts-section'>
                       <NewPost
                            uploadPhoto={this.uploadPhoto}
                           handleText={this.handleText}
                            text={this.state.newPost.text}
                            image={this.state.newPost.image}
                            addPost={this.addPost}
                            loader={this.state.loader}/>

                       this.props.posts.map((post, key)=>{
                           return(
                               <PostCard
                                   key={key}
                                   user={post.user}
                                   image={post.image?post.image:''}
                                   text={post.text}/>
                           )
                       })
                       <Feed posts={this.props.posts}/>

                   </GridTile>
                   <div className='menu-right-section'>
                       <GridTile cols={1} >
                           <Recommendations users={this.props.users}
                                organizations={this.props.organizations}/>
                       </GridTile>
                   </div>
               </GridList>
            </div>*/}

            </div>
        )
    }
}


function mapStateToProps(state){
    let posts = state.posts.filter(p=>{
        return p.group === undefined && p.organization === undefined && p.event === undefined
    })
    return{
        posts:posts,
        groups:state.groups,
        users:state.users.list,
        organizations:state.organizations.list,
    }
}
function mapDispatchToProps(dispatch){
    dispatch(getAllUsers());
    return{
        postActions:bindActionCreators(postActions, dispatch),
        groupActions:bindActionCreators(groupActions, dispatch),
    }
}
NewsfeedPage=connect(mapStateToProps, mapDispatchToProps)(NewsfeedPage);
export default NewsfeedPage;