
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD4h9xse_-pxRMA05I_Pr1rgasiL5B-nZE",
      authDomain: "practice-class-database.firebaseapp.com",
      databaseURL: "https://practice-class-database-default-rtdb.firebaseio.com",
      projectId: "practice-class-database",
      storageBucket: "practice-class-database.appspot.com",
      messagingSenderId: "827228839756",
      appId: "1:827228839756:web:9388b3a7d2b3e09601f9e9"
    };

    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    
    function addRoom() {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}