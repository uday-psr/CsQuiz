
let questions = [
  {
    id: 1,
    question: "Which devices provides positional information to the graphics system ?",
    answer: "Both a and c",
    options: [
      "Input devices",
      "Output devices",
      "Pointing devices",
      "Both a and c"
    ]
  },
  {
    id: 2,
    question: "The number of pixels stored in the frame buffer of a graphics system is known as",
    answer: "Only a",
    options: [
      "Resolution",
      "Depth",
      "Resalution",
      "Only a"
    ]
  },
  {
    id: 3,
    question: "In graphical system, the array of pixels in the picture are stored in",
    answer: "Memory",
    options: [
      "Memory",
      "Frame buffer",
      "Processor",
      "All of the mentioned"
    ]
  },
  {
    id: 4,
    question: "Heat supplied to the cathode by directing a current through a coil of wire is called",
    answer: "Filament",
    options: [
      "Electron gun",
      "Electron beam",
      "Filament",
      "Anode and cathode"
    ]
  },
  {
    id: 5,
    question: "The maximum number of points that can be displayed without overlap on a CRT is referred as",
    answer: "Resolution",
    options: [
      "Picture",
      "Resolution",
      "Persistence",
      "Neither b nor c"
    ]
  },
  {
    id: 6,
    question: "________ stores the picture information as a charge distribution behind the phosphor-coated screen.",
    answer: "Direct-view storage tube",
    options: [
      "Cathode ray tube",
      "Direct-view storage tube",
      "Flat panel displays",
      "3D viewing device"
    ]
  },
  {
    id: 7,
    question: "The devices which converts the electrical energy into light is called",
    answer: "",
    options: [
      "Liquid-crystal displays",
      "Non-emitters",
      "Plasma panels",
      "Emitters"
    ]
  },
  {
    id: 8,
    question: "In which system, the Shadow mask methods are commonly used",
    answer: "Raster-scan system",
    options: [
      "Raster-scan system",
      "Random-scan system",
      "Only b",
      "Both a and b"
    ]
  },
  {
    id: 9,
    question: "The process of digitizing a given picture definition into a set of pixel-intensity for storage in the frame buffer is called",
    answer: "Scan conversion",
    options: [
      "Rasterization",
      "Encoding",
      "Scan conversion",
      "True color system"
    ]
  },
  {
    id: 10,
    question: "Random-scan system mainly designed for",
    answer: "Line-drawing applications",
    options: [
      "Realistic shaded screen",
      "Fog effect",
      "Line-drawing applications",
      "Only b"
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
