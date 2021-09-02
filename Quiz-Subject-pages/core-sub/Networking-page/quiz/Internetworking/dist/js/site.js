
let questions = [
  {
    id: 1,
    question: "Which layer 1 devices can be used to enlarge the area covered by a single LAN segment?<br>\
    1.Switch<br>\
    2.NIC<br>\
    3.Hub<br>\
    4.Repeater<br>\
    5.RJ45 transceiver",
    answer: "3 and 4",
    options: [
      "1 only",
      "1 and 3",
      "3 and 4",
      "5 only"
    ]
  },
  {
    id: 2,
    question: "Routers operate at layer _____. LAN switches operate at layer _____. Ethernet hubs operate at layer _____. Word processing operates at layer _____.",
    answer: "3, 2, 1, none",
    options: [
      "3, 3, 1, 7",
      "3, 2, 1, none",
      "3, 2, 1, 7",
      "3, 3, 2, none"
    ]
  },
  {
    id: 3,
    question: "Which of the following describe router functions? ",
    answer: "All of the above",
    options: [
      "Packet switching",
      "Packet filtering",
      "Path selection",
      "All of the above"
    ]
  },
  {
    id: 4,
    question: "Which of the following types of connections can use full duplex?<br>\
    1.Hub to hub<br>\
    2.Switch to switch<br>\
    3.Host to host<br>\
    4.Switch to hub<br>\
    5.Switch to host",
    answer: "2, 3 and 5",
    options: [
      "1, 2 and 4",
      "3 and 4",
      "3 and 5",
      "2, 3 and 5"
    ]
  },
  {
    id: 5,
    question: "Acknowledgments, sequencing, and flow control are characteristics of which OSI layer?",
    answer: "Layer 4",
    options: [
      "Layer 2",
      "Layer 3",
      "Layer 4",
      "Layer 7"
    ]
  },
  {
    id: 6,
    question: 'Which fields are contained within an IEEE Ethernet frame header?<br>\
    1.Source and destination MAC address<br>\
    2.Source and destination network address<br>\
    3.Source and destination MAC address and source and destination network address<br>\
    4.FCS field',
    answer: "1 and 4",
    options: [
      "1 and 4",
      "2 only",
      "2 and 3 only",
      "3 only"
    ]
  },
  {
    id: 7,
    question: "What type of RJ45 UTP cable do you use to connect a PC's COM port to a router or switch console port?",
    answer: "Rolled",
    options: [
      "Straight-through",
      "Crossover cable",
      "Crossover with a CSU/DSU",
      "Rolled"
    ]
  },
  {
    id: 8,
    question: "Segmentation of a data stream happens at which layer of the OSI model?",
    answer: "Transport",
    options: [
      "Physical",
      "Data Link",
      "Network",
      "Transport"
    ]
  },
  {
    id: 9,
    question: "When data is encapsulated, which is the correct order?",
    answer: "Data, segment, packet, frame, bit",
    options: [
      "Data, frame, packet, segment, bit",
      "Segment, data, packet, frame, bit",
      "Data, segment, packet, frame, bit",
      "Data, segment, frame, packet, bit"
    ]
  },
  {
    id: 10,
    question: "What type of RJ45 UTP cable is used between switches?",
    answer: "Crossover cable",
    options: [
      "Straight-through",
      "Crossover cable",
      "Crossover with a CSU/DSU",
      "Crossover with a router in between the two switches"
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
