
let questions = [
  {
    id: 1,
    question: "Which one of the following is an application of Queue Data Structure?",
    answer: "All of the above",
    options: [
      "When a resource is shared among multiple consumers.",
      "When data is transferred asynchronously (data not necessarily received at same rate as sent) between two processes",
      "Load Balancing",
      "All of the above"
    ]
  },
  {
    id: 2,
    question: "How many stacks are needed to implement a queue. Consider the situation where no other data structure like arrays, linked list is available to you.",
    answer: "2",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    id: 3,
    question: "How many queues are needed to implement a stack. Consider the situation where no other data structure like arrays, linked list is available to you.",
    answer: "2",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    id: 4,
    question: "A priority queue can efficiently implemented using which of the following data structures? Assume that the number of insert and peek (operation to see the current highest priority item) and extraction (remove the highest priority item) operations are almost same.",
    answer: "Heap Data Structures like Binary Heap, Fibonacci Heap",
    options: [
      "Array",
      "Linked List",
      "Heap Data Structures like Binary Heap, Fibonacci Heap",
      "None of the above"
    ]
  },
  {
    id: 5,
    question: "Which of the following is true about linked list implementation of queue?",
    answer: "Both of the above",
    options: [
      "In push operation, if new nodes are inserted at the beginning of linked list, then in pop operation, nodes must be removed from end.",
      "In push operation, if new nodes are inserted at the end, then in pop operation, nodes must be removed from the beginning.",
      "Both of the above",
      "None of the above"
    ]
  },
  {
    id: 6,
    question: 'Suppose a circular queue of capacity (n – 1) elements is implemented with an array of n elements. Assume that the insertion and deletion operation are carried out using REAR and FRONT as array index variables, respectively. Initially, REAR = FRONT = 0. The conditions to detect queue full and queue empty are',
    answer: "Full: (REAR+1) mod n == FRONT, empty: REAR == FRONT",
    options: [
      "Full: (REAR+1) mod n == FRONT, empty: REAR == FRONT",
      "Full: (REAR+1) mod n == FRONT, empty: (FRONT+1) mod n == REAR",
      "Full: REAR == FRONT, empty: (REAR+1) mod n == FRONT",
      "Full: (FRONT+1) mod n == REAR, empty: REAR == FRONT"
    ]
  },
  {
    id: 7,
    question: "A Priority-Queue is implemented as a Max-Heap. Initially, it has 5 elements. The level-order traversal of the heap is given below: 10, 8, 5, 3, 2 Two new elements ”1‘ and ”7‘ are inserted in the heap in that order. The level-order traversal of the heap after the insertion of the elements is:",
    answer: "10, 8, 7, 3, 2, 1, 5",
    options: [
      "10, 8, 7, 5, 3, 2, 1",
      "10, 8, 7, 2, 3, 1, 5",
      "10, 8, 7, 1, 2, 3, 5",
      "10, 8, 7, 3, 2, 1, 5"
    ]
  },
  {
    id: 8,
    question: "Consider the following pseudo code. Assume that IntQueue is an integer queue. What does the function fun do?<br>\
    void fun(int n)<br>\
{<br>\
    IntQueue q = new IntQueue();<br>\
    q.enqueue(0);<br>\
    q.enqueue(1);<br>\
    for (int i = 0; i < n; i++)<br>\
    {<br>\
        int a = q.dequeue();<br>\
        int b = q.dequeue();<br>\
        q.enqueue(b);<br>\
        q.enqueue(a + b);<br>\
        ptint(a);<br>\
    }<br>\
}",
    answer: "Prints first n Fibonacci numbers",
    options: [
      "Prints numbers from 0 to n-1",
      "Prints numbers from n-1 to 0",
      "Prints first n Fibonacci numbers",
      "Prints first n Fibonacci numbers in reverse order."
    ]
  },
  {
    id: 9,
    question: "The minimum number of stacks needed to implement a queue is",
    answer: "2",
    options: [
      "3",
      "1",
      "2",
      "4"
    ]
  },
  {
    id: 10,
    question: "A priority queue is implemented as a max-heap. Initially, it has five elements. The level-order traversal of the heap is as follows: 20, 18, 15, 13, 12 Two new elements ‘10’ and ‘17’ are inserted in the heap in that order. The level-order traversal of the heap after the insertion of the element is:",
    answer: "20, 18, 17, 13, 12, 10, 15",
    options: [
      "20, 18, 17, 15, 13, 12, 10",
      "20, 18, 17, 12, 13, 10, 15",
      "20, 18, 17, 10, 12, 13, 15",
      "20, 18, 17, 13, 12, 10, 15"
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
