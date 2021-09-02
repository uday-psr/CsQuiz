
let questions = [
  {
    id: 1,
    question: "Is Python case sensitive when dealing with identifiers?",
    answer: "Yes",
    options: [
      "Yes",
      "No",
      "machine dependent",
      "none of the mentioned"
    ]
  },
  {
    id: 2,
    question: "Which of the following is an invalid variable?",
    answer: "1st_string",
    options: [
      "my_string_1",
      "1st_string",
      "foo",
      "_"
    ]
  },
  {
    id: 3,
    question: "Why are local variable names beginning with an underscore discouraged?",
    answer: "they are used to indicate a private variables of a class",
    options: [
      "they are used to indicate a private variables of a class",
      "they confuse the interpreter",
      "they are used to indicate global variables",
      "they slow down execution"
    ]
  },
  {
    id: 4,
    question: "Which of the following is not a keyword?",
    answer: "eval",
    options: [
      "eval",
      "assert",
      "nonlocal",
      "pass"
    ]
  },
  {
    id: 5,
    question: "Which of the following is an invalid statement?",
    answer: "a b c = 1000 2000 3000",
    options: [
      "abc = 1,000,000",
      "a b c = 1000 2000 3000",
      "a,b,c = 1000, 2000, 3000",
      "a_b_c = 1,000,000"
    ]
  },
  {
    id: 6,
    question: 'Which is the correct operator for power(xy)?',
    answer: "X**y",
    options: [
      "X^y",
      "X**y",
      "X^^y",
      "None of the mentioned"
    ]
  },
  {
    id: 7,
    question: "What is the answer to this expression, 22 % 3 is?",
    answer: "1",
    options: [
      "7",
      "1",
      "0",
      "5"
    ]
  },
  {
    id: 8,
    question: "What is the output of this expression, 3*1**3?",
    answer: "3",
    options: [
      "27",
      "9",
      "3",
      "1"
    ]
  },
  {
    id: 9,
    question: "Which one of the following has the same precedence level?",
    answer: "Addition and Subtraction",
    options: [
      "Addition and Subtraction",
      "Multiplication, Division and Addition",
      "Multiplication, Division, Addition and Subtraction",
      "Addition and Multiplication"
    ]
  },
  {
    id: 10,
    question: "Which one of the following has the highest precedence in the expression?",
    answer: "Parentheses",
    options: [
      "Exponential",
      "Addition",
      "Multiplication",
      "Parentheses"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);
};

function next() {

  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
