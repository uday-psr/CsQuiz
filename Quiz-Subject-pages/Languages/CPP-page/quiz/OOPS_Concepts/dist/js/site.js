
let questions = [
  {
    id: 1,
    question: "Which of the following type of class allows only one object of it to be created?",
    answer: "Singleton class",
    options: [
      "Virtual class;",
      "Abstract class",
      "Singleton class",
      "Friend class"
    ]
  },
  {
    id: 2,
    question: "Which of the following is not a type of constructor?",
    answer: "Friend constructor",
    options: [
      "Copy constructor",
      "Friend constructor",
      "Default constructor",
      "Parameterized constructor"
    ]
  },
  {
    id: 3,
    question: "Which of the following statements is correct?",
    answer: "Derived class pointer cannot point to base class.",
    options: [
      "Base class pointer cannot point to derived class.",
      "Derived class pointer cannot point to base class.",
      "Pointer to derived class cannot be created.",
      "Pointer to base class cannot be created."
    ]
  },
  {
    id: 4,
    question: "Which of the following is not the member of class?",
    answer: "Friend function",
    options: [
      "Static function",
      "Friend function",
      "Const function",
      "Virtual function"
    ]
  },
  {
    id: 5,
    question: "Which of the following concept of oops allows compiler to insert arguments in a function call if it is not specified?",
    answer: "Default arguments",
    options: [
      "Call by value",
      "Call by reference",
      "Default arguments",
      "Call by pointer3"
    ]
  },
  {
    id: 6,
    question: 'How many instances of an abstract class can be created?',
    answer: "0",
    options: [
      "1",
      "5",
      "13",
      "0"
    ]
  },
  {
    id: 7,
    question: "cout is a/an __________ .",
    answer: "object",
    options: [
      "operator",
      "function",
      "object",
      "macro"
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
    question: "Which of the following concepts means wrapping up of data and functions together?",
    answer: "Encapsulation",
    options: [
      "Abstraction",
      "Encapsulation",
      "Inheritance",
      "Polymorphism"
    ]
  },
  {
    id: 10,
    question: "Which of the following concepts means waiting until runtime to determine which function to call?",
    answer: "Dynamic binding",
    options: [
      "Data hiding",
      "Dynamic casting",
      "Dynamic binding",
      "Dynamic loading"
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
