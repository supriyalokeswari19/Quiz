const questions = [
  {
    question: "Q1.Which company developed Java?",
    options: ["A. Microsoft", "B. Sun Microsystems", "C. Oracle", "D. Google"],
    answer: "B"
  },
  {
    question: "Q2.What is the size of int in Java?",
    options: ["A. 2 bytes", "B. 4 bytes", "C. 8 bytes", "D. 1 byte"],
    answer: "B"
  },
  {
    question: "Q3.Which keyword is used for inheritance?",
    options: ["A. extends", "B. implements", "C. inherits", "D. interface"],
    answer: "A"
  },
  {
    question: "Q4.Which of these is not a Java feature?",
    options: ["A. Object-oriented", "B. Use of pointers", "C. Portable", "D. Dynamic"],
    answer: "B"
  },
  {
    question: "Q5.Which package contains the Scanner class?",
    options: ["A. java.io", "B. java.util", "C. java.lang", "D. java.awt"],
    answer: "B"
  },
  {
    question: "Q6.What is the size of a char in Java?",
    options: ["A. 1 byte", "B. 2 bytes", "C. 4 bytes", "D. Depends on the system"],
    answer: "B"
  },
  {
    question: "Q7.Default value of a reference variable in Java?",
    options: ["A. 0", "B. undefined", "C. null", "D. empty string"],
    answer: "C"
  },
  {
    question: "Q8.Valid package declaration?",
    options: ["A. package Java.util;", "B. Package java.util;", "C. package java.util;", "D. pack java.util;"],
    answer: "C"
  },
  {
    question: "Q9.Method to start a thread in Java?",
    options: ["A. begin()", "B. run()", "C. start()", "D. init()"],
    answer: "C"
  },
  {
    question: "Q10.Keyword to prevent inheritance?",
    options: ["A. static", "B. private", "C. final", "D. protected"],
    answer: "C"
  }
];

let currentQ = 0;
let score = 0;
let timer;
let timeLeft = 10;
function startQuiz() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  loadQuestion();  // starts the quiz
}

function loadQuestion() {
  if (currentQ >= questions.length) {
    document.getElementById("quiz-box").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score").textContent = score;
    return;
  }

  const q = questions[currentQ];
  document.getElementById("question").textContent = q.question;

  const optionsList = document.getElementById("options");
  optionsList.innerHTML = "";

  q.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => checkAnswer(option.charAt(0));
    optionsList.appendChild(li);
  });

  resetTimer();
}

function checkAnswer(selected) {
  if (selected === questions[currentQ].answer) {
    score++;
  }
  clearInterval(timer);
  nextQuestion();
}

function nextQuestion() {
  currentQ++;
  loadQuestion();
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 10;
  document.getElementById("time").textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

window.onload = loadQuestion;
