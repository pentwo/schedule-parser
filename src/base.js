import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBkiAN4OaIgeJHlHbcoLHYssh7P7xaIGcI",
  authDomain: "sushisushi-schedule-parser.firebaseapp.com",
  databaseURL: "https://sushisushi-schedule-parser.firebaseio.com",
  projectId: "sushisushi-schedule-parser",
  storageBucket: "sushisushi-schedule-parser.appspot.com",
  messagingSenderId: "230013440140",
  appId: "1:230013440140:web:6f14def889172bff"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
