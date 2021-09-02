
let questions = [
  {
    id: 1,
    question: "Any number with an exponent of zero is equal to:",
    answer: "one",
    options: [
      "zero",
      "one",
      "that number",
      "ten"
    ]
  },
  {
    id: 2,
    question: "In the decimal numbering system, what is the MSD?",
    answer: "The digit with the most weight",
    options: [
      "The middle digit of a stream of numbers",
      "The digit to the right of the decimal point",
      "The last digit on the right",
      "The digit with the most weight"
    ]
  },
  {
    id: 3,
    question: "What are the symbols used to represent digits in the binary number system?",
    answer: "0,1",
    options: [
      "0,1",
      "0,1,2",
      "0 through 8",
      "1,2"
    ]
  },
  {
    id: 4,
    question: "A full subtracter circuit requires ________.",
    answer: "three inputs and two outputs",
    options: [
      "two inputs and two outputs",
      "two inputs and three outputs",
      "three inputs and one output",
      "three inputs and two outputs"
    ]
  },
  {
    id: 5,
    question: "The output of an AND gate is LOW ________.",
    answer: "when any input is LOW",
    options: [
      "all the time",
      "when any input is LOW",
      "when any input is HIGH",
      "when all inputs are HIGH"
    ]
  },
  {
    id: 6,
    question: "The output of a NOT gate is HIGH when ________.",
    answer: "the input is LOW",
    options: [
      "the input is LOW",
      "the input is HIGH",
      "the input changes from LOW to HIGH",
      "voltage is removed from the gate"
    ]
  },
  {
    id: 7,
    question: "A flip-flop has ________.",
    answer: "two stable states",
    options: [
      "one stable state",
      "no stable states",
      "two stable states",
      "none of the above"
    ]
  },
  {
    id: 8,
    question: "In positive logic, ________.",
    answer: "a HIGH = 1, a LOW = 0",
    options: [
      "a HIGH = 1, a LOW = 0",
      "a LOW = 1, a HIGH = 0",
      "only HIGHs are present",
      "only LOWs are present"
    ]
  },
  {
    id: 9,
    question: "What is one relative disadvantage of serial transfer?",
    answer: "It is slow.",
    options: [
      "What is one relative disadvantage of serial transfer?",
      "Its interconnect system is complex.",
      "It is slow.",
      "It can only be used over very short distances."
    ]
  },
  {
    id: 10,
    question: "A multiplexer has ________.",
    answer: "several inputs and one output",
    options: [
      "one input and several outputs",
      "one input and one output",
      "several inputs and several outputs",
      "several inputs and one output"
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
