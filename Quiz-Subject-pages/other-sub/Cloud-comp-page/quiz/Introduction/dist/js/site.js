
let questions = [
  {
    id: 1,
    question: "_________ computing refers to applications and services that run on a distributed network using virtualized resources.",
    answer: "Cloud",
    options: [
      "Distributed",
      "Cloud",
      "Soft",
      "Parallel"
    ]
  },
  {
    id: 2,
    question: "Point out the wrong statement.",
    answer: "Soft computing represents a real paradigm shift in the way in which systems are deployed",
    options: [
      "The massive scale of cloud computing systems was enabled by the popularization of the Internet",
      "Soft computing represents a real paradigm shift in the way in which systems are deployed",
      "Cloud computing makes the long-held dream of utility computing possible with a pay-as-you-go, infinitely scalable, universally available system",
      "All of the mentioned"
    ]
  },
  {
    id: 3,
    question: "________ as a utility is a dream that dates from the beginning of the computing industry itself.",
    answer: "Computing",
    options: [
      "Model",
      "Computing",
      "Software",
      "All of the mentioned"
    ]
  },
  {
    id: 4,
    question: "Which of the following is essential concept related to Cloud?",
    answer: "Abstraction",
    options: [
      "Reliability",
      "Productivity",
      "Abstraction",
      "All of the mentioned"
    ]
  },
  {
    id: 5,
    question: "Point out the wrong statement.",
    answer: "All applications benefit from deployment in the cloud",
    options: [
      "All applications benefit from deployment in the cloud",
      "With cloud computing, you can start very small and become big very fast",
      "Cloud computing is revolutionary, even if the technology it is built on is evolutionary",
      "None of the mentioned"
    ]
  },
  {
    id: 6,
    question: "Which of the following cloud concept is related to pooling and sharing of resources?",
    answer: "Virtualization",
    options: [
      "Polymorphism",
      "Abstraction",
      "Virtualization",
      "None of the mentioned"
    ]
  },
  {
    id: 7,
    question: "________ has many of the characteristics of what is now being called cloud computing.",
    answer: "Internet",
    options: [
      "Internet",
      "Softwares",
      "Web Service",
      "All of the mentioned"
    ]
  },
  {
    id: 8,
    question: "Which of the following can be identified as cloud?",
    answer: "Hadoop",
    options: [
      "Web Applications",
      "Intranet",
      "Hadoop",
      "All of the mentioned"
    ]
  },
  {
    id: 9,
    question: "Cloud computing is an abstraction based on the notion of pooling physical resources and presenting them as a ________ resource.",
    answer: "virtual",
    options: [
      "real",
      "virtual",
      "cloud",
      "none of the mentioned"
    ]
  },
  {
    id: 10,
    question: "Which of the following is Cloud Platform by Amazon?",
    answer: "AWS",
    options: [
      "Azure",
      "AWS",
      "Cloudera",
      "All of the mentioned"
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
