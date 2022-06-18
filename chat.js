// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyD79OaYSrSfRaXhCca-tQF0_GyH3bbdmXA",
    authDomain: "project-2-0-31598.firebaseapp.com",
    projectId: "project-2-0-31598",
    storageBucket: "project-2-0-31598.appspot.com",
    messagingSenderId: "249762872549",
    appId: "1:249762872549:web:073b867794e2f301a5680c"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



