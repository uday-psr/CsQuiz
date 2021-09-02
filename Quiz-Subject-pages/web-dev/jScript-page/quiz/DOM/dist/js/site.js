
let questions = [
  {
    id: 1,
    question: "Which function among the following lets to register a function to be invoked once?",
    answer: "setTimeout()",
    options: [
      "setTimeout()",
      "setTotaltime()",
      "setInterval()",
      "settime()"
    ]
  },
  {
    id: 2,
    question: "Which function among the following lets to register a function to be invoked repeatedly after a certain time?",
    answer: "setInterval()",
    options: [
      "setTimeout()",
      "setTotaltime()",
      "setInterval()",
      "settime()"
    ]
  },
  {
    id: 3,
    question: "Which is the handler method used to invoke when uncaught JavaScript exceptions occur?",
    answer: "Onerror",
    options: [
      "Onhalt",
      "Onerror",
      "Both onhalt and onerror",
      "Onsuspend"
    ]
  },
  {
    id: 4,
    question: "Which property is used to obtain browser vendor and version information?",
    answer: "navigator",
    options: [
      "modal",
      "version",
      "browser",
      "navigator"
    ]
  },
  {
    id: 5,
    question: "Which method receives the return value of setInterval() to cancel future invocations?",
    answer: "clearInterval()",
    options: [
      "clearInvocation()",
      "cancelInvocation()",
      "clearInterval()",
      "clear()"
    ]
  },
  {
    id: 6,
    question: "The setTimeout() belongs to which object?",
    answer: "Window",
    options: [
      "Element",
      "Window",
      "Location",
      "Event"
    ]
  },
  {
    id: 7,
    question: "Which method receives the return value of setTimeout() to cancel future invocations?",
    answer: "clearTimeout()",
    options: [
      "clearTimeout()",
      "clearInterval()",
      "clearSchedule()",
      "cancelInvocation()"
    ]
  },
  {
    id: 8,
    question: "What will happen if we call setTimeout() with a time of 0 ms?",
    answer: "Placed in queue",
    options: [
      "Placed in stack",
      "Placed in queue",
      "Will run continuously",
      "Will execute immediately"
    ]
  },
  {
    id: 9,
    question: "To which object does the location property belong?",
    answer: "Window",
    options: [
      "Window",
      "Position",
      "Element",
      "Location"
    ]
  },
  {
    id: 10,
    question: "What is the result of the following code snippet?<br>\
    window.location === document.location",
    answer: "True",
    options: [
      "False",
      "True",
      "0",
      "1"
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
