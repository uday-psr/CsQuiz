
let questions = [
  {
    id: 1,
    question: "CSS stands for __________",
    answer: "Cascading Style Sheets",
    options: [
      "Color Style Sheets",
      "Cascade Sheets Style",
      "Cascade Style Sheet",
      "Cascading Style Sheets"
    ]
  },
  {
    id: 2,
    question: "In CSS, h1 can be called as _______",
    answer: "Selector",
    options: [
      "Selector",
      "Attribute",
      "Value",
      "Tag"
    ]
  },
  {
    id: 3,
    question: "In css, “color:red” can be called as _____________",
    answer: "Declaration",
    options: [
      "Selector",
      "Rule",
      "Declaration",
      "Value"
    ]
  },
  {
    id: 4,
    question: "Which of the following attributes is used to specify elements to bind style rules to?",
    answer: "all of the mentioned",
    options: [
      "id",
      "class",
      "tag",
      "all of the mentioned"
    ]
  },
  {
    id: 5,
    question: "Which selector is used to specify a rule to bind a particular unique element?",
    answer: "id",
    options: [
      "id",
      "class",
      "tag",
      "both class and tag"
    ]
  },
  {
    id: 6,
    question: "In CSS, “font-size” can be called as ________",
    answer: "Property-Name",
    options: [
      "Selector",
      "Rule",
      "Property",
      "Property-Name"
    ]
  },
  {
    id: 7,
    question: "_________ selectors are used to specify a group of elements.",
    answer: "class",
    options: [
      "id",
      "class",
      "tag",
      "both class and tag"
    ]
  },
  {
    id: 8,
    question: "Which of the following tag is used to embed css in html page?",
    answer: "style",
    options: [
      "script",
      "style",
      "css",
      "!DOCTYPE html"
    ]
  },
  {
    id: 9,
    question: "_________ has introduced text, list, box, margin, border, color, and background properties.",
    answer: "css",
    options: [
      "css",
      "html",
      "ajax",
      "php"
    ]
  },
  {
    id: 10,
    question: "Is it the best way to include H1 heading only one time on the web page.",
    answer: "True",
    options: [
      "True",
      "False",
      "....",
      "...."
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
