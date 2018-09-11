(function() {

  $(document).ready(init)

  // Initialize Firebase
 var config = {
   apiKey: "AIzaSyCWhIhyFcWw60fmrOJWyy89A_s4YeGeU_c",
   authDomain: "instructor-portal.firebaseapp.com",
   databaseURL: "https://instructor-portal.firebaseio.com",
   projectId: "instructor-portal",
   storageBucket: "instructor-portal.appspot.com",
   messagingSenderId: "337391615201"
 };


  function init() {
    firebase.initializeApp(config);

    $('.collapsible').collapsible();
    $('.fixed-action-btn').floatingActionButton();

    $('#login').click(login);
    $('#signout').click(signOut);
    var title = $('title').text();

    console.log(title);


    if (title !== "South Bend Code School Insctrutor Portal") {
      homePage();
    } else {
      console.log('here');
    }


  }

  function login() {
  var email = $('#email').val();
  var password = $('#password').val();

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function() {
      var thisUser = {
        email: email,
        password: password,
      }
      var user = firebase.auth().currentUser;

        console.log(user);

        if (thisUser.email == user.email) {
          // alert('it worked');
          window.location.replace('instructor.html');
        } else {
          alert('nope');
        }

    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert(errorMessage);

      });


}




function homePage() {
  console.log('you are on the homePage');
  firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
          // window.location = 'home.html'
      }else{
          window.location = 'index.html'
      }
  });
}




function signOut() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    // alert('Successful Signout');
    window.location.replace('index.html');
  }).catch(function(error) {
    // An error happened.
    alert('An error happened.');
  });

}






})();
