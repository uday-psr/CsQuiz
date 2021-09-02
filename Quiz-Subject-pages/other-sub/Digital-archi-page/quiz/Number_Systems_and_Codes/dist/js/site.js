
let questions = [
  {
    id: 1,
    question: "Convert hexadecimal value 16 to decimal.",
    answer: "22<sub>10</sub>",
    options: [
      "16<sub>10</sub>",
      "22<sub>10</sub>",
      "10<sub>10</sub>",
      "20<sub>10</sub>"
    ]
  },
  {
    id: 2,
    question: "Convert the following decimal number to 8-bit binary.<br>\
    187",
    answer: "10111011<sub>2</sub>",
    options: [
      "10111011<sub>2</sub>",
      "11011101<sub>2</sub>",
      "10111101<sub>2</sub>",
      "10111100<sub>2</sub>"
    ]
  },
  {
    id: 3,
    question: "Convert binary 111111110010 to hexadecimal.",
    answer: "FF2<sub>16</sub>",
    options: [
      "EE2<sub>16</sub>",
      "FF2<sub>16</sub>",
      "2FE<sub>16</sub>",
      "FD2<sub>16</sub>"
    ]
  },
  {
    id: 4,
    question: "Convert the following binary number to decimal.<br>\
    01011<sub>2</sub>",
    answer: "11",
    options: [
      "11",
      "35",
      "15",
      "10"
    ]
  },
  {
    id: 5,
    question: "Convert the binary number 1001.0010<sub>2</sub> to decimal.",
    answer: "9.125",
    options: [
      "90.125",
      "9.125",
      "125",
      "12.5"
    ]
  },
  {
    id: 6,
    question: "Decode the following ASCII message.<br>\
    10100111010100101010110001001011001<br>\
    01000001001000100000110100101000100",
    answer: "STUDY HARD",
    options: [
      "STUDYHARD",
      "STUDY HARD",
      "stydyhard",
      "study hard"
    ]
  },
  {
    id: 7,
    question: "Which of the following is the most widely used alphanumeric code for computer input and output?",
    answer: "ASCII",
    options: [
      "Gray",
      "ASCII",
      "Parity",
      "EBCDIC"
    ]
  },
  {
    id: 8,
    question: "Convert 59.72<sub>10</sub> to BCD.",
    answer: "01011001.01110010",
    options: [
      "111011",
      "01011001.01110010",
      "1110.11",
      "0101100101110010"
    ]
  },
  {
    id: 9,
    question: "Which is typically the longest: bit, byte, nibble, word?",
    answer: "Word",
    options: [
      "Bit",
      "Byte",
      "Nibble",
      "Word"
    ]
  },
  {
    id: 10,
    question: "The decimal number 188 is equal to the binary number ________.",
    answer: "10111100",
    options: [
      "10111100",
      "0111000",
      "1100011",
      "1111000"
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
