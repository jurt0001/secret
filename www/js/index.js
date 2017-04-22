/*****************************************************************
File: index.js
Author: Christian Jurt & Eric Lachapelle
Description: This is an app that lets you take photos and hide message in them and send them to friends as well as to recieve and extract messages from photos.

Version: 0.0.1
Updated: April 24, 2017

*****************************************************************/

"use strict";

var userId = "";
var userGuid = "";


        if(document.deviceready){
        	document.addEventListener('deviceready', init, false);
		}else{
        	document.addEventListener('DOMContentLoaded', init, false);
		}


        function init() {
            
        let register = document.getElementById("register");
        register.addEventListener("click", regUser);
            
        let login = document.getElementById("login");
        login.addEventListener("click", loginUser);
            
        }
        
        function regUser() {
    
            console.log("regUser is working");
            
        let name = document.getElementById("username").value;
        let email = document.getElementById("email").value; 
            
         if(email == "" || username == ""){
                
                alert("All fields are required");
                
            }else { 
                
                
        let url = "https://griffis.edumedia.ca/mad9022/steg/register.php";    
        let req = new Request(url);    
        let formData = new FormData();   
        formData.append("user_name", name);
        formData.append("email", email);
                
        console.log(formData);        
            
           let opts = {
        method: 'post'
        , mode: 'cors'
        , body: formData
    };
           
           fetch(req, opts).then(function (response) {
               console.log(response);
        return response.json();
    }).then(function (data) {
        
        console.log(data.code);       
     
        if(data.code == 0){
            
        userId = data.user_id;
        userGuid = data.user_guid;  
        showMessages();    
            
        }else{
            alert(data.message); 
        }       
               
               
            
        })
            
              .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });
            
            
    }
                   
        }
                 
        function loginUser() {
    
            console.log("loginuser is working");
    
     let name = document.getElementById("username").value;
    let email = document.getElementById("email").value; 
            
         if(email == "" || username == ""){
                
                alert("All fields are required");
                
            }else { 
                
                
        let url = "https://griffis.edumedia.ca/mad9022/steg/login.php";    
        let req = new Request(url);    
        let formData = new FormData();   
        formData.append("username", name);
        formData.append("email", email);
                
        console.log(formData);        
            
           let opts = {
        method: 'post'
        , mode: 'cors'
        , body: formData
    };
           
           fetch(req, opts).then(function (response) {
            console.log(response);   
        return response.json();
    }).then(function (data) {
               
     console.log(data.code); 
        if(data.code == 0){
            
        userId = data.user_id;
        userGuid = data.user_guid;  
        showMessages();    
            
        }else{
            alert(data.message); 
        }       
               
               
            
        })
            
              .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });
            
            
    }
                   
        }
 
        function showMessages(){
    
            console.log("showmessage is working");
    
        let url = "https://griffis.edumedia.ca/mad9022/steg/msg-list.php";    
        let req = new Request(url);    
        let formData = new FormData();   
        formData.append("user_id", userId);
        formData.append("user_guid", userGuid);
                
           let opts = {
        method: 'post'
        , mode: 'cors'
        , body: formData
    };
           
           fetch(req, opts).then(function (response) {
               console.log(response);
        return response.json();
    }).then(function (data) {
               
     console.log(data.code); 
    console.log(data);           
        if(data.code == 0){
            
    
        //build message list with a loop
        //you just need te Message from: username with 
        //a chevron linking to the message details page    
            
//        <li class="table-view-cell media">
//        <a class="navigate-right" href="#message-details"> 
//        <span class="media-object pull-left icon icon-pages"></span>
//        <div class="media-body"> Message from: Christian Jurt </div>
//        </a>
//        </li>    
            
            
        console.log("fetch is working for list");    
            
        }else{
            alert(data.message); 
        }       
                  
        })
            
              .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });
            
            
    }    
    
        function listUsers(){
    
        console.log("ListUsers is working");
    
        let url = "https://griffis.edumedia.ca/mad9022/steg/user-list.php";    
        let req = new Request(url);    
        let formData = new FormData();   
        formData.append("user_id", userId);
        formData.append("user_guid", userGuid);
                
           let opts = {
        method: 'post'
        , mode: 'cors'
        , body: formData
    };
           
           fetch(req, opts).then(function (response) {
               console.log(response);
        return response.json();
    }).then(function (data) {
               
     console.log(data.code); 
    console.log(data);           
        if(data.code == 0){
            
    
        //This is for the send message page.
        //You want to dynmically build a drop menu
        //that contains the list of users from the server.
        //You will select from this list when sending a message.    
            
   
            
            
        console.log("fetch is working for userList");    
            
        }else{
            alert(data.message); 
        }       
                  
        })
            
              .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });
       
    
       
}

        function getMessage(){
    
        console.log("getMessage is working");
    
        let url = "https://griffis.edumedia.ca/mad9022/steg/msg-get.php";    
        let req = new Request(url);    
        let formData = new FormData();   
        formData.append("user_id", userId);
        formData.append("user_guid", userGuid);
                
           let opts = {
        method: 'post'
        , mode: 'cors'
        , body: formData
    };
           
           fetch(req, opts).then(function (response) {
               console.log(response);
        return response.json();
    }).then(function (data) {
               
     console.log(data.code); 
    console.log(data);           
        if(data.code == 0){
            
    
            //load on message details page. This is when you click on a chevron from one of the
            //messages on the list page.
            //you need the photo and the extracted message to show up and which user it came from.
   
            
            
        console.log("fetch is working for getMessage");    
            
        }else{
            alert(data.message); 
        }       
                  
        })
            
              .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });
       
    
       
}

        function deleteMessage(){
    
        console.log("deleteMessage is working");
    
        let url = "https://griffis.edumedia.ca/mad9022/steg/msg-delete.php";    
        let req = new Request(url);    
        let formData = new FormData();   
        formData.append("user_id", userId);
        formData.append("user_guid", userGuid);
                
           let opts = {
        method: 'post'
        , mode: 'cors'
        , body: formData
    };
           
           fetch(req, opts).then(function (response) {
               console.log(response);
        return response.json();
    }).then(function (data) {
               
     console.log(data.code); 
    console.log(data);           
        if(data.code == 0){
            
    
            //load on message details page. This is when you click on a chevron from one of the
            //messages on the list page.
            //you need the photo and the extracted message to show up and which user it came from.
   
            
            
        console.log("fetch is working for deleteMessage");    
            
        }else{
            alert(data.message); 
        }       
                  
        })
            
              .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });
       
    
       
}


