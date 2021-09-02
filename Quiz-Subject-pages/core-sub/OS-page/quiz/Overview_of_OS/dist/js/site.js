
let questions = [
  {
    id: 1,
    question: "To access the services of operating system, the interface is provided by the ___________",
    answer: "System calls",
    options: [
      "System calls",
      "API",
      "Library",
      "Assembly instructions"
    ]
  },
  {
    id: 2,
    question: "Which one of the following error will be handle by the operating system?",
    answer: "all of the mentioned",
    options: [
      "power failure",
      "lack of paper in printer",
      "connection failure in the network",
      "all of the mentioned"
    ]
  },
  {
    id: 3,
    question: " What is the main function of the command interpreter?",
    answer: "to get and execute the next user-specified command",
    options: [
      "to get and execute the next user-specified command",
      "to provide the interface between the API and application program",
      "to handle the files in operating system",
      "none of the mentioned"
    ]
  },
  {
    id: 4,
    question: "In Operating Systems, which of the following is/are CPU scheduling algorithms?",
    answer: "All of the mentioned",
    options: [
      "Round Robin",
      "Shortest Job First",
      "Priority",
      "All of the mentioned"
    ]
  },
  {
    id: 5,
    question: "If a process fails, most operating system write the error information to a ______",
    answer: "log file",
    options: [
      "log file",
      "another running process",
      "new file",
      "none of the mentioned"
    ]
  },
  {
    id: 6,
    question: 'Which one of the following is not a real time operating system?',
    answer: "Palm OS",
    options: [
      "VxWorks",
      "QNX",
      "RTLinux",
      "Palm OS"
    ]
  },
  {
    id: 7,
    question: "The OS X has ____________",
    answer: "hybrid kernel",
    options: [
      "monolithic kernel",
      "hybrid kernel",
      "microkernel",
      "monolithic kernel with modules"
    ]
  },
  {
    id: 8,
    question: "Which facility dynamically adds probes to a running system, both in user processes and in the kernel?",
    answer: "DTrace",
    options: [
      "DTrace",
      "DLocate",
      "DMap",
      "DAdd"
    ]
  },
  {
    id: 9,
    question: "Which one of the following is not true?",
    answer: "kernel is made of various modules which can not be loaded in running operating system",
    options: [
      "kernel is the program that constitutes the central core of the operating system",
      "kernel is the first part of operating system to load into memory during booting",
      "kernel is made of various modules which can not be loaded in running operating system",
      "kernel remains in the memory during the entire computer session"
    ]
  },
  {
    id: 10,
    question: "In operating system, each process has its own __________",
    answer: "all of the mentioned",
    options: [
      "address space and global variables",
      "open files",
      "pending alarms, signals and signal handlers",
      "all of the mentioned"
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
