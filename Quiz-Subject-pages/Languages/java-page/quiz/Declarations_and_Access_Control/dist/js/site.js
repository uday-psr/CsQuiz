
let questions = [
  {
    id: 1,
    question: "You want subclasses in any package to have access to members of a superclass. Which is the most restrictive access that accomplishes this objective?",
    answer: "protected",
    options: [
      "public",
      "private",
      "protected",
      "transient"
    ]
  },
  {
    id: 2,
    question: "public class Test { }<br>\
    What is the prototype of the default constructor?",
    answer: "public Test( )",
    options: [
      "Test( )",
      "Test(void)",
      "public Test( )",
      "public Test(void)"
    ]
  },
  {
    id: 3,
    question: "	What is the most restrictive access modifier that will allow members of one class to have access to members of another class in the same package?",
    answer: "default access",
    options: [
      "public",
      "abstract",
      "synchronized",
      "default access"
    ]
  },
  {
    id: 4,
    question: "Which of the following is/are legal method declarations?<br>\
   1.protected abstract void m1();<br>\
   2.static final void m1(){}<br>\
   3.synchronized public final void m1() {}<br>\
   4.private native void m1();<br>\
",
    answer: "All of them are legal declarations.",
    options: [
      "1 and 3",
      "2 and 4",
      "1 only",
      "All of them are legal declarations."
    ]
  },
  {
    id: 5,
    question: "Which cause a compiler error?",
    answer: "int [ ][ ] scores = {2,7,6}, {9,3,45};",
    options: [
      "	int[ ] scores = {3, 5, 7};",
      "int [ ][ ] scores = {2,7,6}, {9,3,45};",
      "boolean results[ ] = new boolean [] {true, false, true};",
      "Integer results[ ] = {new Integer(3), new Integer(5), new Integer(8)};"
    ]
  },
  {
    id: 6,
    question: 'You want a class to have access to members of another class in the same package. Which is the most restrictive access that accomplishes this objective?',
    answer: "default access",
    options: [
      "default access",
      "public",
      "private",
      "protected"
    ]
  },
  {
    id: 7,
    question: "What is the widest valid returnType for methodA in line 3?<br>\
    public class ReturnIt <br>\
{ <br>\
    returnType methodA(byte x, double y) /* Line 3 */<br>\
    { <br>\
        return (long)x / y * 2; <br>\
    } <br>\
}",
    answer: "double",
    options: [
      "int",
      "byte",
      "long",
      "double"
    ]
  },
  {
    id: 8,
    question: "Which of the following class level (nonlocal) variable declarations will not compile?",
    answer: "private synchronized int e;",
    options: [
      "protected int a;",
      "transient int b = 3;",
      "private synchronized int e;",
      "volatile int d;"
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
    question: "Which is a valid declaration within an interface?",
    answer: "public static short stop = 23;",
    options: [
      "protected short stop = 23;",
      "public static short stop = 23;",
      "	transient short stop = 23;",
      "final void madness(short stop);"
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
