
let questions = [
  {
    id: 1,
    question: "8085 microprocessor is an 8-bit microprocessor designed by?",
    answer: "Intel",
    options: [
      "IBM",
      "Dell",
      "Intel",
      "VAX"
    ]
  },
  {
    id: 2,
    question: "In 8085, 16-bit address bus, which can address upto?",
    answer: "64KB",
    options: [
      "16KB",
      "32KB",
      "64KB",
      "128KB"
    ]
  },
  {
    id: 3,
    question: "There are _______ general purpose registers in 8085 processor",
    answer: "6",
    options: [
      "5",
      "6",
      "7",
      "8"
    ]
  },
  {
    id: 4,
    question: " It is also a 16-bit register works like stack, which is always incremented/decremented by 2 during push & pop operations.",
    answer: "Stack pointer",
    options: [
      "Stack pointer",
      "Temporary register",
      "Flag register",
      "Program counter"
    ]
  },
  {
    id: 5,
    question: "Flag register is an 8-bit register having __________ 1-bit flip-flops.",
    answer: "5",
    options: [
      "3",
      "4",
      "5",
      "6"
    ]
  },
  {
    id: 6,
    question: "What is true about Program counter?",
    answer: "It is a 16-bit register used to store the memory address location of the next instruction to be executed.",
    options: [
      "It is an 8-bit register, which holds the temporary data of arithmetic and logical operations.",
      "When an instruction is fetched from memory then it is stored in the program counter",
      "It provides timing and control signal to the microprocessor",
      "It is a 16-bit register used to store the memory address location of the next instruction to be executed."
    ]
  },
  {
    id: 7,
    question: "This signal indicates that another master is requesting the use of the address and data buses.",
    answer: "HOLD",
    options: [
      "READY",
      "HOLD",
      "HLDA",
      "INTA"
    ]
  },
  {
    id: 8,
    question: "This signal is used as the system clock for devices connected with the microprocessor.",
    answer: "CLK OUT",
    options: [
      "X1, X2",
      "CLK OUT",
      "CLK IN",
      "IO/M"
    ]
  },
  {
    id: 9,
    question: "Which of the following is true about Control and status signals?",
    answer: "All of the above",
    options: [
      "These signals are used to identify the nature of operation.",
      "There are 3 control signal and 3 status signals.",
      "Three status signals are IO/M, S0 & S1.",
      "All of the above"
    ]
  },
  {
    id: 10,
    question: "MVI K, 20F is an example of?",
    answer: "Immediate addressing mode",
    options: [
      "Immediate addressing mode",
      "Register addressing mode",
      "Direct addressing mode",
      "Indirect addressing mode"
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
