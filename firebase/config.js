// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJYgMrSPXRuJUtvjSB7jrvEVTYPg3WlNQ",
  authDomain: "react-native-hw-goit-71cab.firebaseapp.com",
  databaseURL:
    "https://react-native-hw-goit-71cab-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-native-hw-goit-71cab",
  storageBucket: "react-native-hw-goit-71cab.appspot.com",
  messagingSenderId: "123567905529",
  appId: "1:123567905529:web:d8663d3189f5a38b302028",
  measurementId: "G-2W6ZQGTWK3",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
