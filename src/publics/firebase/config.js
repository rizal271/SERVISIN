import Firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyAaX4UnOtdUIpAdPg7N9KJnb2Em9uKMW4s",
    authDomain: "servisinapp.firebaseapp.com",
    databaseURL: "https://servisinapp.firebaseio.com",
    projectId: "servisinapp",
    storageBucket: "",
    messagingSenderId: "491364879432",
    appId: "1:491364879432:web:0995f26b1f4410de"
  };

  let app = Firebase.initializeApp(firebaseConfig);

export const Database = app.database();
export const Auth = app.auth();