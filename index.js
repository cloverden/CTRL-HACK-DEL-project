const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCL0QldQvFsD3t7IMS60rWDlElpFyw_53o",
//     authDomain: "digitalfridge-decb3.firebaseapp.com",
//     projectId: "digitalfridge-decb3",
//     storageBucket: "digitalfridge-decb3.firebasestorage.app",
//     messagingSenderId: "934328356489",
//     appId: "1:934328356489:web:e462f70ecdbfc28d780058"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// server listening 
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});