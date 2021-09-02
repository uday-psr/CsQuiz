
let questions = [
  {
    id: 1,
    question: "Which unit is responsible for converting the data received from the user into a computer understandable format?",
    answer: "Input Unit",
    options: [
      "Memory Unit",
      "Arithmetic & Logic Unit",
      "Input Unit",
      "Output Unit"
    ]
  },
  {
    id: 2,
    question: "The only language which the computer understands is ______________",
    answer: "Binary Language",
    options: [
      "Assembly Language",
      "Binary Language",
      "BASIC",
      "C Language"
    ]
  },
  {
    id: 3,
    question: "The smallest unit of data in computer is ________________",
    answer: "Bit",
    options: [
      "Byte",
      "Nibble",
      "Bit",
      "KB"
    ]
  },
  {
    id: 4,
    question: "One nibble is equivalent to how many bits?",
    answer: "4",
    options: [
      "2",
      "4",
      "8",
      "1"
    ]
  },
  {
    id: 5,
    question: "The input machine which originated in the United States around 1880s is a _________",
    answer: "Keyboard",
    options: [
      "Mouse",
      "Joystick",
      "Keyboard",
      "Bar Code Reader"
    ]
  },
  {
    id: 6,
    question: "What does the COMPUTER stand for?",
    answer: "Commonly Operated Machines Used in Technical and Educational Research",
    options: [
      "Commonly Operated Machines Used in Technical and Educational Research",
      "Commonly Occupied Machines Used in Technical and Educational Research",
      "Commonly Operated Machines Used in Technical and Environmental Research",
      "Commonly Oriented Machines Used in Technical and Educational Research"
    ]
  },
  {
    id: 7,
    question: "1 yottabyte = ______________",
    answer: "1024 ZB",
    options: [
      "1024 TB",
      "1024 EB",
      "1024 ZB",
      "1024 PB"
    ]
  },
  {
    id: 8,
    question: "Which of the following is not a function of the Input Unit?",
    answer: "It makes the data into user understandable format",
    options: [
      "It reads instructions and data from the outside world",
      "It converts the data into computer acceptable format",
      "It makes the data into user understandable format",
      "It supplies the data and instructions to the computer for further processing"
    ]
  },
  {
    id: 9,
    question: "Which of the following describes the correct format of an input instruction?",
    answer: "IN 82",
    options: [
      "IN 82",
      "INPUT 82",
      "INP 82",
      "82 INP"
    ]
  },
  {
    id: 10,
    question: "PCI stands for _________",
    answer: "Peripheral Component Interconnect",
    options: [
      "Peripheral Component Interconnect",
      "Partial Component Interconnect",
      "Peripheral Component Interaction",
      "Partial Component Interaction"
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
