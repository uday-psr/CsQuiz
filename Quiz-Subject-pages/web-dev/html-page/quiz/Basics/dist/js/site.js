
let questions = [
  {
    id: 1,
    question: "What does HTML stands for?",
    answer: "Hypertext Markup Language.",
    options: [
      "Hypertext Machine language.",
      "Hypertext and links markup language.",
      "Hypertext Markup Language.",
      "Hightext machine language."
    ]
  },
  {
    id: 2,
    question: "Which of the following HTML Elements is used for making any text bold ?",
    answer: "b",
    options: [
      "p",
      "i",
      "li",
      "br"
    ]
  },
  {
    id: 3,
    question: "Which of the following HTML element is used for creating an unordered list?",
    answer: "ul",
    options: [
      "ui",
      "i",
      "em",
      "ul"
    ]
  },
  {
    id: 4,
    question: "Which of the following characters indicate closing of a tag?",
    answer: "/",
    options: [
      ".",
      "/",
      "\\",
      "!"
    ]
  },
  {
    id: 5,
    question: "What is the font-size of the h1 heading tag?",
    answer: "2 em",
    options: [
      "3.5 em",
      "2.17 em",
      "2 em",
      "1.5 em"
    ]
  },
  {
    id: 6,
    question: "How many heading tags are there in HTML5?",
    answer: "6",
    options: [
      "2",
      "3",
      "5",
      "6"
    ]
  },
  {
    id: 7,
    question: "Which of the following attributes is used to add link to any element?",
    answer: "href",
    options: [
      "link",
      "ref",
      "href",
      "newref"
    ]
  },
  {
    id: 8,
    question: "What tag is used to display a picture in a HTML page?",
    answer: "img",
    options: [
      "picture",
      "image",
      "img",
      "src"
    ]
  },
  {
    id: 9,
    question: "What is the purpose of using div tags in HTML?",
    answer: "For creating different sections.",
    options: [
      "For creating Different styles.",
      "For creating different sections.",
      "For adding headings.",
      "For adding titles."
    ]
  },
  {
    id: 10,
    question: "Which of the following tags is used to add a line-break in HTML?",
    answer: "br",
    options: [
      "br",
      "break",
      "break",
      "/br"
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
