import React from 'react';
//import {Card, CardHeader, CardTitle, CardText, CardMedia} from 'material-ui/Card';
import {TextField, CircularProgress} from 'material-ui';
import {RaisedButton, IconButton, FlatButton} from 'material-ui';
import ActionHome from 'material-ui/svg-icons/action/home';
import Photo from 'material-ui/svg-icons/image/photo-camera';
import Video from 'material-ui/svg-icons/av/videocam';
import File from 'material-ui/svg-icons/editor/attach-file';
import './newsfeed.css';

import {Card} from '../../organisms/index';

import ButtonC from "../../organisms/button/ButtonC";




let elInput;

function clicki(){
    elInput.click();
}

const NewPost = ({handleText, text, image, uploadPhoto, addPost, loader}) => {
    return (
        <div className='new-post'>
            {/* <Card>
                <CardHeader
                    title="Qué descubriste hoy?"
                    subtitle='Comparte una foto, artículo o lo que quieras!'
                    avatar="https://static.pexels.com/photos/355956/pexels-photo-355956.jpeg"
                />
                <CardMedia>
                    <div className={loader?'loaderOn':'loaderOff'}>
                        <CircularProgress
                            size={80} thickness={5}/>
                    </div>
                    <img src={image} alt="" />
                </CardMedia>

                <CardText>
                    <TextField
                        value={text}
                        name='text'
                        onChange={handleText}
                        fullWidth={true}
                        multiLine={true}
                    /><br />

                    <div className='post-actions'>

                            <IconButton onClick={clicki}>
                                <Photo/>
                                <input ref={input=>elInput=input} id="fotobutton" type="file" hidden className="inputimage" onChange={uploadPhoto}/>
                            </IconButton>


                        <IconButton>
                            <Video/>
                        </IconButton>
                        <IconButton>
                            <File/>
                        </IconButton>
                        <IconButton>
                            <ActionHome/>
                        </IconButton>
                    </div>

                </CardText>

                <ButtonC text={"Publicar"} onClick={addPost} width={"98.5%"} icon={"eye"}/>

            </Card>*/}
            <Card
                body={<div>
                    <div className={loader?'loaderOn':'loaderOff'}>
                        <CircularProgress
                            size={80} thickness={5}/>
                    </div>
                    <img src={image} alt="" />
                    <TextField
                        underlineFocusStyle={{borderColor:'gray'}}
                        value={text}
                        name='text'
                        onChange={handleText}
                        fullWidth={true}
                        multiLine={true}
                    /><br />

                    <div className='post-actions'>

                        <IconButton onClick={clicki}>
                            <Photo/>
                            <input ref={input=>elInput=input} id="fotobutton" type="file" hidden className="inputimage" onChange={uploadPhoto}/>
                        </IconButton>
                        <IconButton>
                            <Video/>
                        </IconButton>
                        <IconButton>
                            <File/>
                        </IconButton>
                        <IconButton>
                            <ActionHome/>
                        </IconButton>
                    </div>
                    <FlatButton
                        fullWidth={true}
                        onClick={addPost}
                    >
                        Publicar
                    </FlatButton>
                </div>}



                title={'Qué descubriste hoy?'}
                />
        </div>
    )
};

export default NewPost;