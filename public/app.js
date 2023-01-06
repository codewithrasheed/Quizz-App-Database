// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref,set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtkSJWX2G8tbrukqAt1YPpus5ZbQTYL7g",
  authDomain: "javascript-quizz-app.firebaseapp.com",
  projectId: "javascript-quizz-app",
  storageBucket: "javascript-quizz-app.appspot.com",
  messagingSenderId: "152164845713",
  appId: "1:152164845713:web:2fe622f319ff07b5569730",
  measurementId: "G-E36C737WZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();






var question = document.getElementById("question");
var questionNum = document.getElementById("questionNum");
var ansParent = document.getElementById("ansParent");
var main = document.getElementById("main");
var indexNum = 0;
var marks = 0;

var name1 = prompt('Enter Name')

var questions = [
    {
      numb: 1,
      question: "What does HTML stands for?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language",
      ],
    },
    {
      numb: 2,
      question: "What does CSS stands for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      numb: 3,
      question: "What does PHP stands for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      numb: 4,
      question: "What does SQL stands for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      numb: 5,
      question: "What does XML stands for?",
      answer: "eXtensible Markup Language",
      options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language",
      ],
    },
      {
      numb: 6,
      question: "JavaScript is a/an ______ Language?",
      answer: "Object Oriented",
      options: [
        "Object Oriented",
        "Object Based",
        "Procedual",
        "None of the Above"
      ]
    },
      {
      numb: 7,
      question: "Which of the following is a client site language?",
      answer: "JavaScript",
      options: [
        "Java",
        "C",
        "Python",
        "JavaScript"
      ]
    },
      {
      numb: 8,
      question: "What year was JavaScript launched?",
      answer: "1995",
      options: [
        "1996",
        "1995",
        "1994",
        "None of the Above"
      ]
    },
      {
      numb: 9,
      question: "Which language runs in a web browser?",
      answer: "JavaScript",
      options: [
        "C++",
        "Python",
        "JavaScript",
        "Java"
      ]
    },
      {
      numb: 10,
      question: "What does OOP stands for?",
      answer: "Object Oriented Programming",
      options: [
        "Object Oriented Programming",
        "Object Open Programming",
        "Oriented Object Programming",
        "None of the Above"
      ]
    },
      {
      numb: 11,
      question: "Which one is a JavaScript Framework?",
      answer: "React",
      options: [
        "Django",
        "React",
        "Flask",
        "Laravel"
      ]
    },
      {
      numb: 12,
      question: "Which one is a Backend Language?",
      answer: "PHP",
      options: [
        "PHP",
        "HTML",
        "React",
        "C++"
      ]
    },
      {
      numb: 13,
      question: "Which Language is best for Artificial intelligence?",
      answer: "Python",
      options: [
        "React",
        "Laravel",
        "Python",
        "Sass"
      ]
    },
      {
      numb: 14,
      question: "What does MERN stands for?",
      answer: "Mongo Express React Node",
      options: [
        "Mongo Express React Node",
        "Mongo ESPOL Ruby NPL",
        "Mercury ECMAScript6 Rust NewtonScript",
        "None of the Above"
      ]
    },
    {
      numb: 15,
      question: "Which programming language is best for blockchain??",
      answer: "Solidity",
      options: [
        "Solidity",
        "Dart",
        "Sass",
        "R++"
      ]
    },
  ];



  
  function showQuestion() {
    question.innerHTML = questions[indexNum].question;
    questionNum.innerHTML = "Question # " + (indexNum + 1) + "/" + questions.length;
    ansParent.innerHTML = "";
    for (var i = 0; i < questions[indexNum].options.length; i++) {
      ansParent.innerHTML += `<div class="col-md-6 py-2">
      <button onclick="checkAns('${questions[indexNum].options[i]}','${questions[indexNum].answer}')" class="btn btn-primary px-5 rounded-pill w-50">
      ${questions[indexNum].options[i]}
      </button>
  </div>`;
    }
  }
  showQuestion();
  
 window.skipQuestion = function skipQuestion() {
    indexNum++;
    showQuestion();
  }
  
  window.checkAns = function (a, b) {
    if (a == b) {
      // marks++;
      var number = marks++
    }
    if(indexNum + 1 == questions.length) {
      main.innerHTML = `<li>Hi ${name1}, your Marks are: ${marks}/15</li>`

      let obj ={
        name: name1,
        score: marks,
      }
      obj.id = Math.random().toString().slice(2)
      const refernce = ref(database, `Quizz_Score/${obj.id}`)
      set(refernce,obj)
    }
    else{
      skipQuestion(); 

    }
  } 
  