
import * as firebase from 'firebase'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6XyaVj5pcsKsbmexNCpsGs2_u_7Y9jHo",
  authDomain: "noodles-22e51.firebaseapp.com",
  projectId: "noodles-22e51",
  storageBucket: "noodles-22e51.appspot.com",
  messagingSenderId: "520739380428",
  appId: "1:520739380428:web:9e2d4bfab5740b269a3669",
  measurementId: "G-NRB74PYJ92"
};

export default (firebaseConfig=firebase.initializeApp(firebaseConfig));