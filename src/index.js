import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import LoginComponent from './login/login.component';
import SignUpComponent from './signup/signup.component';
import DashboardComponent from './dashboard/dashboard.component';

const firebaseConfig = {
    apiKey: "AIzaSyADiKSxLj4oVm1b2iRIJUZ8wEI_4hp6NQo",
    authDomain: "chatapp-8855e.firebaseapp.com",
    databaseURL: "https://chatapp-8855e.firebaseio.com",
    projectId: "chatapp-8855e",
    storageBucket: "chatapp-8855e.appspot.com",
    messagingSenderId: "113359370601",
    appId: "1:113359370601:web:fa2366f04cf87ab5f065f8"
  }

firebase.initializeApp(firebaseConfig);

const routing = (
	<Router>
		<div id ='routing-container'>
        
			<Route exact path = '/' component = {LoginComponent}></Route>
			<Route exact path = '/signup' component = {SignUpComponent}></Route>
			<Route exact path = '/dashboard' component = {DashboardComponent}></Route>
		</div>
	</Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
