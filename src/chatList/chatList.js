import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import styles from './chatList.styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import NotificationImportant from '@material-ui/icons/NotificationImportant';

class ChatListComponent extends React.Component{

	newChat =() =>{
		this.props.newChatBtnFn();
	}

	selectChat =(index) =>{
		this.props.selectChatFn(index);
	}

	userIsSender =(chat) => chat.messages[chat.messages.length - 1].sender === this.props.userEmail;

	render(){
		const {classes} = this.props;

		if(this.props.chats.length > 0){
				return(
			<main className ={classes.root}>
			   <Button variant = 'contained' fullWidth color = 'primary' 
			   className= {classes.newChatBtn} onClick ={this.newChat}>New Message</Button>
			   <List>
			   	 {
			   	 	this.props.chats.map((chat, index) => {
			   	 		return(
			   	 			<div key = {index}>
			   	 			<ListItem onClick = {() => this.selectChat(index)} className ={classes.listItem} 
			   	 			alignItems ='flex-start' selected ={this.props.selectedChatIndex === index}>
			   	 				<ListItemAvatar >
			   	 					<Avatar alt = 'Remy sharp'>
			   	 						{
			   	 							chat === undefined ?
			   	 							chat.users.filter(user => user !== this.props.userEmail)[0].split('')[0]:
			   	 							null
			   	 						}
			   	 					</Avatar>
			   	 				</ListItemAvatar>
			   	 				<ListItemText primary ={chat.users.filter(user => user !== this.props.userEmail)[0]}
			   	 				secondary ={
			   	 					<React.Fragment>
			   	 						<Typography component ='span' color = 'textPrimary'>
			   	 								{
			   	 									chat === undefined ?
			   	 									chat.messages[chat.messages.length - 1].message.tostring(0,30):
			   	 									null
			   	 								}
			   	 						</Typography>
			   	 					</React.Fragment>
			   	 				}>
	
			   	 				</ListItemText>
			   	 				{
			   	 					chat.receiverHasRead === false && !this.userIsSender(chat) ?
			   	 					<ListItemIcon>
				   	 					<NotificationImportant className = {classes.unreadMessage}>	
				   	 					</NotificationImportant>
			   	 					</ListItemIcon>: null
			   	 				}
			   	 			</ListItem>
			   	 			<Divider>
			   	 				
			   	 			</Divider>
			   	 			</div>
			   	 	)}
			   	 	)
			   	 }
			   </List>
			</main>
		)
		}
		else{
			return(
				<main className = {classes.root}>
					<Button variant = 'contained' fullWidth onClick ={this.newChat}
					 className = {classes.newChatBtn} color = 'primary'>New Message</Button>
					 <List></List>
				 </main>
			)
		}
	}
}

export default withStyles(styles)(ChatListComponent);
