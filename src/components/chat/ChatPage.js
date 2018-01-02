import React, {Component} from 'react';
import './chat.css';
import {GridTile, GridList, List, ListItem, Subheader, Avatar, Paper, Card, CardHeader, CardText, TextField} from 'material-ui';
import Bubble from 'material-ui/svg-icons/communication/chat-bubble';
import {Link} from 'react-router-dom';
import Dots from 'material-ui/svg-icons/navigation/more-vert';
import Face from 'material-ui/svg-icons/image/tag-faces';
import Mic from 'material-ui/svg-icons/content/send';
import ButtonC from '../../organisms/button/ButtonC';
//redux
import {connect} from 'react-redux';
import {getUserChats, submitMessage} from "../../redux/actions/chatsActions";
import {getAllUsers} from "../../redux/actions/usuariosActions";
import firebase, {findOrCreateNewChat} from '../../firebase';

const oswi = "https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305";


class ChatPage extends Component{

	state = {
		newMessage:''
	};

	listener;

	componentWillMount(){
		this.props.getUserChats();
		this.props.getAllUsers();
	}

	componentWillReceiveProps(p){
		if(!p.currentChat.id) return;
		this.listener.off();
		this.listener = firebase.database().ref("chats").child(p.currentChat.id).child("messages")
			.on("child_added", s=>{
				console.log(s.val());
			});

	}

    onChangeText = (e) => {
		this.setState({newMessage:e.target.value});

	};

    submitMessage = () => {
    	const message = this.state.newMessage;
    	this.props.submitMessage(message, this.props.user.id, this.props.currentChat);
    	this.setState({newMessage:''});
	};

	render(){
		//if(!this.props.fetched) return <h2>Cargando...</h2>
		//console.log(this.props.currentChat);
		return(
			<div className="chat-page">
					<div className="div-lista">
						<Subheader>Contactos</Subheader>
						<List>

							{this.props.chats.map(c=>{
								//console.log(Object.keys(c.participants));
                                const usuarioKey = Object.keys(c.participants).filter(k=>k !== this.props.user.id)[0];
								//console.log("user",this.props.user.id);
                                //console.log(usuarioKey);
                                const lastMessage = c.messages[c.messages.length - 1].message;
								const usuario = this.props.users[usuarioKey];
                                return(
									<ListItem
										isKeyboardFocused={this.props.match.params.chatId == c.id}
										containerElement={<Link to={"/chat/" + c.id} />}
										key={c.id}
										primaryText={usuario.fullName}
										leftAvatar={<Avatar src={usuario.photoURL} />}
										secondaryText={lastMessage}
									/>
								);
							})}
                            <ListItem
                                isKeyboardFocused={false}
                                secondaryText="bla bla bla bla"
                                primaryText="Oswaldo" rightIcon={<Bubble />}
                                leftAvatar={<Avatar
                                    src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}
							/>
                            <ListItem
                                isKeyboardFocused={false}
                                secondaryText="bla bla bla bla"
                                primaryText="Oswaldo" rightIcon={<Bubble />}
                                leftAvatar={<Avatar
                                    src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}
                            />
                            <ListItem
                                isKeyboardFocused={false}
                                secondaryText="bla bla bla bla"
                                primaryText="Oswaldo" rightIcon={<Bubble />}
                                leftAvatar={<Avatar
                                    src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}
                            />
                            <ListItem
                                isKeyboardFocused={false}
                                secondaryText="bla bla bla bla"
                                primaryText="Oswaldo" rightIcon={<Bubble />}
                                leftAvatar={<Avatar
                                    src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}
                            />
                            <ListItem
                                isKeyboardFocused={false}
                                secondaryText="bla bla bla bla"
                                primaryText="Oswaldo" rightIcon={<Bubble />}
                                leftAvatar={<Avatar
                                    src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}
                            />
                            <ListItem
                                isKeyboardFocused={false}
                                secondaryText="bla bla bla bla"
                                primaryText="Oswaldo" rightIcon={<Bubble />}
                                leftAvatar={<Avatar
                                    src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}
                            />
                            <ListItem
                                isKeyboardFocused={false}
                                secondaryText="bla bla bla bla"
                                primaryText="Oswaldo" rightIcon={<Bubble />}
                                leftAvatar={<Avatar
                                    src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}
                            />
                            <ListItem
                                isKeyboardFocused={false}
                                secondaryText="bla bla bla bla"
                                primaryText="Oswaldo" rightIcon={<Bubble />}
                                leftAvatar={<Avatar
                                    src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}
                            />
                            <ListItem
                                isKeyboardFocused={false}
                                secondaryText="bla bla bla bla"
                                primaryText="Oswaldo" rightIcon={<Bubble />}
                                leftAvatar={<Avatar
                                    src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}
                            />
                            <ListItem
                                isKeyboardFocused={false}
                                secondaryText="bla bla bla bla"
                                primaryText="Oswaldo" rightIcon={<Bubble />}
                                leftAvatar={<Avatar
                                    src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}
                            />
                            <ListItem
                                isKeyboardFocused={false}
                                secondaryText="bla bla bla bla"
                                primaryText="Oswaldo" rightIcon={<Bubble />}
                                leftAvatar={<Avatar
                                    src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}
                            />


						</List>
					</div>

					<div className="chat-box-bliss">
						<Paper zDepth={4}>
							<ListItem
			                	secondaryText="última vez hoy 10:15"
			                    primaryText="Oswaldo"
								rightIcon={<Dots />}
			                    leftAvatar={<Avatar
			                        src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}/>

						<div className="chat-mensajes">
							{this.props.currentChat.messages.map((message, index)=>{
                                const usuarioKey = Object.keys(this.props.currentChat.participants).filter(k=>k !== this.props.user.id)[0];
                                const usuario = this.props.users[usuarioKey];
								return(
                                    <div key={index} className={message.user === this.props.user.id ? "chat-mensaje derecha":"chat-mensaje izquierda"}>
                                        <Avatar
                                            src={usuario.photoURL} />
                                        <span> {message.message} </span>
                                    </div>
								);
							})}

					    	</div>


                            <div className="caja-mensaje">
                                <div>
                                    <Face/>
                                </div>
                                <div className="el-input">
                                    <TextField
										underlineFocusStyle={{borderColor:"grey"}}
										onChange={this.onChangeText}
										name={"mensaje"}
										value={this.state.newMessage}
                                        multiLine={true}
                                        fullWidth={true}/>
                                </div>
                                <div>
									<ButtonC
										onClick={this.submitMessage}
										text={<Mic/>}
									/>
                                </div>
                            </div>

						  </Paper>

					</div>

			</div>
		)
	}
}

function mapStateToProps(state, ownProps){

	//console.log(state.usuario)
	let currentChat = undefined;
	const chatId = ownProps.match.params.chatId;
	if(chatId){
		//console.log("si hay chat");
		currentChat = state.chats.list.find(c=>c.id == chatId);
	}


	return{
		chats:state.chats.list,
		currentChat:currentChat || {messages:[]},
		user:state.usuario,
		users:state.users.object,
		fetched: state.chats.list.length > 0 && Object.keys(state.usuario).length > 0 && Object.keys(state.users.object).length > 0
	}
}

export default ChatPage = connect(mapStateToProps,{getUserChats, getAllUsers, submitMessage})(ChatPage);