
let questions = [
  {
    id: 1,
    question: 'What does the following function do for a given Linked List with first node as head?<br>\
    void fun1(struct node* head)<br>\
{<br>\
  if(head == NULL)<br>\
    return;<br>\
    <br>\
  fun1(head->next);<br>\
  printf("%d  ", head->data);<br>\
}',
    answer: "Prints all nodes of linked list in reverse order",
    options: [
      "Prints all nodes of linked lists",
      "Prints all nodes of linked list in reverse order",
      "Prints alternate nodes of Linked List",
      "Prints alternate nodes in reverse order"
    ]
  },
  {
    id: 2,
    question: "Which of the following points is/are true about Linked List data structure when it is compared with array",
    answer: "All of the above",
    options: [
      "Arrays have better cache locality that can make them better in terms of performance.",
      "It is easy to insert and delete elements in Linked List",
      "The size of array has to be pre-decided, linked lists can change their size any time.",
      "All of the above"
    ]
  },
  {
    id: 3,
    question: "Which of the following statements is correct?",
    answer: "Derived class pointer cannot point to base class.",
    options: [
      "Base class pointer cannot point to derived class.",
      "Derived class pointer cannot point to base class.",
      "Pointer to derived class cannot be created.",
      "Pointer to base class cannot be created."
    ]
  },
  {
    id: 4,
    question: "Consider the following function that takes reference to head of a Doubly Linked List as parameter. Assume that a node of doubly linked list has previous pointer as prev and next pointer as next.<br>\
    void fun(struct node **head_ref)<br>\
{<br>\
    struct node *temp = NULL;<br>\
    struct node *current = *head_ref;<br>\
    <br>\
    while (current !=  NULL)<br>\
    {<br>\
        temp = current->prev;<br>\
        current->prev = current->next;<br>\
        current->next = temp;<br>\
        current = current->prev;<br>\
    }<br>\
    <br>\
    if(temp != NULL )<br>\
        *head_ref = temp->prev;<br>\
}<br>\
Assume that reference of head of following doubly linked list is passed to above function 1 <--> 2 <--> 3 <--> 4 <--> 5 <-->6. What should be the modified linked list after the function call?",
    answer: "6 <--> 5 <--> 4 <--> 3 <--> 2 <--> 1.",
    options: [
      "2 <--> 1 <--> 4 <--> 3 <--> 6 <-->5",
      "5 <--> 4 <--> 3 <--> 2 <--> 1 <-->6.",
      "6 <--> 5 <--> 4 <--> 3 <--> 2 <--> 1.",
      "6 <--> 5 <--> 4 <--> 3 <--> 1 <--> 2"
    ]
  },
  {
    id: 5,
    question: "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
    answer: "Merge Sort",
    options: [
      "Insertion Sort",
      "Quick Sort",
      "Heap Sort",
      "Merge Sort"
    ]
  },
  {
    id: 6,
    question: 'What is the output of following function for start pointing to first node of following linked list? 1->2->3->4->5->6<br>\
    void fun(struct node* start)<br>\
{<br>\
  if(start == NULL)<br>\
    return;<br>\
  printf("%d  ", start->data); <br>\
  <br>\
  if(start->next != NULL )<br>\
    fun(start->next->next);<br>\
  printf("%d  ", start->data);<br>\
}',
    answer: "1 3 5 5 3 1",
    options: [
      "1 4 6 6 4 1",
      "1 3 5 1 3 5",
      "1 2 3 5",
      "1 3 5 5 3 1"
    ]
  },
  {
    id: 7,
    question: "In the worst case, the number of comparisons needed to search a singly linked list of length n for a given element is",
    answer: "n",
    options: [
      "log 2 n",
      "n/2",
      "log 2 n – 1",
      "n"
    ]
  },
  {
    id: 8,
    question: "Suppose each set is represented as a linked list with elements in arbitrary order. Which of the operations among union, intersection, membership, cardinality will be the slowest? ",
    answer: "union, intersection",
    options: [
      "union only",
      "intersection, membership",
      "membership, cardinality",
      "union, intersection"
    ]
  },
  {
    id: 9,
    question: "What are the time complexities of finding 8th element from beginning and 8th element from end in a singly linked list? Let n be the number of nodes in linked list, you may assume that n > 8.",
    answer: "O(1) and O(n)",
    options: [
      "O(1) and O(n)",
      "O(1) and O(1)",
      "O(n) and O(1)",
      "O(n) and O(n)"
    ]
  },
  {
    id: 10,
    question: "Is it possible to create a doubly linked list using only one pointer with every node.",
    answer: "Yes, possible by storing XOR of addresses of previous and next nodes.",
    options: [
      "Not Possible",
      "Yes, possible by storing XOR of addresses of previous and next nodes.",
      "Yes, possible by storing XOR of current node and next node",
      "Yes, possible by storing XOR of current node and previous node"
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
