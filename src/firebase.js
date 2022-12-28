import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCGBigTkiu08Ro2dFBo-F-l1Hi1s8CMo-E",
    authDomain: "netflix-clone-804ba.firebaseapp.com",
    projectId: "netflix-clone-804ba",
    storageBucket: "netflix-clone-804ba.appspot.com",
    messagingSenderId: "850558216021",
    appId: "1:850558216021:web:996b66b7751d71808ab1dc"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;