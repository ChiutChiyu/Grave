import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAgOPD5DDtjExQaVeu6VLFI7CMP9i8VOQw",
  authDomain: "projectchat01-d16bc.firebaseapp.com",
  databaseURL: "https://projectchat01-d16bc-default-rtdb.firebaseio.com",
  projectId: "projectchat01-d16bc",
  storageBucket: "projectchat01-d16bc.appspot.com",
  messagingSenderId: "163313653543",
  appId: "1:163313653543:web:cd1c193158d8a76811bb02",
  measurementId: "G-VG80CY31FG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { auth, database, storage };
