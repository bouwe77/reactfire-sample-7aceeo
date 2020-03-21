import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import {
  FirebaseAppProvider,
  useFirestoreDocData,
  useFirestore,
} from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyAhFEaoaRaipzEAEhqLjJSbJ1kP9wfTSLI",
  authDomain: "nitwit-e650a.firebaseapp.com",
  databaseURL: "https://nitwit-e650a.firebaseio.com",
  projectId: "nitwit-e650a",
  storageBucket: "nitwit-e650a.appspot.com",
  messagingSenderId: "752263219686",
  appId: "1:752263219686:web:485cc582e284e71350ae27",
  measurementId: "G-7BNPTJ6RTR"
};

function Burrito() {
  const burritoRef = useFirestore()
    .collection("posts")
    .doc("BaGaRbu508gXNARuyl5X");

  const burrito = useFirestoreDocData(burritoRef, {
    startWithValue: {
      content: "..."
    }
  });

  return <p>{burrito.content}!</p>;
}

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Burrito />
    </FirebaseAppProvider>
  );
}

ReactDOM.render(<App/>,document.getElementById("root"))
