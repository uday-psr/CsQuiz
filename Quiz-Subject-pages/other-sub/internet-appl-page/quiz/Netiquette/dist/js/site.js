
let questions = [
  {
    id: 1,
    question: "Typing in all capitals in electronic communications means:",
    answer: "you are shouting.",
    options: [
      "this message is very important.",
      "you are shouting.",
      "it's okay to forward this message to others.",
      "nothing special--typing in all caps is normal."
    ]
  },
  {
    id: 2,
    question: "It is OK to forward or post an email message that you received if",
    answer: "the author of the message has given you permission to forward or post it.",
    options: [
      "the message is typed in all capitals.",
      "the author of the message has given you permission to forward or post it.",
      "it does not contain any copyrighted material.",
      "the author of the message hasn't marked it as confidential."
    ]
  },
  {
    id: 3,
    question: "Before posting to a discussion group you should",
    answer: "all of the above.",
    options: [
      "read the FAQ.",
      "find the Frequently Asked Questions (FAQ) document.",
      "read some of the existing posts to get an idea of the tone and character of the group.",
      "all of the above."
    ]
  },
  {
    id: 4,
    question: "A flame is",
    answer: "a post or email message that expresses a strong opinion or criticism.",
    options: [
      "a post or email message that expresses a strong opinion or criticism.",
      "an expert programmer.",
      "a person who consistently breaks the rules of Netiquette.",
      "an online chain letter."
    ]
  },
  {
    id: 5,
    question: "The Golden Rule of Netiquette is",
    answer: "remember the human!",
    options: [
      "remember the human!",
      "a smiley in every message.",
      "follow the other rules of netiquette.",
      "never flame a friend."
    ]
  },
  {
    id: 6,
    question: 'The phrase "lurk before you leap" means',
    answer: "familiarize yourself with a discussion group before actively participating",
    options: [
      "send your post to the moderator via email before posting it to a discussion group.",
      "make sure there isn't a host moderating the chat before you scroll the chat screen.",
      "post test messages to several USENET newsgroups before posting a real message.",
      "familiarize yourself with a discussion group before actively participating"
    ]
  },
  {
    id: 7,
    question: "Spamming is very poor Netiquette and means",
    answer: "posting or emailing unsolicited advertising messages to a wide audience.",
    options: [
      "sending in lines of nonsensical garbage in a chat conversation.",
      "posting a message that contains graphic descriptions of something really gross.",
      "spilling the juice of meat-byproducts into your keyboard.",
      "posting or emailing unsolicited advertising messages to a wide audience."
    ]
  },
  {
    id: 8,
    question: "Knowledge and understanding of netiquette is useful because",
    answer: "it explains the conventions already being used by millions of cybernauts.",
    options: [
      "it will help you create a positive impression on those you meet in cyberspace.",
      "it explains some of the technical limitations of online communications.",
      "it explains the conventions already being used by millions of cybernauts.",
      "all of the above."
    ]
  },
  {
    id: 9,
    question: "Appropriate content for email messages includes",
    answer: "",
    options: [
      "anything you wouldn't mind having subpoenaed as part of a court proceeding.",
      "anything you wouldn't mind seeing on the evening news.",
      "anything you wouldn't mind your grandmother seeing.",
      "All of the above."
    ]
  },
  {
    id: 10,
    question: "Include a subject line",
    answer: "in all e-mail messages.",
    options: [
      "only when you are writing an official memo.",
      "only in personal memos.",
      "if the person you are sending it to requires one.",
      "in all e-mail messages."
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
