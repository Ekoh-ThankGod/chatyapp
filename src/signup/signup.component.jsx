import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';
import styles from './signup.styles.js';
import {Link} from 'react-router-dom';

class SignUpComponent extends React.Component{
	constructor(){
		super();
		this.state ={
			email: null,
			password: null,
			passwordConfirmation: null,
			signupError: ''
		}
	}

	submitSignUp =(event) =>{
		event.preventDefault();
		// const {password, passwordConfirmation} = this.state;
		if(this.state.password !== this.state.passwordConfirmation){
			this.setState({signupError: 'Passwords do not match'});
			return;
		}

		firebase.auth()
		.createUserWithEmailAndPassword(this.state.email, this.state.password)
		.then(authRes =>{
			const userObj ={
				email: authRes.user.email
			};
			firebase
			.firestore()
			.collection('users')
			.doc(this.state.email)
			.set(userObj)
			.then(() => {
				this.props.history.push('/dashboard')
			}, dbError => {
				console.log(dbError);
				this.setState({signupError: 'Failed to add useraaaa'})
			})
		}, authError => {
			console.log(authError);
			this.setState({signupError: 'Failed to add user'})
		})
	}

	userTyping = (type , event) =>{
		switch(type){
			case 'email': 
				this.setState({email: event.target.value});
				break;
			case 'password':
				this.setState({password: event.target.value});
				break;
			case 'passwordConfirmation': 
				this.setState({passwordConfirmation: event.target.value});
				break;
			default:
				break;
		}
	}

	render(){
		const {classes} = this.props;
		return(
			<main className = {classes.main}>
				<CssBaseline></CssBaseline>
				<Paper className ={classes.paper}>
					<Typography component = 'h1' variant = 'h5' >
						 Sign Up!
					</Typography>
					<form className ={classes.form} onSubmit = {(event) => this.submitSignUp(event)}>
						<FormControl required fullWidth margin ='normal'>
							<InputLabel htmlFor = 'signup-email-input'> Enter Your Email</InputLabel>
							<Input autoComplete = 'email' autoFocus id = 'signup-email-input' onChange = {(event) => this.userTyping('email', event)}></Input>
						</FormControl>
						<FormControl required fullWidth margin ='normal'>
							<InputLabel htmlFor = 'signup-password-input'>Create A Password</InputLabel>
							<Input type = 'password' id ='signup-password-input' onChange = {(event) => this.userTyping('password', event)}></Input>
						</FormControl>
						<FormControl required fullWidth margin ='normal'>
							<InputLabel htmlFor = 'signup-password-confirmation-input'>Confirm Your Password</InputLabel>
							<Input type = 'password' id ='signup-password-confirmation-input' onChange = {(event) => this.userTyping('passwordConfirmation', event)}></Input>
						</FormControl>
						<Button type ='submit' fullWidth variant = 'contained' color = 'primary' className ={classes.submit}>Submit</Button>
						{
							this.state.signupError ? 
							<Typography className ={classes.errorText} component ='h5' variant ='h6'>{this.state.signupError}</Typography> : null
						}
						<Typography component ='h5' variant ='h6' className ={classes.hasAccountHeader}>Already Have An Account?</Typography>
						<Link className = {classes.logInLink} to = '/'>Login In</Link>
					</form>
				</Paper>
			</main>
		)
	}
}

export default withStyles(styles)(SignUpComponent);