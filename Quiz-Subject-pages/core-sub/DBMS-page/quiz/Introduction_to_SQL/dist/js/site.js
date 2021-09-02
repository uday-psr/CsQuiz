
let questions = [
  {
    id: 1,
    question: "You can add a row using SQL in a database with which of the following?",
    answer: "INSERT",
    options: [
      "ADD",
      "CREATE",
      "INSERT",
      "MAKE"
    ]
  },
  {
    id: 2,
    question: "The command to remove rows from a table 'CUSTOMER' is:",
    answer: "DELETE FROM CUSTOMER WHERE ...",
    options: [
      "REMOVE FROM CUSTOMER ...",
      "DROP FROM CUSTOMER ...",
      "DELETE FROM CUSTOMER WHERE ...",
      "UPDATE FROM CUSTOMER ..."
    ]
  },
  {
    id: 3,
    question: "The SQL WHERE clause:",
    answer: "limits the row data are returned.",
    options: [
      "limits the column data that are returned.",
      "limits the row data are returned.",
      "Both A and B are correct.",
      "Neither A nor B are correct."
    ]
  },
  {
    id: 4,
    question: "Which of the following is the original purpose of SQL?",
    answer: "All of the above.",
    options: [
      "To specify the syntax and semantics of SQL data definition language",
      "To specify the syntax and semantics of SQL manipulation language",
      "To define the data structures",
      "All of the above."
    ]
  },
  {
    id: 5,
    question: "A view is which of the following?",
    answer: "A virtual table that can be accessed via SQL commands",
    options: [
      "A virtual table that can be accessed via SQL commands",
      "A virtual table that cannot be accessed via SQL commands",
      "A base table that can be accessed via SQL commands",
      "A base table that cannot be accessed via SQL commands"
    ]
  },
  {
    id: 6,
    question: 'The command to eliminate a table from a database is:',
    answer: "DROP TABLE CUSTOMER;",
    options: [
      "REMOVE TABLE CUSTOMER;1",
      "DROP TABLE CUSTOMER;",
      "DELETE TABLE CUSTOMER;",
      "UPDATE TABLE CUSTOMER;"
    ]
  },
  {
    id: 7,
    question: "ON UPDATE CASCADE ensures which of the following?",
    answer: "Data Integrity",
    options: [
      "Normalization",
      "Data Integrity",
      "Materialized Views",
      "All of the above."
    ]
  },
  {
    id: 8,
    question: "SQL data definition commands make up a(n) ________ .",
    answer: "DDL",
    options: [
      "DDL",
      "DML",
      "HTML",
      "XML"
    ]
  },
  {
    id: 9,
    question: "Which of the following is the correct order of keywords for SQL SELECT statements?",
    answer: "SELECT, FROM, WHERE",
    options: [
      "SELECT, FROM, WHERE",
      "FROM, WHERE, SELECT",
      "WHERE, FROM,SELECT",
      "SELECT,WHERE,FROM"
    ]
  },
  {
    id: 10,
    question: "Which of the following are the five built-in functions provided by SQL?",
    answer: "COUNT, SUM, AVG, MAX, MIN",
    options: [
      "COUNT, SUM, AVG, MAX, MIN",
      "SUM, AVG, MIN, MAX, MULT",
      "SUM, AVG, MULT, DIV, MIN",
      "SUM, AVG, MIN, MAX, NAME"
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
