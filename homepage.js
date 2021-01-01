var firebaseConfig = {
  apiKey: "AIzaSyCeBBBdlQFzKcC7hX-IIih_mDITKlzsUvw",
  authDomain: "parlons-database.firebaseapp.com",
  databaseURL: "https://parlons-database-default-rtdb.firebaseio.com",
  projectId: "parlons-database",
  storageBucket: "parlons-database.appspot.com",
  messagingSenderId: "1093542039452",
  appId: "1:1093542039452:web:be08f8dab14a7f4c9f8259"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  

username = localStorage.getItem("Username")
document.getElementById("welcome").innerHTML = "Welcome " + username + "."

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
console.log("Room Names: " + Room_names)
row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>" + Room_names + "</div> <hr>"
document.getElementById("output").innerHTML +=row
 //End code
 });});} 
 getData();
 function goToRoom(){
   var room_name = document.getElementById("inputRoomName").value
   firebase.database().ref("/").child(room_name).update({
     purpose: "room name " + room_name + " has been added"
   })
   window.location("room_page.html")
 }


function addRoom(){  
  var roomName = document.getElementById("inputRoomName").value; 
localStorage.setItem("Room Name", roomName) 
}


function logout(){
  localStorage.removeItem("Username")
  window.location = "login.html" 
}