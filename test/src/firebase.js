//firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYxYpJiqgJyN3oy6hWC4l3fuq3prdG9ps",
  authDomain: "voca-3d2b0.firebaseapp.com",
  projectId: "voca-3d2b0",
  storageBucket: "voca-3d2b0.appspot.com",
  messagingSenderId: "478233250942",
  appId: "1:478233250942:web:fa425fb6e51bb3113d9c2f",
  measurementId: "G-SDZ96J4X1N"
};

// firebaseConfig 정보로 firebase 시작
initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장


// 필요한 곳에서 사용할 수 있도록 내보내기
export const db = getFirestore();
