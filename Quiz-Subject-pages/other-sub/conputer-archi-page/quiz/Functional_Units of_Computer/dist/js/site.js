
let questions = [
  {
    id: 1,
    question: "The ______ format is usually used to store data.",
    answer: "BCD",
    options: [
      "BCD",
      "Decimal",
      "Hexadecimal",
      "Octal"
    ]
  },
  {
    id: 2,
    question: "The 8-bit encoding format used to store data in a computer is ______",
    answer: "EBCDIC",
    options: [
      "ASCII",
      "EBCDIC",
      "ANCI",
      "USCII"
    ]
  },
  {
    id: 3,
    question: "A source program is usually in _______",
    answer: "High-level language",
    options: [
      "Assembly language",
      "Machine level language",
      "High-level language",
      "Natural language"
    ]
  },
  {
    id: 4,
    question: "Which memory device is generally made of semiconductors?",
    answer: "RAM",
    options: [
      "RAM",
      "Hard-disk",
      "Floppy disk",
      "Cd disk"
    ]
  },
  {
    id: 5,
    question: "The small extremely fast, RAM’s are called as _______",
    answer: "Cache",
    options: [
      "Cache",
      "Heaps",
      "Accumulators",
      "Stacks"
    ]
  },
  {
    id: 6,
    question: "The ALU makes use of _______ to store the intermediate results.",
    answer: "Accumulators",
    options: [
      "Accumulators",
      "Registers",
      "Heap",
      "Stack"
    ]
  },
  {
    id: 7,
    question: "The control unit controls other units by generating ___________",
    answer: "Timing signals",
    options: [
      "Control signals",
      "Timing signals",
      "Transfer signals",
      "Command Signals"
    ]
  },
  {
    id: 8,
    question: "______ are numbers and encoded characters, generally used as operands.",
    answer: "Data",
    options: [
      "Input",
      "Data",
      "Information",
      "Stored Values"
    ]
  },
  {
    id: 9,
    question: "______ bus structure is usually used to connect I/O devices.",
    answer: "Single bus",
    options: [
      "Single bus",
      "Multiple bus",
      "Star bus",
      "Rambus"
    ]
  },
  {
    id: 10,
    question: "The I/O interface required to connect the I/O device to the bus consists of ______",
    answer: "Address decoder, registers and Control circuits",
    options: [
      "Address decoder and registers",
      "Control circuits",
      "Address decoder, registers and Control circuits",
      "Only Control circuits"
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
