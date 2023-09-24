import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "sua-chave-api",
  authDomain: "seu-projeto.firebaseapp.com",
  databaseURL: "https://coments-10b24-default-rtdb.firebaseio.com/",
  projectId: "coments",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "seu-id-de-mensagem",
  appId: "seu-app-id",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };