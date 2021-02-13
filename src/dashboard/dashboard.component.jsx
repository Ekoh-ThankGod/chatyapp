import React from 'react';
import ChatListComponent from '../chatList/chatList';
import firebase from 'firebase';
import {Button, withStyles} from '@material-ui/core';
import styles from './dashboard.styles';
import ChatViewComponent from '../chatView/chatView';
import ChatTextBoxComponent from '../chatTextBox/chatTextBox.component';
import NewChatComponent from '../newChat/newChat.component';

class DashboardComponent extends React.Component{

	constructor(){
		super();
		this.state ={
			selectedChat: null,
			newChatFormVisible: false,
			email: null,
			chats: []
		}
	}

	unSubscribeFromAuth = null;

	componentDidMount(){
		this.unSubscribeFromAuth = firebase.auth().onAuthStateChanged(async _usr =>{
			if(!_usr){
				this.props.history.push('/');
			}
			else{
				await firebase
					.firestore()
					.collection('chat')
					.where('users', 'array-contains', _usr.email)
					.onSnapshot(async result =>{ 
						const chats = result.docs.map(_doc => _doc.data());
						await this.setState({
							email: _usr.email,
							chats: chats
						});	
					});
				 

			}
		})
	}

	componentWillUnmount(){
		this.unSubscribeFromAuth()
	}


	buildDocKey = (friend) => [this.state.email, friend].sort().join(':');

	submitMessage = (msg) => {
		const {chats, selectedChat, email} = this.state;	
			const docKey = this.buildDocKey(chats[selectedChat].users.filter(user => user !== email)[0]);
			firebase
			.firestore()
			.collection('chat')
			.doc(docKey)
			.update({
				messages: firebase.firestore.FieldValue.arrayUnion({
					sender: this.state.email,
					message: msg,
					timeStamp: Date.now()
				}),
				receiverHasRead: false
			});
	}


	goToChat = async (docKey, message) =>{
		const {chats} = this.state;
		const usersInchat = docKey.split(':');	
		const chat = chats.find(chat => usersInchat.every(usr => chat.users.includes(usr)));
		console.log('chat is ', chat)
		this.setState({newChatFormVisible: false});
		await this.selectChat(chats.indexOf(chat));
		this.submitMessage(message)
	}

	newChatSubmit = async (chatObj) => {
		console.log(chatObj)
		const docKey = this.buildDocKey(chatObj.sendTo);
		await 
		firebase
		.firestore()
		.collection('chat')
		.doc(docKey)
		.set({
			receiverHasRead: false,
			users: [this.state.email, chatObj.sendTo],
			messages: [{
				message:chatObj.message,
				sender: this.state.email
			}]
		})
		this.setState({newChatFormVisible: false});
		this.selectChat(this.state.chats.length - 1);
	}

	selectChat = async (chatIndex) =>{
		await this.setState({selectedChat: chatIndex, newChatFormVisible: false});
		this.messageRead();
	}

	newChatBtnClicked =() =>{
		this.setState({newChatFormVisible: true, selectedChat: null});
	}

	messageRead = () => {
		const {chats, selectedChat, email} = this.state;
		if(chats === undefined){
			const docKey = this.buildDocKey(chats[selectedChat].users.filter(user => user !== email)[0]);
			if(this.clickedChatWhereNotTheSender(selectedChat)){
				firebase
				.firestore()
				.collection('chat')
				.doc(docKey)
				.update({receiverHasRead: true})
			}
			else{
				console.log('click message where the user is the sender')
			}
		}	
	}

	clickedChatWhereNotTheSender =(chatIndex) => {
		const {chats, email} = this.state;
		return chats[chatIndex].messages[chats[chatIndex].messages.length-1].sender !== email;
	}

	signOut = () => firebase.auth().signOut();

	render(){
		const {email, chats, selectedChat, newChatFormVisible} = this.state;
		const {classes} = this.props;
		console.log(chats);
		return(
			<div>
			<ChatListComponent history ={this.props.history}
			newChatBtnFn = {this.newChatBtnClicked} 
			selectChatFn = {this.selectChat} userEmail = {email} chats ={chats}
			selectedChatIndex ={selectedChat}></ChatListComponent>
			<Button onClick = {this.signOut} className = {classes.signOutBtn}>Sign Out</Button>
			{
				newChatFormVisible ?  null : <ChatViewComponent user = {email}
				chat = {chats[selectedChat]} ></ChatViewComponent>
			}
			{
				selectedChat !== null && !newChatFormVisible ?
				 <ChatTextBoxComponent messageReadFn = {this.messageRead} submitMessageFn = {this.submitMessage}></ChatTextBoxComponent> : null
			}
			<div>
			{
				newChatFormVisible ? <NewChatComponent goToChatFn = {this.goToChat} newChatSubmitFn = {this.newChatSubmit}></NewChatComponent>: null
			}
			</div>
			</div>
		)
	}
}

export default withStyles(styles)(DashboardComponent);
