
let questions = [
  {
    id: 1,
    question: "Which of the following statements should be used to obtain a remainder after dividing 3.14 by 2.1 ?",
    answer: "rem = fmod(3.14, 2.1);",
    options: [
      "rem = 3.14 % 2.1;",
      "rem = modf(3.14, 2.1);",
      "rem = fmod(3.14, 2.1);",
      "Remainder cannot be obtain in floating point division."
    ]
  },
  {
    id: 2,
    question: "	What are the types of linkages?",
    answer: "External, Internal and None",
    options: [
      "Internal and External",
      "External, Internal and None",
      "External and None",
      "Internal"
    ]
  },
  {
    id: 3,
    question: "Which of the following special symbol allowed in a variable name?",
    answer: "_ (underscore)",
    options: [
      "* (asterisk)t",
      "| (pipeline)",
      "- (hyphen)",
      "_ (underscore)"
    ]
  },
  {
    id: 4,
    question: "By default a real number is treated as a",
    answer: "double",
    options: [
      "float",
      "double",
      "long double",
      "far double"
    ]
  },
  {
    id: 5,
    question: "Identify which of the following are declarations<br>\
    1 :	extern int x;<br>\
    2 :	float square ( float x ) { ... }<br>\
    3 :	double pow(double, double);\
    ",
    answer: "1 and 3",
    options: [
      "1",
      "2",
      "1 and 3",
      "3"
    ]
  },
  {
    id: 6,
    question: 'In the following program where is the variable a getting defined and where it is getting declared?<br>\
    #include<stdio.h><br>\
int main()<br>\
{<br>\
    extern int a;<br>\
    printf("%d\n", a);<br>\
    return 0;<br>\
}\
int a=20;',
    answer: "extern int a is declaration, int a = 20 is the definition",
    options: [
      "extern int a is declaration, int a = 20 is the definition",
      "int a = 20 is declaration, extern int a is the definition",
      "int a = 20 is definition, a is not defined",
      "a is declared, a is not defined"
    ]
  },
  {
    id: 7,
    question: "When we mention the prototype of a function?",
    answer: "Declaring",
    options: [
      "Defining",
      "Declaring",
      "Prototyping",
      "Calling"
    ]
  },
  {
    id: 8,
    question: "Is there any difference between following declarations?<br>\
    1 :	extern int fun();<br>\
    2 :	int fun();",
    answer: "No difference, except extern int fun(); is probably in another file",
    options: [
      "Both are identical",
      "No difference, except extern int fun(); is probably in another file",
      "int fun(); is overrided with extern int fun();",
      "None of these"
    ]
  },
  {
    id: 9,
    question: "How would you round off a value from 1.66 to 2.0?",
    answer: "ceil(1.66)",
    options: [
      "ceil(1.66)",
      "floor(1.66)",
      "roundup(1.66)",
      "roundto(1.66)"
    ]
  },
  {
    id: 10,
    question: "Is the following statement a declaration or definition?<br>\
    extern int i;",
    answer: "Declaration",
    options: [
      "Declaration",
      "Definition",
      "Function",
      "Error"
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
