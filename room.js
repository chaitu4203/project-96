
var firebaseConfig = {
  apiKey: "AIzaSyCkKJzw9NV7Et3VmfKhgG5MAlBULWt8L6A",
  authDomain: "project-94-chat-app.firebaseapp.com",
  databaseURL: "https://project-94-chat-app-default-rtdb.firebaseio.com",
  projectId: "project-94-chat-app",
  storageBucket: "project-94-chat-app.appspot.com",
  messagingSenderId: "83255945513",
  appId: "1:83255945513:web:40384ea3027667a461af38"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom(){
    window.alert("You have successfully added a new room " + "named" + "'#" + document.getElementById("room_name").value + "'") 
}
  
  function logout(){
      window.location.replace("index.html");
      window.alert("Are You Sure you want to logout.Clicking on 'Ok' will delete your account,rooms created by you.But you can still login with your username as a new user.Let's Chat Team")
  }
  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();
