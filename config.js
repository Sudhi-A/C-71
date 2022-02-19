import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
apiKey: "AIzaSyCgGxxHQK04sDWuCI6bLG0q-g7NDGzLs7Y",
  authDomain: "e-libraryapp-2733a.firebaseapp.com",
  projectId: "e-libraryapp-2733a",
  storageBucket: "e-libraryapp-2733a.appspot.com",
  messagingSenderId: "768040505838",
  appId: "1:768040505838:web:a7cff863d9310fea777eff"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();