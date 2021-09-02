
let questions = [
  {
    id: 1,
    question: "The DBMS acts as an interface between what two components of an enterprise-class database system?",
    answer: "Database application and the database",
    options: [
      "Data and the database",
      "Database application and the database",
      "The user and the database application",
      "Database application and SQL"
    ]
  },
  {
    id: 2,
    question: "The following are components of a database except ________ .",
    answer: "reports",
    options: [
      "user data",
      "metadata",
      "reports",
      "indexes"
    ]
  },
  {
    id: 3,
    question: "Which of the following products was the first to implement true relational algebra in a PC DBMS?",
    answer: "R:base",
    options: [
      "IDMS",
      "Oracle",
      "dBase-II",
      "R:base"
    ]
  },
  {
    id: 4,
    question: "Because it contains a description of its own structure, a database is considered to be ________ .",
    answer: "self-describing",
    options: [
      "described",
      "metadata compatible",
      "self-describing",
      "an application program"
    ]
  },
  {
    id: 5,
    question: "The following are functions of a DBMS except ________ .",
    answer: "creating and processing forms",
    options: [
      "creating and processing forms",
      "creating databases",
      "processing data",
      "administrating databases"
    ]
  },
  {
    id: 6,
    question: 'Helping people keep track of things is the purpose of a(n) ________ .',
    answer: "database",
    options: [
      "database",
      "table",
      "instance",
      "relationship"
    ]
  },
  {
    id: 7,
    question: "SQL stands for ________ .",
    answer: "Structured Query Language",
    options: [
      "Structured Query Language",
      "Sequential Query Language",
      "Structured Question Language",
      "Sequential Question Language"
    ]
  },
  {
    id: 8,
    question: "An Enterprise Resource Planning application is an example of a(n) ________ .",
    answer: "multiuser database application",
    options: [
      "single-user database application",
      "multiuser database application",
      "e-commerce database application",
      "data mining database application"
    ]
  },
  {
    id: 9,
    question: "Which of the following is not considered to be a basic element of an enterprise-class database system?",
    answer: "ECOBOL programs",
    options: [
      "Users",
      "Database applications",
      "DBMS",
      "COBOL programs"
    ]
  },
  {
    id: 10,
    question: "The DBMS that is most difficult to use is ________ ",
    answer: "Oracle Corporation's Oracle",
    options: [
      "Microsoft's SQL Server",
      "Microsoft's Access",
      "IBM's DB2",
      "Oracle Corporation's Oracle"
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
