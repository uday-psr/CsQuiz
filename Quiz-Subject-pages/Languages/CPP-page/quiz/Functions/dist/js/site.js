
let questions = [
  {
    id: 1,
    question: "Which of the following function prototype is perfectly acceptable?",
    answer: "int Function(int Tmp = Show());",
    options: [
      "int Function(int Tmp = Show());",
      "float Function(int Tmp = Show(int, float));",
      "Both A and B.",
      "float = Show(int, float) Function(Tmp);"
    ]
  },
  {
    id: 2,
    question: "Which of the following statement is correct?",
    answer: "Both A and B.",
    options: [
      "C++ enables to define functions that take constants as an argument.",
      "We cannot change the argument of the function that that are declared as constant.",
      "Both A and B.",
      "We cannot use the constant while defining the function."
    ]
  },
  {
    id: 3,
    question: "Which of the following statement is incorrect?",
    answer: "Default argument cannot be provided for pointers to functions.",
    options: [
      "Default arguments can be provided for pointers to functions.",
      "A function can have all its arguments as default.",
      "Default argument cannot be provided for pointers to functions.",
      "A default argument cannot be redefined in later declaration."
    ]
  },
  {
    id: 4,
    question: "Which of the following statement is correct?",
    answer: "Constructors can have default parameters.",
    options: [
      "Constructors can have default parameters.",
      "Constructors cannot have default parameters.",
      "Constructors cannot have more than one default parameter",
      "Constructors can have at most five default parameters."
    ]
  },
  {
    id: 5,
    question: "Which of the following function / type of function cannot be overloaded?",
    answer: "Virtual function",
    options: [
      "Member function",
      "Static function",
      "Virtual function",
      "Both B and C"
    ]
  },
  {
    id: 6,
    question: 'Where the default value of parameter have to be specified?',
    answer: "Function prototype",
    options: [
      "Function call",
      "Function definition",
      "Function prototype",
      "Both B or C"
    ]
  },
  {
    id: 7,
    question: "Which of the following statement is correct?",
    answer: "C++ does not allow the redefinition of a default parameter.",
    options: [
      "The default value for an argument cannot be function call.",
      "C++ allows the redefinition of a default parameter.",
      "Both A and B.",
      "C++ does not allow the redefinition of a default parameter."
    ]
  },
  {
    id: 8,
    question: "Which of the following is correct about function overloading?",
    answer: "Both A and B.",
    options: [
      "The types of arguments are different.",
      "The order of argument is different.",
      "The number of argument is same.",
      "Both A and B."
    ]
  },
  {
    id: 9,
    question: "Which of the following statement is correct?",
    answer: "All the parameters of a function can be default parameters.",
    options: [
      "Only one parameter of a function can be a default parameter.",
      "Minimum one parameter of a function must be a default parameter.",
      "All the parameters of a function can be default parameters.",
      "No parameter of a function can be default."
    ]
  },
  {
    id: 10,
    question: "Which of the following function / types of function cannot have default parameters?",
    answer: "main()",
    options: [
      "Member function of class",
      "main()",
      "Member function of structure",
      "Dynamic loadingBoth B and C"
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
