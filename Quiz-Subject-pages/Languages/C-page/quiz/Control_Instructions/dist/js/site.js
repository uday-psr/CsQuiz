
let questions = [
  {
    id: 1,
    question: "How many times \"CsQuiz\" is get printed?<br>\
    int main()<br>\
{<br>\
    int x;<br>\
    for(x=-1; x<=10; x++)<br>\
    {<br>\
        if(x < 5)<br>\
            continue;<br>\
        else<br>\
            break;<br>\
        printf(\"CsQuiz\");<br>\
    }<br>\
    return 0;<br>\
}",
    answer: "0 times",
    options: [
      "Infinite times",
      "11 times",
      "0 times",
      "10 times"
    ]
  },
  {
    id: 2,
    question: "How many times the while loop will get executed if a short int is 2 byte wide?<br>\
    int main()<br>\
{<br>\
    int j=1;<br>\
    while(j <= 255)<br>\
    {<br>\
        printf(\"%c %d\n\", j, j);<br>\
        j++;<br>\
    }<br>\
    return 0;<br>\
}",
    answer: "255 times",
    options: [
      "Infinite times",
      "255 times",
      "256 times",
      "254 times"
    ]
  },
  {
    id: 3,
    question: "Which of the following is not logical operator?",
    answer: "&",
    options: [
      "&",
      "&",
      "||",
      "!"
    ]
  },
  {
    id: 4,
    question: "In mathematics and computer programming, which is the correct order of mathematical operators ?",
    answer: "Division, Multiplication, Addition, Subtraction",
    options: [
      "Addition, Subtraction, Multiplication, Division",
      "Division, Multiplication, Addition, Subtraction",
      "Multiplication, Addition, Division, Subtraction",
      "Addition, Division, Modulus, Subtraction"
    ]
  },
  {
    id: 5,
    question: "Which of the following cannot be checked in a switch-case statement?",
    answer: "Float",
    options: [
      "Integer",
      "Character",
      "Float",
      "enum"
    ]
  },
  {
    id: 6,
    question: 'What will be the output of the program?<br>\
    int main()<br>\
{<br>\
    int i=0;<br>\
    for(; i<=5; i++);<br>\
        printf("%d", i);<br>\
    return 0;<br>\
}',
    answer: "6",
    options: [
      "0, 1, 2, 3, 4, 5",
      "5",
      "1, 2, 3, 4",
      "6"
    ]
  },
  {
    id: 7,
    question: 'What will be the output of the program?<br>\
    int main()<br>\
{<br>\
    char ch;<br>\
    if(ch = printf(""))<br>\
        printf(\"It matters\");<br>\
    else<br>\
        printf(\"It doesn\'t matters");<br>\
    return 0;<br>\
}',
    answer: "It doesn't matters",
    options: [
      "It matters",
      "It doesn't matters",
      "matters",
      "No output"
    ]
  },
  {
    id: 8,
    question: "A char variable can store either an ASCII character or a Unicode character.",
    answer: "True",
    options: [
      "True",
      "False",
      "Wrong statement",
      "Don't know"
    ]
  },
  {
    id: 9,
    question: 'Point out the error, if any in the program.<br>\
    int main()<br>\
{<br>\
    int i = 1;<br>\
    switch(i)<br>\
    {<br>\
        printf("This is c program.");<br>\
        case 1:<br>\
            printf("Case1");<br>\
            break;<br>\
        case 2:<br>\
            printf("Case2");<br>\
            break;<br>\
    }<br>\
return 0;<br>\
}',
    answer: "No Error and prints Case1",
    options: [
      "Error: No default specified",
      "Error: Invalid printf statement after switch statement",
      "No Error and prints Case1",
      "None of above"
    ]
  },
  {
    id: 10,
    question: 'Point out the error, if any in the program.<br>\
    int main()<br>\
{<br>\
    int a = 10, b;<br>\
    a >=5 ? b=100: b=200;<br>\
    printf("%d\n", b);<br>\
    return 0;<br>\
}<br>\
    ',
    answer: "Declaration",
    options: [
      "100",
      "200",
      "Error: L value required for b",
      "Garbage value"
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
