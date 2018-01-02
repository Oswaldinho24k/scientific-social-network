import React, {Component} from 'react';
import './group_page.css';
import {GridList, GridTile, Paper} from 'material-ui';
import GroupBasics from "./GroupBasics";
import GroupFeed from "./GroupFeed";
// import GroupChat from "./GroupChat";
import {connect} from "react-redux";
import firebase from '../../firebase';
import * as postsActions from '../../redux/actions/postsActions';
import {bindActionCreators} from "redux";
import GroupChat from "./GroupChat";




class GroupDisplay extends Component {

    state={
        newPost:{},
        loader:false
    };

    componentWillMount(){
        this.setState({screen:window.innerHeight-60})
    }

    //newPost Functions
    handleText=(e)=>{
        let newPost = this.state.newPost;
        let field = e.target.name;
        newPost[field] = e.target.value;
        this.setState({newPost});
        console.log(newPost)
    };
    addPost=()=>{
        let newPost = this.state.newPost;
        newPost['group'] = this.props.match.params.groupId;
        this.props.postActions.savePost(newPost);

        newPost['text']='';
        newPost['image']='';
        this.setState({newPost})
    };
    uploadPhoto=(e)=>{
        let file = e.target.files[0];
        let uploadTask = firebase.storage().ref().child('postGroupfiles/'+file.name).put(e.target.files[0]);
        uploadTask.then(r=>{
            console.log(r);
            let newPost = this.state.newPost;
            newPost['image']=r.downloadURL;
            this.setState({newPost, loader:false})
        });
        uploadTask.on('state_changed', snapshot=>{
            this.setState({loader:true});
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        });

    };

    render() {
        return (
            <div className="group-page">
               <GridList cols={4} cellHeight={this.state.screen} >

                  <GridTile cols={1} >
                          <GroupBasics
                              fetched={this.props.fetched}
                              group={this.props.group}/>
                  </GridTile>

                   <GridTile cols={2}>
                      <div className={'elfeed'}>
                          <GroupFeed
                              posts={this.props.posts}
                              handleText={this.handleText}
                              addPost={this.addPost}
                              uploadPhoto={this.uploadPhoto}
                              newPost={this.state.newPost}
                              loader={this.state.loader}/>
                      </div>
                   </GridTile>

                   <GridTile cols={1}>
                       <GroupChat/>
                   </GridTile>
               </GridList>
            </div>
        )
    }
}

function mapStateToProps(state, oP){
    console.log(state);
    let groupId = oP.match.params.groupId;
    let group = state.groups.filter(g=>{
        return g.id=== groupId
    });
    let posts = state.posts.filter(p=>{
        return p.group!==undefined && p.group===groupId
    });

    return{
        fetched:group[0]!==undefined,
        group:group[0],
        posts:posts,

    }
}
function mapDispatchToProps(dispatch, oP){
    return{
        postActions:bindActionCreators(postsActions, dispatch)
    }
}

GroupDisplay = connect(mapStateToProps, mapDispatchToProps)(GroupDisplay);
export default GroupDisplay;