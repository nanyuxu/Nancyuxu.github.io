function adduser(){
    alert("adding user!");
    var email= document.getElementById("uname").value;
    var password = document.getElementById("upassword").value;
    firebase.auth().createUserWithEmailAndPassword(email,
        password).catch(function(error) {
// Handle Errors here
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("error"+ error.message);
// ...
    });
}


firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
// User is signed in.
        alert(user.email);
        console.log(user.toJSON());
    } else {
// No user is signed in.
        alert("user not signed in");
    }
});

