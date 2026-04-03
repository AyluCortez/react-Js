
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBlTk_vV2KvxgrKTob-pSNmUo3vKnQzBRM",
  authDomain: "black-shop-cortez.firebaseapp.com",
  projectId: "black-shop-cortez",
  storageBucket: "black-shop-cortez.firebasestorage.app",
  messagingSenderId: "971631651004",
  appId: "1:971631651004:web:38442d1b73de33d08708b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//obtener los datos 
export const db = getFirestore(app);