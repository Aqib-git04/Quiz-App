var quizWindow = document.querySelector('#quizWindow')
var resultWindow = document.querySelector('#result')
var question = document.querySelector('#question')
var announce = document.querySelector('#announce')

var label1 = document.querySelector('#val1')
var label2 = document.querySelector('#val2')
var label3 = document.querySelector('#val3')
var label4 = document.querySelector('#val4')

var opt1 = document.querySelector('#option1')
var opt2 = document.querySelector('#option2')
var opt3 = document.querySelector('#option3')
var opt4 = document.querySelector('#option4')

var totalQueCount = document.querySelector('#totalQueCount')
var correctQueCount = document.querySelector('#correctQueCount')
var answers = document.getElementsByClassName('optionsCheck')

var questionCount = 0
var score = 0

var htmlQuiz = [

  { que: ` Q1 Who is making the Web standards?`, opt1: 'GOOGLE', opt2: 'MICROSOFT', opt3: 'MOZILLA', opt4: 'WORLD WIDE WEB',
   ans: 'WORLD WIDE WEB' },

  { que: ` Q2 What is the abbreviation of HTML?'`, opt1: 'HYPER TEXT MARKUP LANGUAGE', opt2: 'HYPER INFO MARKUP LANGUAGE', opt3: 'HYPER TEND MARK LANGUAGE', opt4: 'HYPER TEST MARKS LANGUAGE',
   ans: 'HYPER TEXT MARKUP LANGUAGE' },

  { que: ` Q3 Choose the correct HTML element to define important text?`, opt1: 'STRONG', opt2: 'I', opt3: 'B', opt4: 'IMPORTANT', 
  ans: 'IMPORTANT' },
  
  { que:` Q4 What does DOM stand for in JavaScript?`, opt1: 'DOCUMENT OBJECT MODEL', opt2: 'DATA OBJECT MODEL', opt3: 'DEVELOPER OBJECT MODEL', opt4: 'DOCUMENT ORIENTATION MODEL',
   ans: 'DOCUMENT OBJECT MODEL' },

  { que:` Q5 Which keyword is used to declare variables in JavaScript?`, opt1: 'LET', opt2: 'NEW', opt3: 'VAR', opt4: 'CONST', 
  ans: 'VAR' },

  { que:` Q6 Which method is used to add a new item to the end of an array?' `, opt1: 'ADD()', opt2: 'PUSH()', opt3: 'APPEND()', opt4: 'INSERT()', 
  ans: 'PUSH()' },

  { que:` Q7 What does AJAX stand for?`, opt1: 'ASYNCHRONOUS JAVASCRIPT AND XML', opt2: 'ALL JAVASCRIPT AND XML', opt3: 'ADVANCED JAVASCRIPT AND XML', opt4: 'ASYNCHRONOUS JAVASCRIPT AND XHTML', 
  ans: 'ASYNCHRONOUS JAVASCRIPT AND XML' }

];


function renderQuestions(){
  
  question.innerHTML=htmlQuiz[questionCount].que;

    label1.innerHTML = htmlQuiz[questionCount].opt1
    label2.innerHTML = htmlQuiz[questionCount].opt2
    label3.innerHTML = htmlQuiz[questionCount].opt3
    label4.innerHTML = htmlQuiz[questionCount].opt4

    opt1.value = htmlQuiz[questionCount].opt1
    opt2.value = htmlQuiz[questionCount].opt2
    opt3.value = htmlQuiz[questionCount].opt3
    opt4.value = htmlQuiz[questionCount].opt4

    // console.log()
}
renderQuestions()

function next(){

   var checkedAns=false;
   
   for(var i=0;i<answers.length;i++){
  

    if(answers[i].checked){
        checkedAns=true;

        if(answers[i].value===htmlQuiz[questionCount].ans){
          score++;
        }
    }
   }


   if (!checkedAns) {
    swal("Select Anyone");

  } else {
    if (questionCount < htmlQuiz.length-1) {
        questionCount++
        deSelect()
        renderQuestions()
      } else {
        showResult()
    }
  }

}

function deSelect() {
  for (var i = 0; i < answers.length; i++) {
    answers[i].checked =false
    
}
}

function showResult(){
 
  quizWindow.style.display = 'none'
  resultWindow.style.display = 'block'
  announce.style.display= 'none'
    totalQueCount.innerHTML = htmlQuiz.length
  correctQueCount.innerHTML = score

  var percentage = Math.floor((score / htmlQuiz.length) * 100)

  if (percentage < 70) {
      announce.innerHTML = swal("You have Failed");
  } else {
      announce.innerHTML = swal("Congratulation You Passed")

  }
  
};

AOS.init();






