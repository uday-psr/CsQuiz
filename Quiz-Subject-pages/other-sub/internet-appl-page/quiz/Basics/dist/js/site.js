
let questions = [
  {
    id: 1,
    question: "Servers are computers that provide resources to other computers connected to a",
    answer: "Network",
    options: [
      "Client",
      "Mainframe",
      "Supercomputer",
      "Network"
    ]
  },
  {
    id: 2,
    question: "A program that is used to view websites is called a",
    answer: "Browser",
    options: [
      "Browser",
      "Web viewer",
      "Spreadsheet",
      "Word processor"
    ]
  },
  {
    id: 3,
    question: "Which of the following is not a type of broadband internet connection?",
    answer: "Dial up",
    options: [
      "Satellite",
      "DSL",
      "Dial up",
      "Cable"
    ]
  },
  {
    id: 4,
    question: "A typical modern computer uses",
    answer: "LSI chips",
    options: [
      "Valves",
      "LSI chips",
      "Vacuum tubes",
      "All of these"
    ]
  },
  {
    id: 5,
    question: "What is the term for unsolicited Email?",
    answer: "Spam",
    options: [
      "Spam",
      "Backbone",
      "Usenet",
      "News group"
    ]
  },
  {
    id: 6,
    question: "Sending an E-mail is similar to",
    answer: "Writing a letter",
    options: [
      "Sending a package",
      "Talking on the phone",
      "Writing a letter",
      "Drawing a picture"
    ]
  },
  {
    id: 7,
    question: "ARPANET stands for",
    answer: "Advanced Research Projects Agency Network",
    options: [
      "Advanced Rehearse Projects Agency Network",
      "Advanced Research Projects Agency Newark",
      "Advanced Research Projects Agency Network",
      "None of these"
    ]
  },
  {
    id: 8,
    question: "Internet is",
    answer: "A worldwide interconnected network of computers which use a common protocol to communicate with one another",
    options: [
      "A worldwide interconnected network of computers which use a common protocol to communicate with one another",
      "A worldwide network of computers",
      "An interconnected network of computers",
      "A local computer network"
    ]
  },
  {
    id: 9,
    question: "The process of connecting to the internet account is",
    answer: "Login",
    options: [
      "Sing in",
      "Sing out",
      "Login",
      "Logout"
    ]
  },
  {
    id: 10,
    question: "Smart card is",
    answer: "Microprocessor cards",
    options: [
      "Processing unit for software handling",
      "Processing unit contains memory for storing data",
      "Microprocessor cards",
      "Special purpose cards"
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
