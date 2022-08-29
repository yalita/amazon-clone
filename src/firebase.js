
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACU3QAEY3rYEPikD0oZyUFcFR25kRUy1M",
    authDomain: "clone-d803f.firebaseapp.com",
    projectId: "clone-d803f",
    storageBucket: "clone-d803f.appspot.com",
    messagingSenderId: "363408453439",
    appId: "1:363408453439:web:78da791d283b95c54ead8a",
    measurementId: "G-RW8KL3Y8Z2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth()

  export {auth, db};