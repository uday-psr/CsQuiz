
let questions = [
  {
    id: 1,
    question: 'Which four options describe the correct default values for array elements of the types indicated?<br>\
    1.int -> 0, 2.String -> "null", 3.Dog -> null, 4.char -> \'\u0000\', 5.float -> 0.0f, 6.boolean -> true ',
    answer: "1, 3, 4, 5",
    options: [
      "1, 2, 3, 4",
      "1, 3, 4, 5s",
      "2, 4, 5, 6",
      "	3, 4, 5, 6"
    ]
  },
  {
    id: 2,
    question: "Which one of these lists contains only Java programming language keywords?",
    answer: "goto, instanceof, native, finally, default, throws",
    options: [
      "class, if, void, long, Int, continue",
      "goto, instanceof, native, finally, default, throws",
      "try, virtual, throw, final, volatile, transient",
      "byte, break, assert, switch, include"
    ]
  },
  {
    id: 3,
    question: "Which will legally declare, construct, and initialize an array?",
    answer: "int myList [] = {4, 3, 7};",
    options: [
      'int [] myList = {"1", "2", "3"};',
      "int [] myList = (5, 8, 2);",
      "int myList [] [] = {4,9,7,0};",
      "int myList [] = {4, 3, 7};"
    ]
  },
  {
    id: 4,
    question: "Which is a reserved word in the Java programming language?",
    answer: "native",
    options: [
      "method",
      "native",
      "subclasses",
      "array"
    ]
  },
  {
    id: 5,
    question: "Which is a valid keyword in java?",
    answer: "interface",
    options: [
      "interface",
      "string",
      "Float",
      "unsigned"
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
    question: "Which one of the following will declare an array and initialize it with five numbers?",
    answer: "int [] a = {23,22,21,20,19};",
    options: [
      "int [] a = {23,22,21,20,19};",
      "Array a = new Array(5);",
      "int a [] = new int[5];",
      "int [5] array;"
    ]
  },
  {
    id: 8,
    question: "Which is the valid declarations within an interface definition?",
    answer: "public double methoda();",
    options: [
      "public double methoda();",
      "public final double methoda();",
      "static void methoda(double d1);",
      "protected void methoda(double d1);"
    ]
  },
  {
    id: 9,
    question: "Which one is a valid declaration of a boolean?",
    answer: "boolean b3 = false;",
    options: [
      "boolean b1 = 0;",
      "boolean b2 = 'false';",
      "boolean b3 = false;",
      "boolean b4 = Boolean.false();"
    ]
  },
  {
    id: 10,
    question: "Which is a valid declarations of a String?",
    answer: "String s1 = null;",
    options: [
      "String s1 = null;",
      "String s2 = 'null';",
      "String s3 = (String) 'abc';",
      "String s4 = (String) '\ufeed';"
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
