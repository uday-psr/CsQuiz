
let questions = [
  {
    id: 1,
    question: "Which of the following CSS property defines the different properties of all four sides of an element’s border in a single declaration?",
    answer: "border-width",
    options: [
      "border",
      "padding",
      "border-collapse",
      "border-width"
    ]
  },
  {
    id: 2,
    question: "Identify the CSS property defining bottom-left corner shape of the border?",
    answer: "border-bottom-left-radius",
    options: [
      "border-radius",
      "border-corner-radius",
      "border-bottom-left-radius",
      "border-left-radius"
    ]
  },
  {
    id: 3,
    question: "Select the CSS property that sets the width of an element’s bottom border?",
    answer: "border-bottom-width",
    options: [
      "border-width",
      "border-bottom",
      "border-width-down",
      "border-bottom-width"
    ]
  },
  {
    id: 4,
    question: "Which of the following CSS property border-color property sets the color of an element’s four borders?",
    answer: "border-color",
    options: [
      "border-background",
      "border-background-color",
      "border-color",
      "all of the mentioned"
    ]
  },
  {
    id: 5,
    question: "Choose the CSS property that can be used for collapsing the borders between table cells?",
    answer: "border-collapse",
    options: [
      "border",
      "collapse-border",
      "border-collapse",
      "border-cell"
    ]
  },
  {
    id: 6,
    question: "Which CSS property can be used to set the image as border instead of the border style?",
    answer: "border-image-source",
    options: [
      "background-image",
      "border-image",
      "background-image-source",
      "border-image-source"
    ]
  },
  {
    id: 7,
    question: "In how many way border-image-width CSS property can be defined?",
    answer: "9",
    options: [
      "4",
      "6",
      "8",
      "9"
    ]
  },
  {
    id: 8,
    question: "Which of the following is not an appropriate value for border-collapse?",
    answer: "all",
    options: [
      "all",
      "collapse",
      "inherit",
      "separate"
    ]
  },
  {
    id: 9,
    question: "Which of the following specifies the distance between the borders of adjacent cells?",
    answer: "border-spacing",
    options: [
      "border-spacing-cell",
      "border-width-spacing",
      "border-spacing",
      "cell-spacing"
    ]
  },
  {
    id: 10,
    question: "Which of the following property defines the border-width, border-style and border-color of an element’s top border in a single declaration?",
    answer: "border-top",
    options: [
      "border",
      "border-top",
      "border-top-corner",
      "border-top-style"
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
