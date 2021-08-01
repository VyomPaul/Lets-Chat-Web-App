function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");

    window.location = "kwitter.html";
}

var User_name = localStorage.getItem("user_name");
document.getElementById("player_name").innerHTML = "welcome " + User_name + "!";

function addRoom(){
    room_name = document.getElementById("add_room_text").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("add_room_text", room_name);
    window.location = "Kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+" onclick='reirectToRoomName(this.id)'>#"Room_names+"</div><hr>"
//End code
});});}
getData();

function redirectToRoomName(){
    localStorage.setItem("add_room_text", "room_name");
    window.location = "Kwitter_page.html";
}