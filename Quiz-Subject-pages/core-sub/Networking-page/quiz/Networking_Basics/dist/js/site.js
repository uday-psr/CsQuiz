
let questions = [
  {
    id: 1,
    question: "How long is an IPv6 address?",
    answer: "128 bits",
    options: [
      "32 bits",
      "128 bytes",
      "64 bits",
      "128 bits"
    ]
  },
  {
    id: 2,
    question: "What flavor of Network Address Translation can be used to have one IP address allow many users to connect to the global Internet?",
    answer: "PAT",
    options: [
      "NAT",
      "Static",
      "Dynamic",
      "PAT"
    ]
  },
  {
    id: 3,
    question: "What are the two main types of access control lists (ACLs)?<br>\
    1.Standard<br>\
    2.IEEE<br>\
    3.Extended<br>\
    4.Specialized",
    answer: "1 and 3",
    options: [
      "1 and 3",
      "2 and 4",
      "3 and 4",
      "1 and 2"
    ]
  },
  {
    id: 4,
    question: "Which protocol does Ping use?",
    answer: "ICMP",
    options: [
      "TCP",
      "ARP",
      "ICMP",
      "BootP"
    ]
  },
  {
    id: 5,
    question: "What command is used to create a backup configuration?",
    answer: "copy running-config startup-config",
    options: [
      "copy running backup",
      "copy running-config startup-config",
      "config mem",
      "wr mem"
    ]
  },
  {
    id: 6,
    question: 'Which of the following is the valid host range for the subnet on which the IP address 192.168.168.188 255.255.255.192 resides?',
    answer: "192.168.168.129-190",
    options: [
      "192.168.168.129-191",
      "192.168.168.128-190",
      "192.168.168.129-190",
      "192.168.168.128-192"
    ]
  },
  {
    id: 7,
    question: "Which protocol does DHCP use at the Transport layer?",
    answer: "UDP",
    options: [
      "IP",
      "TCP",
      "UDP",
      "ARP"
    ]
  },
  {
    id: 8,
    question: "Where is a hub specified in the OSI model?",
    answer: "Physical layer",
    options: [
      "Session layer",
      "Physical layer",
      "Data Link layer",
      "Application layer"
    ]
  },
  {
    id: 9,
    question: "What is a stub network?",
    answer: "A network that has only one entry and exit point.",
    options: [
      "A network with more than one exit point.",
      "A network with more than one exit and entry point.",
      "A network with only one entry and no exit point.",
      "A network that has only one entry and exit point."
    ]
  },
  {
    id: 10,
    question: "What is the main reason the OSI model was created?",
    answer: "So different networks could communicate.",
    options: [
      "To create a layered model larger than the DoD model.",
      "So application developers can change only one layer's protocols at a time.",
      "So different networks could communicate.",
      "So Cisco could use the model."
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
