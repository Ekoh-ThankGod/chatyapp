(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{119:function(e,t,a){e.exports=a(162)},124:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),o=a.n(s);a(124),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(102),c=a.n(i),l=(a(125),a(52)),u=a(41),p=a(18),m=a(19),h=a(21),d=a(20),g=a(51),f=function(e){return{main:Object(g.a)({width:"auto",display:"block",marginLeft:3*e.spacing(1),marginRight:3*e.spacing(1)},e.breakpoints.up(400+3*e.spacing(1)*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing(1),"px ").concat(3*e.spacing(1),"px ").concat(3*e.spacing(1),"px")},form:{width:"100%",marginTop:e.spacing(1)},submit:{marginTop:3*e.spacing(1)},noAccountHeader:{width:"100%"},signUpLink:{width:"100%",textDecoration:"none",color:"#303f9f",fontWeight:"bolder"},errorText:{color:"red",textAlign:"center"}}},b=a(190),w=a(200),x=a(191),v=a(189),E=a(71),C=a.n(E),y=a(187),k=a(77),S=a(192),O=a(15),T=a.n(O),j=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).userTyping=function(t,a){switch(t){case"email":e.setState({email:a.target.value});break;case"password":e.setState({password:a.target.value})}},e.submitLogin=function(t){t.preventDefault(),T.a.auth().signInWithEmailAndPassword(e.state.email,e.state.password).then((function(){e.props.history.push("/dashboard")}),(function(t){e.setState({loginError:"server Error"}),console.log(t)}))},e.state={email:null,password:null,loginError:""},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("main",{className:t.main},r.a.createElement(y.a,null),r.a.createElement(v.a,{className:t.paper},r.a.createElement(k.a,{component:"h1",variant:"h5"},"Login In!"),r.a.createElement("form",{className:t.form,onSubmit:function(t){return e.submitLogin(t)}},r.a.createElement(b.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(w.a,{htmlFor:"login-email-input"},"Enter Your Email"),r.a.createElement(x.a,{autoComplete:"email",autoFocus:!0,id:"login-email-input",onChange:function(t){return e.userTyping("email",t)}})),r.a.createElement(b.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(w.a,{htmlFor:"login-password-input"},"Enter Your Password"),r.a.createElement(x.a,{type:"password",id:"login-password-input",onChange:function(t){return e.userTyping("password",t)}})),r.a.createElement(S.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Login In")),this.state.loginError?r.a.createElement(k.a,{className:t.errorText,component:"h5",variant:"h6"},"Incorrect Login Information"):null,r.a.createElement(k.a,{component:"h5",variant:"h6",className:t.noAccountHeader},"Don't Have An Account?"),r.a.createElement(l.b,{className:t.signUpLink,to:"/signup"},"Sign Up!")))}}]),a}(r.a.Component),N=C()(f)(j),F=function(e){return{main:Object(g.a)({width:"auto",display:"block",marginLeft:3*e.spacing(1),marginRight:3*e.spacing(1)},e.breakpoints.up(400+3*e.spacing(1)*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing(1),"px ").concat(3*e.spacing(1),"px ").concat(3*e.spacing(1),"px")},form:{width:"100%",marginTop:e.spacing(1)},submit:{marginTop:3*e.spacing(1)},hasAccountHeader:{width:"100%"},logInLink:{width:"100%",textDecoration:"none",color:"#303f9f",fontWeight:"bolder"},errorText:{color:"red",textAlign:"center"}}},I=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).submitSignUp=function(t){t.preventDefault(),e.state.password===e.state.passwordConfirmation?T.a.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(t){var a={email:t.user.email};T.a.firestore().collection("users").doc(e.state.email).set(a).then((function(){e.props.history.push("/dashboard")}),(function(t){console.log(t),e.setState({signupError:"Failed to add useraaaa"})}))}),(function(t){console.log(t),e.setState({signupError:"Failed to add user"})})):e.setState({signupError:"Passwords do not match"})},e.userTyping=function(t,a){switch(t){case"email":e.setState({email:a.target.value});break;case"password":e.setState({password:a.target.value});break;case"passwordConfirmation":e.setState({passwordConfirmation:a.target.value})}},e.state={email:null,password:null,passwordConfirmation:null,signupError:""},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("main",{className:t.main},r.a.createElement(y.a,null),r.a.createElement(v.a,{className:t.paper},r.a.createElement(k.a,{component:"h1",variant:"h5"},"Sign Up!"),r.a.createElement("form",{className:t.form,onSubmit:function(t){return e.submitSignUp(t)}},r.a.createElement(b.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(w.a,{htmlFor:"signup-email-input"}," Enter Your Email"),r.a.createElement(x.a,{autoComplete:"email",autoFocus:!0,id:"signup-email-input",onChange:function(t){return e.userTyping("email",t)}})),r.a.createElement(b.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(w.a,{htmlFor:"signup-password-input"},"Create A Password"),r.a.createElement(x.a,{type:"password",id:"signup-password-input",onChange:function(t){return e.userTyping("password",t)}})),r.a.createElement(b.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(w.a,{htmlFor:"signup-password-confirmation-input"},"Confirm Your Password"),r.a.createElement(x.a,{type:"password",id:"signup-password-confirmation-input",onChange:function(t){return e.userTyping("passwordConfirmation",t)}})),r.a.createElement(S.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Submit"),this.state.signupError?r.a.createElement(k.a,{className:t.errorText,component:"h5",variant:"h6"},this.state.signupError):null,r.a.createElement(k.a,{component:"h5",variant:"h6",className:t.hasAccountHeader},"Already Have An Account?"),r.a.createElement(l.b,{className:t.logInLink,to:"/"},"Login In"))))}}]),a}(r.a.Component),A=C()(F)(I),W=a(13),B=a.n(W),R=a(33),D=a(7),L=a(193),U=a(194),H=a(196),M=a(195),V=a(201),z=function(e){return{root:{backgroundColor:e.palette.background.paper,height:"calc(100% - 35px)",position:"absolute",left:"0",width:"300px",boxShadow:"0px 0px 2px black"},listItem:{cursor:"pointer"},newChatBtn:{borderRadius:"0px"},unreadMessage:{color:"red",position:"absolute",top:"0",right:"5px"}}},q=a(198),K=a(197),P=a(107),Y=a.n(P),J=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).newChat=function(){e.props.newChatBtnFn()},e.selectChat=function(t){e.props.selectChatFn(t)},e.userIsSender=function(t){return t.messages[t.messages.length-1].sender===e.props.userEmail},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return this.props.chats.length>0?r.a.createElement("main",{className:t.root},r.a.createElement(S.a,{variant:"contained",fullWidth:!0,color:"primary",className:t.newChatBtn,onClick:this.newChat},"New Message"),r.a.createElement(L.a,null,this.props.chats.map((function(a,n){return r.a.createElement("div",{key:n},r.a.createElement(U.a,{onClick:function(){return e.selectChat(n)},className:t.listItem,alignItems:"flex-start",selected:e.props.selectedChatIndex===n},r.a.createElement(M.a,null,r.a.createElement(V.a,{alt:"Remy sharp"},void 0===a?a.users.filter((function(t){return t!==e.props.userEmail}))[0].split("")[0]:null)),r.a.createElement(H.a,{primary:a.users.filter((function(t){return t!==e.props.userEmail}))[0],secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{component:"span",color:"textPrimary"},void 0===a?a.messages[a.messages.length-1].message.tostring(0,30):null))}),!1!==a.receiverHasRead||e.userIsSender(a)?null:r.a.createElement(K.a,null,r.a.createElement(Y.a,{className:t.unreadMessage}))),r.a.createElement(q.a,null))})))):r.a.createElement("main",{className:t.root},r.a.createElement(S.a,{variant:"contained",fullWidth:!0,onClick:this.newChat,className:t.newChatBtn,color:"primary"},"New Message"),r.a.createElement(L.a,null))}}]),a}(r.a.Component),Q=Object(D.a)(z)(J),Z=function(e){return{signOutBtn:{position:"absolute",bottom:"0px",left:"0px",width:"300px",borderRadius:"0px",backgroundColor:"#227092",height:"35px",boxShadow:"0px 0px 2px black",color:"white"}}},$=function(e){return{content:{height:"calc(100vh - 100px)",overflow:"auto",padding:"25px",marginLeft:"300px",boxSizing:"border-box",overflowY:"scroll",top:"50px",width:"calc(100% - 300px)",position:"absolute",backgroundColor:"white"},userSent:{float:"left",clear:"both",padding:"20px",boxSizing:"border-box",wordWrap:"break-word",marginTop:"10px",backgroundColor:"#707BC4",color:"white",width:"300px",borderRadius:"10px"},friendSent:{float:"right",clear:"both",padding:"20px",boxSizing:"border-box",wordWrap:"break-word",marginTop:"10px",backgroundColor:"#707BC4",color:"white",width:"300px",borderRadius:"10px"},chatHeader:{width:"calc(100% - 301px)",height:"50px",backgroundColor:"#344195",position:"fixed",marginLeft:"301px",fontSize:"18px",textAlign:"center",color:"white",paddingTop:"10px",boxSizing:"border-box"}}},_=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).componentDidUpdate=function(){var e=document.getElementById("chatview-container");e&&e.scrollTo(0,e.scrollHeight)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.chat,n=e.user;return void 0===a?r.a.createElement("main",{id:"chatview-container",className:t.content}," "):r.a.createElement("div",null,r.a.createElement("div",{className:t.chatHeader},"Your conversation with ",a.users.filter((function(e){return e!==n}))[0]),r.a.createElement("main",{id:"chatview-container",className:t.content},a.messages.map((function(e,a){return r.a.createElement("div",{key:a,className:e.sender===n?t.userSent:t.friendSent},e.message)}))))}}]),a}(r.a.Component),G=Object(D.a)($)(_),X=a(199),ee=a(108),te=a.n(ee),ae=function(e){return{sendBtn:{color:"blue",cursor:"pointer","&:hover":{color:"gray"}},chatTextBoxContainer:{position:"absolute",bottom:"15px",left:"315px",boxSizing:"border-box",overflow:"auto",width:"calc(100% - 300px - 50px)"},chatTextBox:{width:"calc(100% - 25px)"}}},ne=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).userTyping=function(t){return 13===t.keyCode?e.submitMessage():e.setState({chatText:t.target.value})},e.messageValid=function(e){return e&&e.replace(/\s/g,"").length},e.userClickedInput=function(){e.props.messageReadFn()},e.submitMessage=function(){e.messageValid(e.state.chatText)&&(e.props.submitMessageFn(e.state.chatText),document.getElementById("chattextbox").value="")},e.state={chatText:""},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.chatTextBoxContainer},r.a.createElement(X.a,{placeholder:"Type your message",onKeyUp:function(t){return e.userTyping(t)},id:"chattextbox",className:t.chatTextBox,onFocus:this.userClickedInput}),r.a.createElement(te.a,{onClick:function(){return e.submitMessage()},className:t.sendBtn}))}}]),a}(r.a.Component),re=Object(D.a)(ae)(ne),se=function(e){return{main:Object(g.a)({width:"auto",display:"block",marginLeft:3*e.spacing(),marginRight:3*e.spacing()},e.breakpoints.up(400+3*e.spacing()*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{padding:"".concat(2*e.spacing(),"px ").concat(3*e.spacing(),"px ").concat(3*e.spacing(),"px"),position:"absolute",width:"350px",top:"50px",left:"calc(50% + 150px - 175px)"},input:{},form:{width:"100%",marginTop:e.spacing()},submit:{marginTop:3*e.spacing()},errorText:{color:"red",textAlign:"center"}}},oe=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).userTyping=function(t,a){switch(t){case"username":e.setState({username:a.target.value});break;case"message":e.setState({message:a.target.value})}},e.goToChat=function(){return e.props.goToChatFn(e.buildDockey(),e.state.message)},e.buildDockey=function(){return[T.a.auth().currentUser.email,e.state.username].sort().join(":")},e.chatExists=Object(R.a)(B.a.mark((function t(){var a,n;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.buildDockey(),t.next=3,T.a.firestore().collection("chat").doc(a).get();case 3:return n=t.sent,console.log(n.exists),t.abrupt("return",n.exists);case 6:case"end":return t.stop()}}),t)}))),e.userExists=Object(R.a)(B.a.mark((function t(){var a,n;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.a.firestore().collection("users").get();case 2:return a=t.sent,n=a.docs.map((function(e){return e.data().email})).includes(e.state.username),console.log(n),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)}))),e.createChat=function(){e.props.newChatSubmitFn({sendTo:e.state.username,message:e.state.message})},e.submitNewChat=function(){var t=Object(R.a)(B.a.mark((function t(a){var n;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,e.userExists();case 3:if(n=t.sent,console.log(n),!n){t.next=10;break}return t.next=8,e.chatExists();case 8:t.sent?e.goToChat():e.createChat();case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={username:null,message:null},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("main",{className:t.main},r.a.createElement(y.a,null),r.a.createElement(v.a,{className:t.paper},r.a.createElement(k.a,{component:"h1",variant:"h5"},"Send a message!"),r.a.createElement("form",{className:t.form,onSubmit:function(t){return e.submitNewChat(t)}},r.a.createElement(b.a,{fullWidth:!0},r.a.createElement(w.a,{htmlFor:"new-chat-username"},"Enter your friend's email"),r.a.createElement(x.a,{required:!0,className:t.input,autoFocus:!0,onChange:function(t){return e.userTyping("username",t)},id:"new-chat-username"})),r.a.createElement(b.a,{fullWidth:!0},r.a.createElement(w.a,{htmlFor:"new-chat-message"},"Enter your message"),r.a.createElement(x.a,{required:!0,className:t.input,onChange:function(t){return e.userTyping("message",t)},id:"new-chat-message"})),r.a.createElement(S.a,{fullWidth:!0,className:t.submit,variant:"contained",color:"primary",type:"submit"},"Send"))))}}]),a}(r.a.Component),ie=Object(D.a)(se)(oe),ce=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).unSubscribeFromAuth=null,e.buildDocKey=function(t){return[e.state.email,t].sort().join(":")},e.submitMessage=function(t){var a=e.state,n=a.chats,r=a.selectedChat,s=a.email,o=e.buildDocKey(n[r].users.filter((function(e){return e!==s}))[0]);T.a.firestore().collection("chat").doc(o).update({messages:T.a.firestore.FieldValue.arrayUnion({sender:e.state.email,message:t,timeStamp:Date.now()}),receiverHasRead:!1})},e.goToChat=function(){var t=Object(R.a)(B.a.mark((function t(a,n){var r,s,o;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.state.chats,s=a.split(":"),o=r.find((function(e){return s.every((function(t){return e.users.includes(t)}))})),console.log("chat is ",o),e.setState({newChatFormVisible:!1}),t.next=7,e.selectChat(r.indexOf(o));case 7:e.submitMessage(n);case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.newChatSubmit=function(){var t=Object(R.a)(B.a.mark((function t(a){var n;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a),n=e.buildDocKey(a.sendTo),t.next=4,T.a.firestore().collection("chat").doc(n).set({receiverHasRead:!1,users:[e.state.email,a.sendTo],messages:[{message:a.message,sender:e.state.email}]});case 4:e.setState({newChatFormVisible:!1}),e.selectChat(e.state.chats.length-1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectChat=function(){var t=Object(R.a)(B.a.mark((function t(a){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({selectedChat:a,newChatFormVisible:!1});case 2:e.messageRead();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.newChatBtnClicked=function(){e.setState({newChatFormVisible:!0,selectedChat:null})},e.messageRead=function(){var t=e.state,a=t.chats,n=t.selectedChat,r=t.email;if(void 0===a){var s=e.buildDocKey(a[n].users.filter((function(e){return e!==r}))[0]);e.clickedChatWhereNotTheSender(n)?T.a.firestore().collection("chat").doc(s).update({receiverHasRead:!0}):console.log("click message where the user is the sender")}},e.clickedChatWhereNotTheSender=function(t){var a=e.state,n=a.chats,r=a.email;return n[t].messages[n[t].messages.length-1].sender!==r},e.signOut=function(){return T.a.auth().signOut()},e.state={selectedChat:null,newChatFormVisible:!1,email:null,chats:[]},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unSubscribeFromAuth=T.a.auth().onAuthStateChanged(function(){var t=Object(R.a)(B.a.mark((function t(a){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=4;break}e.props.history.push("/"),t.next=6;break;case 4:return t.next=6,T.a.firestore().collection("chat").where("users","array-contains",a.email).onSnapshot(function(){var t=Object(R.a)(B.a.mark((function t(n){var r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.docs.map((function(e){return e.data()})),t.next=3,e.setState({email:a.email,chats:r});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unSubscribeFromAuth()}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.chats,n=e.selectedChat,s=e.newChatFormVisible,o=this.props.classes;return console.log(a),r.a.createElement("div",null,r.a.createElement(Q,{history:this.props.history,newChatBtnFn:this.newChatBtnClicked,selectChatFn:this.selectChat,userEmail:t,chats:a,selectedChatIndex:n}),r.a.createElement(S.a,{onClick:this.signOut,className:o.signOutBtn},"Sign Out"),s?null:r.a.createElement(G,{user:t,chat:a[n]}),null===n||s?null:r.a.createElement(re,{messageReadFn:this.messageRead,submitMessageFn:this.submitMessage}),r.a.createElement("div",null,s?r.a.createElement(ie,{goToChatFn:this.goToChat,newChatSubmitFn:this.newChatSubmit}):null))}}]),a}(r.a.Component),le=Object(D.a)(Z)(ce);c.a.initializeApp({apiKey:"AIzaSyADiKSxLj4oVm1b2iRIJUZ8wEI_4hp6NQo",authDomain:"chatapp-8855e.firebaseapp.com",databaseURL:"https://chatapp-8855e.firebaseio.com",projectId:"chatapp-8855e",storageBucket:"chatapp-8855e.appspot.com",messagingSenderId:"113359370601",appId:"1:113359370601:web:fa2366f04cf87ab5f065f8"});var ue=r.a.createElement(l.a,null,r.a.createElement("div",{id:"routing-container"},r.a.createElement(u.a,{exact:!0,path:"/",component:N}),r.a.createElement(u.a,{exact:!0,path:"/signup",component:A}),r.a.createElement(u.a,{exact:!0,path:"/dashboard",component:le})));o.a.render(ue,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[119,1,2]]]);
//# sourceMappingURL=main.e14b1a02.chunk.js.map