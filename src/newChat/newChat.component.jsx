import React from 'react';
import { FormControl, InputLabel, Input, Button, Paper, withStyles, 
	CssBaseline, Typography } from '@material-ui/core';
import styles from './newChat.styles';
import firebase from 'firebase';

class NewChatComponent extends React.Component{
	constructor(){
		super();
		this.state ={
			username: null,
			message: null
		}
	}

	userTyping = (type, event) =>{
		switch(type){
			case 'username': 
				this.setState({username: event.target.value});
				break;
			case 'message':
				this.setState({message: event.target.value});
				break;
			default:
				break;
		}
	}

	goToChat = () => this.props.goToChatFn(this.buildDockey(), this.state.message);

	buildDockey = () => [firebase.auth().currentUser.email, this.state.username].sort().join(':');

	chatExists = async () =>{
		const docKey = this.buildDockey();
		const chat = await 
		firebase
		.firestore()
		.collection('chat')
		.doc(docKey)
		.get();
		console.log(chat.exists);
		return chat.exists
	}

	userExists = async () =>{
		const userSnapshot = await 
		firebase
			.firestore()
			.collection('users')
			.get();
			const exists = userSnapshot.docs.map(doc => doc.data().email)
			.includes(this.state.username);
			// this.setState({serverError: !exists})
			console.log(exists)
			return exists;
	}
	createChat = () =>{
		this.props.newChatSubmitFn({
			sendTo: this.state.username,
			message: this.state.message
		});
	}

	submitNewChat = async (event) =>{
		event.preventDefault();

		const userExists = await this.userExists();
		console.log(userExists);

		if(userExists){
			const chatExists = await this.chatExists();
			if(chatExists){
				this.goToChat()
			}
			else{
				this.createChat();
			}
		}
	}

	render(){
		const {classes} = this.props;
		return(
			<main className= {classes.main}>
				<CssBaseline></CssBaseline>
				<Paper className = {classes.paper}>
					<Typography component = 'h1' variant = 'h5'>Send a message!</Typography>
					<form className = {classes.form} onSubmit = {(event) => this.submitNewChat(event)}>
						<FormControl fullWidth>
							<InputLabel htmlFor = 'new-chat-username'>
								Enter your friend's email
							</InputLabel>
							<Input required className = {classes.input} autoFocus onChange = {(event) => this.userTyping('username', event)} 
								id = 'new-chat-username'></Input>
						</FormControl>
						<FormControl fullWidth>
							<InputLabel htmlFor = 'new-chat-message'>
								Enter your message
							</InputLabel>
							<Input required className = {classes.input} onChange = {(event) => this.userTyping('message', event)}
							id = 'new-chat-message'></Input>
						</FormControl>
						<Button fullWidth className ={classes.submit} variant = 'contained' 
						color = 'primary' type = 'submit'>Send</Button>
					</form>
				</Paper>
			</main>
		)
	}
}

export default withStyles(styles)(NewChatComponent);

