
let questions = [
  {
    id: 1,
    question: "JavaScript Code can be called by using ___________",
    answer: "Function/Method",
    options: [
      "RMI",
      "Triggering Event",
      "Preprocessor",
      "Function/Method"
    ]
  },
  {
    id: 2,
    question: "The type of a variable that is volatile is _______________",
    answer: "Mutable variable",
    options: [
      "Volatile variable",
      "Mutable variable",
      "Immutable variable",
      "Dynamic variable"
    ]
  },
  {
    id: 3,
    question: "A hexadecimal literal begins with __________",
    answer: "Both 0x and 0X",
    options: [
      "00",
      "0x",
      "0X",
      "Both 0x and 0X"
    ]
  },
  {
    id: 4,
    question: "The generalised syntax for a real number representation is __________",
    answer: "[digits][.digits][(E|e)[(+|-)]digits]",
    options: [
      "[digits][.digits][(E|e)[(+|-)]digits]",
      "[digits][+digits][(E|e)[(+|-)]digits]",
      "[digits][(E|e)[(+|-)]digits]",
      "[.digits][digits][(E|e)[(+|-)]digits]"
    ]
  },
  {
    id: 5,
    question: "JavaScript _________ when there is an indefinite or an infinite value during an arithmetic computation",
    answer: "Displays “Infinity”",
    options: [
      "Prints an exception error",
      "Prints an overflow error",
      "Displays “Infinity”",
      "Prints the value as such"
    ]
  },
  {
    id: 6,
    question: "Which of the following is not considered as an error in JavaScript?",
    answer: "Division by zero",
    options: [
      "Syntax error",
      "Missing of semicolons",
      "Division by zero",
      "Missing of Bracket"
    ]
  },
  {
    id: 7,
    question: "The escape sequence ‘\f’ stands for _________",
    answer: "Form feed",
    options: [
      "Floating numbers",
      "Representation of functions that returns a value",
      "\f is not present in JavaScript",
      "Form feed"
    ]
  },
  {
    id: 8,
    question: "The snippet that has to be used to check if “a” is not equal to “null” is _________",
    answer: "if(a!==null)",
    options: [
      "if(a!=null)",
      "if (!a)",
      "if(a!null)",
      "if(a!==null)"
    ]
  },
  {
    id: 9,
    question: "The statement a===b refers to ________",
    answer: "Both a and b are equal in value and type",
    options: [
      "Both a and b are equal in value, type and reference address",
      "Both a and b are equal in value",
      "Both a and b are equal in value and type",
      "There is no such statement"
    ]
  },
  {
    id: 10,
    question: "Assume that we have to convert “false” that is a non-string to string. The command that we use is (without invoking the “new” operator).",
    answer: "Both false.toString() and String(false)",
    options: [
      "false.toString()",
      "String(false)",
      "String newvariable=”false”",
      "Both false.toString() and String(false)"
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
