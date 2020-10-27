import firebase from "firebase";

import "firebase/auth"; //auth
import "firebase/database"; //database can like sql , mongodb
import "firebase/storage"; //storage ///images , videos , photos , pdf , fonts

const firebaseConfig = {
  apiKey: "AIzaSyCFimm_igM5zaQtJMEPOiuSVuUeQUFGDrM",
  authDomain: "hotstar-11e9f.firebaseapp.com",
  databaseURL: "https://hotstar-11e9f.firebaseio.com",
  projectId: "hotstar-11e9f",
  storageBucket: "hotstar-11e9f.appspot.com",
  messagingSenderId: "676514026295",
  appId: "1:676514026295:web:71a40d34ac5417386680b2",
};

//initialize firebase and react application
firebase.initializeApp(firebaseConfig);

export default firebase;
