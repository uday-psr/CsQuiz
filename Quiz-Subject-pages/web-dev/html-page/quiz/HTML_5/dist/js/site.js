
let questions = [
  {
    id: 1,
    question: "Which of the following browser supports HTML5 in its latest version?",
    answer: "Both of the above.",
    options: [
      "Mozilla Firefox",
      "Opera",
      "Both of the above.",
      "None of the above."
    ]
  },
  {
    id: 2,
    question: "Which of the following tag represents a section of the document intended for navigation in HTML5?",
    answer: "nav",
    options: [
      "footer",
      "nav",
      "section",
      "dialog"
    ]
  },
  {
    id: 3,
    question: "Which of the following HTML 4 attributes is removed in HTML5?",
    answer: "all of the mentioned",
    options: [
      "text",
      "rules",
      "link",
      "all of the mentioned"
    ]
  },
  {
    id: 4,
    question: "Which of the following element is removed by HTML5?",
    answer: "dir",
    options: [
      "vlink",
      "dir  ",
      "marginwidth",
      "compact"
    ]
  },
  {
    id: 5,
    question: "Which of the following is not a newly added element in HTML5?",
    answer: "frameset",
    options: [
      "article",
      "audio",
      "nav",
      "frameset"
    ]
  },
  {
    id: 6,
    question: "__________ defines the accelerator key to be used for keyboard access to an element.",
    answer: "accesskey",
    options: [
      "data-X",
      "accesskey",
      "rp",
      "command"
    ]
  },
  {
    id: 7,
    question: "Which of the following element represents the header of a section or the document and contains a label or other heading information for the related content?",
    answer: "header",
    options: [
      "header",
      "data-X",
      "mark",
      "meter"
    ]
  },
  {
    id: 8,
    question: "Which of the following element sets is an item of microdata?",
    answer: "itemscope",
    options: [
      "itemscope",
      "itemref",
      "itemtype",
      "none of the mentioned"
    ]
  },
  {
    id: 9,
    question: "__________ defines a group of content that should be used as a figure and may be labeled by a legend element.",
    answer: "figure",
    options: [
      "figure",
      "details",
      "output",
      "aside"
    ]
  },
  {
    id: 10,
    question: "Which element is used to define a discrete unit of content such as a blogpost, comment, and so on?",
    answer: "class",
    options: [
      "section",
      "article",
      "none of the mentioned",
      "class"
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
