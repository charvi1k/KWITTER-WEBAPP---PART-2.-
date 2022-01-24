const firebaseConfig = {
  apiKey: "AIzaSyASUxxzDd9R1U-2hZAFO_7VV5Y30xU397Y",
  authDomain: "chatgram-7c2f7.firebaseapp.com",
  databaseURL: "https://chatgram-7c2f7-default-rtdb.firebaseio.com",
  projectId: "chatgram-7c2f7",
  storageBucket: "chatgram-7c2f7.appspot.com",
  messagingSenderId: "55338133452",
  appId: "1:55338133452:web:afe02750fae12dce39df69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name = document.getElementById("user_name").value;
      document.getElementById("user_name").innerHTML = "Welcome" + user_name ;
    
      function addRoom(){
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
               purpose : "adding room name"
        });

        localStorage.setItem("room_name", room_name);
        window.location = "Chatgram_page.html";
      }