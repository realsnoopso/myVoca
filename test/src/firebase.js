//firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5uwIv8O7mnpFTYdHmClqRbtlm5B6RbdI",
  authDomain: "sparta-react-demo-54fdc.firebaseapp.com",
  projectId: "sparta-react-demo-54fdc",
  storageBucket: "sparta-react-demo-54fdc.appspot.com",
  messagingSenderId: "378163445007",
  appId: "1:378163445007:web:ae3cd777a8081425e6927a",
  measurementId: "G-B5FRBNC06H"
};

// firebaseConfig 정보로 firebase 시작
initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장


// 필요한 곳에서 사용할 수 있도록 내보내기
export const db = getFirestore();
