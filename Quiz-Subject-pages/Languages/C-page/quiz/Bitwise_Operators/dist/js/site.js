
let questions = [
  {
    id: 1,
    question: "Which of the following statements should be used to obtain a remainder after dividing 3.14 by 2.1 ?",
    answer: "rem = fmod(3.14, 2.1);",
    options: [
      "rem = 3.14 % 2.1;",
      "rem = modf(3.14, 2.1);",
      "rem = fmod(3.14, 2.1);",
      "Remainder cannot be obtain in floating point division."
    ]
  },
  {
    id: 2,
    question: "	What are the types of linkages?",
    answer: "External, Internal and None",
    options: [
      "Internal and External",
      "External, Internal and None",
      "External and None",
      "Internal"
    ]
  },
  {
    id: 3,
    question: "Which of the following special symbol allowed in a variable name?",
    answer: "_ (underscore)",
    options: [
      "* (asterisk)t",
      "| (pipeline)",
      "- (hyphen)",
      "_ (underscore)"
    ]
  },
  {
    id: 4,
    question: "By default a real number is treated as a",
    answer: "double",
    options: [
      "float",
      "double",
      "long double",
      "far double"
    ]
  },
  {
    id: 5,
    question: "Identify which of the following are declarations",
    answer: "1 and 3",
    options: [
      "1",
      "2",
      "1 and 3",
      "3"
    ]
  },
  {
    id: 6,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 7,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 8,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 9,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 10,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
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
