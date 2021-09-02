
let questions = [
  {
    id: 1,
    question: "Winchester disks are a type of _______",
    answer: "magnetic disks",
    options: [
      "optical disks",
      "magnetic disks",
      "compact disks",
      "magnetic drives"
    ]
  },
  {
    id: 2,
    question: "Bernoulli disks are a type of magnetic floppy disks.",
    answer: "False",
    options: [
      "True",
      "False",
      "...",
      "..."
    ]
  },
  {
    id: 3,
    question: "A plug and play storage device that simply plugs in the port of a computer is __________",
    answer: "Flash drive",
    options: [
      "Flash drive",
      "Compact disk",
      "Hard disk",
      "CD"
    ]
  },
  {
    id: 4,
    question: "What does USB stand for?",
    answer: "Universal Serial Bus",
    options: [
      "Universal Signal Board",
      "Universal Signal Bus",
      "Universal Serial Bus",
      "Universal Serial Board"
    ]
  },
  {
    id: 5,
    question: "A device similar to a flash drive ______________",
    answer: "Memory card",
    options: [
      "Memory card",
      "Compact drive",
      "Compact disk",
      "Memory disk"
    ]
  },
  {
    id: 6,
    question: "What does RAID stand for?",
    answer: "Redundant array of independent disks",
    options: [
      "Redundant array of independent disks",
      "Redundant array of inexpensive disks",
      "Redundant array of intermediate disks",
      "Redundant array of improper disks"
    ]
  },
  {
    id: 7,
    question: "A set of hard disk drives with a controller mounted in a single box, forming a single large storage unit is ____________",
    answer: "Disk array",
    options: [
      "Drives",
      "Disk array",
      "Compact drives",
      "Multi-cores"
    ]
  },
  {
    id: 8,
    question: "The process in which a file is partitioned into smaller parts and different parts are stored in different disks is ___________",
    answer: "Stripping",
    options: [
      "RAID",
      "Mirroring",
      "Stripping",
      "RAID classification"
    ]
  },
  {
    id: 9,
    question: "Which of the following uses multiple hard disk platters mounted on a single central shift?",
    answer: "Disk packs",
    options: [
      "Disk drives",
      "Hard disks",
      "Disk packs",
      "Compact disks"
    ]
  },
  {
    id: 10,
    question: "Which of the following is not a magnetic disk?",
    answer: "FLASH",
    options: [
      "Floppy",
      "Winchester",
      "Zip",
      "FLASH"
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
