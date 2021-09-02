
let questions = [
  {
    id: 1,
    question: "A view is selected by specifying a sub-area of the __________ picture area.",
    answer: "total",
    options: [
      "half",
      "total",
      "full",
      "quarter"
    ]
  },
  {
    id: 2,
    question: "Co-ordinates are ranging according to the screen resolution",
    answer: "True",
    options: [
      "True",
      "False",
      "...",
      "..."
    ]
  },
  {
    id: 3,
    question: "Any convenient co-ordinate system or Cartesian co-ordinates which can be used to define the picture is called ___________",
    answer: "world co-ordinates",
    options: [
      "spherical co-ordinates",
      "vector co-ordinates",
      "viewport co-ordinates",
      "world co-ordinates"
    ]
  },
  {
    id: 4,
    question: "Which of the following co-ordinates are NOT used in 2d viewing transformation?",
    answer: "vector co-ordinates",
    options: [
      "modelling co-ordinates",
      "viewing co-ordinates",
      "vector co-ordinates",
      "device co-ordinates"
    ]
  },
  {
    id: 5,
    question: "The process of elimination of parts of a scene outside a window or a viewport is called _____________",
    answer: "clipping",
    options: [
      "cutting",
      "plucking",
      "clipping",
      "editing"
    ]
  },
  {
    id: 6,
    question: "For a 2d transformation viewing, in how many ways a clipping algorithm can be applied?",
    answer: "2",
    options: [
      "3",
      "2",
      "1",
      "5"
    ]
  },
  {
    id: 7,
    question: "Which of the following is NOT a type of clipping algorithm used on the raster system?",
    answer: "solid clipping",
    options: [
      "line clipping",
      "point clipping",
      "area clipping",
      "solid clipping"
    ]
  },
  {
    id: 8,
    question: "For a point to be clipped, which of the following conditions must be satisfied by the point?",
    answer: "xwmin > x > xwmax",
    options: [
      "xwmin < x < xwmax",
      "xwmin = x = xwmax",
      "xwmin > x > xwmax",
      "ywmin = y = ywmax"
    ]
  },
  {
    id: 9,
    question: "In polygon clipping, line clipping algorithms can be used.",
    answer: "True",
    options: [
      "True",
      "False",
      "...",
      "..."
    ]
  },
  {
    id: 10,
    question: "Which type of clipping is used to clip character strings?",
    answer: "text clipping",
    options: [
      "text clipping",
      "line clipping",
      "sentence clipping",
      "word clipping"
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
