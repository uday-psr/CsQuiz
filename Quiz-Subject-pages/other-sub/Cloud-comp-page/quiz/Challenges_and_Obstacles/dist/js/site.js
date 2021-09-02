
let questions = [
  {
    id: 1,
    question: "Which of the following subject area deals with pay-as-you-go usage model?",
    answer: "Accounting Management",
    options: [
      "Accounting Management",
      "Compliance",
      "Data Privacy",
      "All of the mentioned"
    ]
  },
  {
    id: 2,
    question: "Point out the correct statement.",
    answer: "Cloud computing vendors run very reliable networks",
    options: [
      "Except for tightly managed SaaS cloud providers, the burden of resource management is still in the hands of the user",
      "Cloud computing vendors run very reliable networks",
      "The low barrier to entry cannot be accompanied by a low barrier to provisioning",
      "All of the mentioned"
    ]
  },
  {
    id: 3,
    question: "________ captive requires that the cloud accommodate multiple compliance regimes.",
    answer: "Policy-based",
    options: [
      "Licensed",
      "Policy-based",
      "Variable",
      "All of the mentioned"
    ]
  },
  {
    id: 4,
    question: "Security methods such as private encryption, VLANs and firewalls comes under __________ subject area.",
    answer: "Data Privacy",
    options: [
      "Accounting Management",
      "Compliance",
      "Data Privacy",
      "All of the mentioned"
    ]
  },
  {
    id: 5,
    question: "Point out the wrong statement.",
    answer: "A network backbone is a very low-capacity network connection",
    options: [
      "Large cloud providers with geographically dispersed sites worldwide, therefore, achieve reliability rates that are hard for private systems to achieve",
      "Private data centers tend to be located in places where the company or unit was founded or acquired",
      "A network backbone is a very low-capacity network connection",
      "None of the mentioned"
    ]
  },
  {
    id: 6,
    question: "Which of the following captive area deals with monitoring?",
    answer: "Variable but under control",
    options: [
      "Licensed",
      "Variable but under control",
      "Low",
      "All of the mentioned"
    ]
  },
  {
    id: 7,
    question: "Network bottlenecks occur when ______ data sets must be transferred.",
    answer: "large",
    options: [
      "large",
      "small",
      "big",
      "all of the mentioned"
    ]
  },
  {
    id: 8,
    question: "The reputation for cloud computing services for the quality of those services is shared by _________",
    answer: "tenants",
    options: [
      "replicas",
      "shards",
      "tenants",
      "all of the mentioned"
    ]
  },
  {
    id: 9,
    question: "Cloud ________ are standardized in order to appeal to the majority of its audience.",
    answer: "SLAs",
    options: [
      "SVAs",
      "SLAs",
      "SALs",
      "None of the mentioned"
    ]
  },
  {
    id: 10,
    question: "__________ is a function of the particular enterprise and application in an on-premises deployment.",
    answer: "Vendor lock-in",
    options: [
      "Vendor lock",
      "Vendor lock-in",
      "Vendor lock-ins",
      "None of the mentioned"
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
