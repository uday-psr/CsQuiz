
let questions = [
  {
    id: 1,
    question: "In segmentation, each address is specified by ____________",
    answer: "a segment number & offset",
    options: [
      "a segment number & offset",
      "an offset & value",
      "a value & segment number",
      "a key & value"
    ]
  },
  {
    id: 2,
    question: "In paging the user provides only ________ which is partitioned by the hardware into ________ and ______",
    answer: "one address, page number, offset",
    options: [
      "one address, page number, offset",
      "one offset, page number, address",
      "page number, offset, address",
      "none of the mentioned"
    ]
  },
  {
    id: 3,
    question: "Each entry in a segment table has a ____________",
    answer: "segment base",
    options: [
      "segment peak",
      "segment value",
      "segment base",
      "none of the mentioned"
    ]
  },
  {
    id: 4,
    question: "The segment base contains the ____________",
    answer: "starting physical address of the segment in memory",
    options: [
      "starting logical address of the process",
      "starting physical address of the segment in memory",
      "segment length",
      "none of the mentioned"
    ]
  },
  {
    id: 5,
    question: "The segment limit contains the ____________",
    answer: "segment length",
    options: [
      "starting logical address of the process",
      "starting physical address of the segment in memory",
      "segment length",
      "none of the mentioned"
    ]
  },
  {
    id: 6,
    question: 'The offset ‘d’ of the logical address must be ____________',
    answer: "between 0 and segment limit",
    options: [
      "greater than segment limit",
      "between 0 and segment limit",
      "between 0 and the segment number",
      "greater than the segment number"
    ]
  },
  {
    id: 7,
    question: "If the offset is legal ____________",
    answer: "it is used as a physical memory address itself",
    options: [
      "it is used as a physical memory address itself",
      "it is subtracted from the segment base to produce the physical memory address",
      "it is added to the segment base to produce the physical memory address",
      "none of the mentioned"
    ]
  },
  {
    id: 8,
    question: "When the entries in the segment tables of two different processes point to the same physical location ____________",
    answer: "segments are shared",
    options: [
      "the segments are invalid",
      "the processes get blocked",
      "segments are shared",
      "all of the mentioned"
    ]
  },
  {
    id: 9,
    question: "The protection bit is 0/1 based on ____________",
    answer: "read – write",
    options: [
      "write only",
      "read only",
      "read – write",
      "none of the mentioned"
    ]
  },
  {
    id: 10,
    question: "If there are 32 segments, each of size 1Kb, then the logical address should have ____________",
    answer: "13 bits",
    options: [
      "13 bits",
      "14 bits",
      "15 bits",
      "16 bits"
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