//{"baseurl":"https%3A%2F%2Fgriffis.edumedia.ca%2Fmad9022%2Fsteg%2F","methods":
//
//TO REGISTER
//[{"name":"register","endpoint":"register.php","desc":"create a user account",
//                                                                               
//"requires":["user_name","email"]},
//TO LOGIN                                                                              
//{"name":"login","endpoint":"login.php","desc":"login to a user account",
// "requires":["user_name","email"]},
// TO SHOW LIST IF USERS                               
//{"name":"listUsers","endpoint":"user-list.php","desc":"get a list of users and their ids. User must be logged in.","requires":["user_id","user_guid"]},
// TO SHOW LIST OF MESSAGES                                                                             
//{"name":"listMessages","endpoint":"msg-list.php","desc":"get the list of messages for a user from the queue. User must be logged in","requires":["user_id","user_guid"]},
//FOR SENDING MESSAGES                                                                              
//{"name":"sendMessages","endpoint":"msg-send.php","desc":"upload an image to send to a user. User must be logged in. The image field must be a file.",
// "requires":["user_id","user_guid","recipient_id","image"]},
// FOR GETTING A SINLGLE MESSAGE                                                                            
//{"name":"getMessage","endpoint":"msg-get.php","desc":"get the single image for the message. User must be logged in.","requires":["user_id","user_guid","message_id"]},
//FOR DELETING A MESSAGE                                                                              
//{"name":"deleteMessage","endpoint":"msg-delete.php","desc":"delete a message and it's image from the queue on the server. User must be logged in.","requires":["user_id","user_guid","message_id"]}]}
