"use strict";var auth={showLogin:function(){$("".concat(config.mainView)).load("./views/login.html"),window.history.pushState({},"Login","login")},showRegister:function(){$("".concat(config.mainView)).load("./views/register.html"),window.history.pushState({},"Register","register")}},config={mainView:"#view"};function handleShowLogin(){auth.showLogin()}function handleShowRegister(){auth.showRegister()}function handleUrl(e){var i=getUrlParams(e);if(0==Object.keys(i).length){var t=e.split("/"),n=t.pop(),o=urlRedirect[n];e.includes("template")?urlRedirect.userCv(t[t.length-1],n):urlRedirect[n]?o():urlRedirect.landing()}else urlRedirect[i.mode](i.oobCode)}function getUrlParams(e){var i={};e.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(e,t,n){i[t]=n});return i}window.onload=function(){handleUrl(location.href)};var urlRedirect={login:auth.showLogin,register:auth.showRegister};