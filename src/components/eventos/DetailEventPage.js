import React, {Component} from 'react';
import {connect} from "react-redux";
import * as eventosActions from '../../redux/actions/eventosActions';
import {bindActionCreators} from "redux";
import toastr from 'toastr';
import {CircularProgress, FloatingActionButton, GridList, GridTile} from "material-ui";
import CoverPhoto from "./CoverPhoto";
import DetailInfo from "./DetailInfo";
import RemoveIcon from 'material-ui/svg-icons/editor/mode-edit';
import {Feed} from "../../organisms";
import * as postActions from "../../redux/actions/postsActions";
import firebase from "../../firebase";

class DetailEventPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            newPost: {
                text: '',
                image: ''
            },
            imagePreview: {
                file: '',
                src: ''
            }
        }
    }

    removeThisEvent = () => {
        const response = window.confirm('¿Seguro?');

        if (response) {
            this.props.eventosActions.deleteEvent(this.props.event)
                .then(r => {
                    console.log('eliminado exitosamente');
                    this.props.history.push('/eventos');
                    toastr.warning('Eliminado');
                })
                .catch(e => {
                    console.log(e);
                    toastr.error(e);
                });
        }
    };

    // New post events /////////////////////////////////////////////////////

    loadPhotoLocally = (e) => {
        let imagePreview = { ...this.state.imagePreview } ;
        let newPost = {...this.state.newPost};
        let file = e.target.files[0];
        const reader = new FileReader();

        reader.onload =  (e) => {
            imagePreview.src = e.target.result;
            imagePreview.file = file;
            newPost.image = imagePreview.src;
            this.setState({imagePreview, newPost});
        };

        reader.readAsDataURL(file);
    };

    handleNewPostFieldChange=(e)=>{
        let newPost = {...this.state.newPost};
        let field = e.target.name;
        newPost[field] = e.target.value;
        this.setState({newPost});
        //console.log(newPost)
    };

    uploadPhotoAndAddPost = () => {
        const imagePreview = { ...this.state.imagePreview };
        let newPost = { ...this.state.newPost };
        const {file, src} = imagePreview;
        console.log(file);
        newPost['event'] = this.props.match.params.id;
        if ( file !== '' ) {
            let uploadTask = firebase.storage().ref().child('postfiles/' + file.name).put(file);
            uploadTask.then(r => {
                newPost['image'] = r.downloadURL;
                // if image is loaded
                this.addPost(newPost);
                this.setState({loader: false});
            });
            uploadTask.on('state_changed', snapshot => {
                this.setState({loader: true});
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            });
        }else {
            // if no image is loaded
            this.addPost(newPost);
        }
    };

    addPost = ( post ) => {
        this.props.postActions.savePost( post );
        let newPost = { ...this.state.newPost };
        newPost['text']='';
        newPost['image']='';
        this.setState({newPost});
    };


    ////////////////////////////////////////////////////////////////////////

    render() {
        const {event, eventFetched, isOwner} = this.props;
        const {posts} = this.props || [];
        const {newPost: {text = '', image = ''}, loader} = this.state;
        return (
            <div style={{boxSizing:'border-box', width: '100vw', height: '100vh'}}>
                { /* Insert javascript logic */
                    !eventFetched ? <p>Loading</p> :
                        <div>
                            <CoverPhoto
                                event={event}
                                loading={false}
                            />
                            <GridList cellHeight={'auto'} cols={5} className='event-detail-grid'>
                                <GridTile cols={2} className="event-detail-left-section" >
                                    <DetailInfo removeThisEvent={this.removeThisEvent} isOwner={isOwner} event={event}/>
                                </GridTile>
                                <GridTile cols={3} className='posts-section'>
                                    <Feed
                                        uploadPhoto={this.loadPhotoLocally}
                                        handleText={this.handleNewPostFieldChange}
                                        text={text}
                                        image={image}
                                        addPost={this.uploadPhotoAndAddPost}
                                        loader={loader}
                                        posts={posts}
                                    />
                                </GridTile>
                            </GridList>
                            {
                                isOwner &&
                                <FloatingActionButton
                                //onClick={}
                                    className="fab-button">
                                    <RemoveIcon/>
                                </FloatingActionButton>
                            }
                        </div>
                } {/* End JavaScript injection */}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const eventId = ownProps.match.params.id;
    const event = state.eventos.filter( event => {
        return event.id === eventId;
    })[0];
    let isOwner = false;
    if (event){
         isOwner = state.usuario.id === event.owner;
    }
    let posts = state.posts.filter( p => {
        return p.event !== undefined && p.event === eventId
    });
    return {
        event,
        eventFetched: event !== undefined,
        isOwner,
        posts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        eventosActions: bindActionCreators(eventosActions, dispatch),
        postActions:bindActionCreators(postActions, dispatch),
    }
}

DetailEventPage = connect(mapStateToProps, mapDispatchToProps)( DetailEventPage);
export default DetailEventPage;