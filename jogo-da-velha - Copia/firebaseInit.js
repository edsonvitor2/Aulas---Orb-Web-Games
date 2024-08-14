const firebaseConfig = {
    apiKey: "AIzaSyB91nljc37TqAsTCJScj3Q9Ly1dtzgvc9k",
    authDomain: "jogo-da-velha-6eaed.firebaseapp.com",
    databaseURL: "https://jogo-da-velha-6eaed-default-rtdb.firebaseio.com",
    projectId: "jogo-da-velha-6eaed",
    storageBucket: "jogo-da-velha-6eaed.appspot.com",
    messagingSenderId: "792932183001",
    appId: "1:792932183001:web:72a26384642f480862c7c8"
  };
// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

console.log("Firebase inicializado:", firebase.app().name); // Deve exibir o nome do app, geralmente '[DEFAULT]'

