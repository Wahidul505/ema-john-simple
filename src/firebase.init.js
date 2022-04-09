import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyADtf0RfKg-_7LVpLHEl4-OfcpMglPVD5M",
  authDomain: "ema-john-simple-5a286.firebaseapp.com",
  projectId: "ema-john-simple-5a286",
  storageBucket: "ema-john-simple-5a286.appspot.com",
  messagingSenderId: "730061412359",
  appId: "1:730061412359:web:1107e9fad7ae57363572a2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;