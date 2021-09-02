
let questions = [
  {
    id: 1,
    question: "Suppose a list with name arr, contains 5 elements. You can get the 2nd element from the list using:",
    answer: "arr[1]",
    options: [
      "arr[-2]",
      "arr[2]",
      "arr[-1]",
      "arr[1]"
    ]
  },
  {
    id: 2,
    question: "Which one of the following is mutable data type?",
    answer: "set",
    options: [
      "set",
      "int",
      "str",
      "tupl"
    ]
  },
  {
    id: 3,
    question: "Which one of the following is immutable data type?",
    answer: "int",
    options: [
      "set",
      "tupl",
      "str",
      "int"
    ]
  },
  {
    id: 4,
    question: "Which of these is not a core data type?",
    answer: "Class",
    options: [
      "List",
      "Tuple",
      "Dictionary",
      "Class"
    ]
  },
  {
    id: 5,
    question: "Which of these about a dictionary is false?",
    answer: "The keys of a dictionary can be accessed using values",
    options: [
      "The values of a dictionary can be accessed using keys",
      "The keys of a dictionary can be accessed using values",
      "Dictionaries arenâ€™t ordered",
      "Dictionaries are mutable"
    ]
  },
  {
    id: 6,
    question: 'Which of the follwing are the keys in the given statement : abc = {"first":10, "second":20}',
    answer: "first, second",
    options: [
      "10, 20",
      "first, second",
      "first, 10, second, 20",
      "first, 20"
    ]
  },
  {
    id: 7,
    question: "Which one of the following is False regarding data types in Python?",
    answer: "object",
    options: [
      "In python, explicit data type conversion is possible",
      "Mutable data types are those that can be changed.",
      "Immutable data types are those that cannot be changed.",
      "None of the above"
    ]
  },
  {
    id: 8,
    question: "Which of the following data type is used to store values in Key & Value format?",
    answer: "Dictionary",
    options: [
      "List",
      "Tuple",
      "Dictionary",
      "Set"
    ]
  },
  {
    id: 9,
    question: "Which of the following function is used to know the data type of a variable in Python?",
    answer: "type()",
    options: [
      "datatype()",
      "typeof()",
      "type()",
      "vartype()"
    ]
  },
  {
    id: 10,
    question: "What is the output of following: set([1,1,2,3,4,2,3,4])",
    answer: "{1,2,3,4}",
    options: [
      "[1,1,2,3,4,2,3,4]",
      "{1,2,3,4}",
      "{1,1,2,3,4,2,3,4}",
      "Invalid Syntax"
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
