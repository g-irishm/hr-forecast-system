"use strict";var auth={showLogin:function(){var e=new firebase.auth.OAuthProvider("microsoft.com");firebase.auth().signInWithRedirect(e),firebase.auth().getRedirectResult().then(function(e){console.log("Success: "+JSON.stringify(e))}).catch(function(e){console.log("error"+e)})}},config={mainView:"#view"},firebaseConfig={apiKey:"AIzaSyDL-vEobMb_AeJ6NcEwqWzops9I9C0pR0w",authDomain:"hrforecastsystem.firebaseapp.com",databaseURL:"https://hrforecastsystem.firebaseio.com",projectId:"hrforecastsystem",storageBucket:"",messagingSenderId:"645473796645",appId:"1:645473796645:web:a3539d18ce83b3a73735cc",measurementId:"G-Y7RKP3CTBQ"};function handleShowLogin(){auth.showLogin()}function handleShowRegister(){auth.showRegister()}function handleUrl(e){var t=getUrlParams(e);if(0==Object.keys(t).length){var i=e.split("/"),r=i.pop(),o=urlRedirect[r];e.includes("template")?urlRedirect.userCv(i[i.length-1],r):urlRedirect[r]?o():urlRedirect.landing()}else urlRedirect[t.mode](t.oobCode)}function getUrlParams(e){var t={};e.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(e,i,r){t[i]=r});return t}firebase.initializeApp(firebaseConfig),window.onload=function(){handleUrl(location.href)};var urlRedirect={login:auth.showLogin,register:auth.showRegister};