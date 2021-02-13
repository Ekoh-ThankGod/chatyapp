import React from 'react';
import TextField from '@material-ui/core/TextField';
import Send from '@material-ui/icons/Send';
import styles from './chatTextBox.styles';
import { withStyles } from '@material-ui/core/styles';

class ChatTextBoxComponent extends React.Component{

	constructor(){
		super();
		this.state = {
			chatText: ''
		}
	}

	userTyping =(event) =>{
		if(event.keyCode === 13){
			return this.submitMessage();
		}
		else{
			return this.setState({chatText: event.target.value})
		}
	}

	messageValid = (txt) => txt && txt.replace(/\s/g, '').length;

	userClickedInput = () =>{
		this.props.messageReadFn();
	}

	submitMessage = () =>{
		if(this.messageValid(this.state.chatText)){
			this.props.submitMessageFn(this.state.chatText);
			document.getElementById('chattextbox').value ='';
		}
	}

	render(){
		const {classes} = this.props;
		return(
			<div className = {classes.chatTextBoxContainer}>
			    <TextField placeholder = 'Type your message'
			    	onKeyUp = {(event) => this.userTyping(event)} id = 'chattextbox'
			    	className = {classes.chatTextBox} onFocus = {this.userClickedInput}>
			    </TextField>
			    <Send onClick = {() => this.submitMessage() } className = {classes.sendBtn}></Send>
			</div>
		)
	}
}

export default withStyles(styles)(ChatTextBoxComponent);
