import React from 'react';
import {Paper, TextField, IconButton, Avatar} from 'material-ui';
import Emoji from 'material-ui/svg-icons/editor/insert-emoticon';
import File from 'material-ui/svg-icons/editor/attach-file';
import Photo from 'material-ui/svg-icons/editor/insert-photo';
import Gif from 'material-ui/svg-icons/action/gif';
import Heart from 'material-ui/svg-icons/action/favorite-border';
import ReactDOM from 'react-dom';


const GroupChat = ({}) => {
    return (

        <Paper style={{borderRadius:'2%'}} className="group-chat-paper">
            <div className="chat-box" >

                <div className="chat left-chat">
                    <Avatar icon={<Emoji size={10}/>}/>
                    <div className="chat-text">
                        Ok, let's talk about topics concerning to TLCAN trade
                    </div>
                </div>
                <div className="chat left-chat">
                    <Avatar icon={<Emoji size={10}/>}/>
                    <div className="chat-text">
                        I think the most important think is that we have to be unified as country
                    </div>
                </div>
                <div className="chat left-chat">
                    <Avatar icon={<Emoji size={10}/>}/>
                    <div className="chat-text">
                        But ...
                    </div>
                </div>

                <div className="chat right-chat">
                    {/*<Avatar icon={<Emoji size={20}/>}/>*/}
                    <div className="chat-text owner-chat">
                        I have been read a lot this and in summary ...
                    </div>
                </div>
                <div className="chat left-chat" >
                    <Avatar icon={<Emoji size={10}/>}/>
                    <div className="chat-text">
                        That's right
                    </div>
                </div>
                <div className="chat left-chat" >
                    <Avatar icon={<Emoji size={10}/>}/>
                    <div className="chat-text">
                        Totally agree
                    </div>
                </div>

            </div>
            <div className="text-box">
               <TextField
                   fullWidth={true}
                   multiLine={true}
                   hintText="Escribe..."/><br/>
                <div className="botones-chat-container">
                   <IconButton
                       iconStyle={{width:'20px', height:'20px'}}
                       style={{width:'40px', height:'40px', padding:'1px'}}>
                    <Emoji/>
                   </IconButton>
                    <IconButton
                        iconStyle={{width:'20px', height:'20px'}}
                        style={{width:'40px', height:'40px', padding:'1px'}}>
                        <File/>
                    </IconButton>
                    <IconButton
                        iconStyle={{width:'20px', height:'20px'}}
                        style={{width:'40px', height:'40px', padding:'1px'}}>
                        <Photo/>
                    </IconButton>
                    <IconButton
                        iconStyle={{width:'20px', height:'20px'}}
                        style={{width:'40px', height:'40px', padding:'1px'}}>
                        <Gif/>
                    </IconButton>
                    <IconButton
                        iconStyle={{width:'20px', height:'20px'}}
                        style={{width:'40px', height:'40px', padding:'1px'}}>
                        <Heart/>
                    </IconButton>

                </div>
            </div>
        </Paper>

    )
};

export default GroupChat;