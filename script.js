const quizData = [
    {
        question: 'The capital of Russia?',
        a: 'Rostov-on-Don',
        b: 'Moscow',
        c: 'Krasnodar',
        d: 'Saint Petersburg',
        correct: 'b'
    },{
        question: '2 + 2 * 2 = x?',
        a:'6',
        b:'4',
        c: '8',
        d: '10',
        correct: 'a'
    }, {
        question: 'Date of foundation of St. Petersburg',
        a:' 15 Septemer 1710',
        b: '23 June 1705',
        c: '20 May 1703',
        d:'27 May 1703',
        correct: 'd'
    },{
        question: 'The most popular programming language?',
        a: 'Python',
        b: 'C#',
        c: 'JavaScript',
        d: 'C++',
        correcd: 'c'
    },{
        question: 'AMD Foundation Date',
        a:'1 May 1969',
        b:'1 May 1970',
        c:'1 May 1968',
        d:'1 May 1971',
        correct:'a'
    }
]

const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const a__text = document.getElementById('a__text');
const b__text = document.getElementById('b__text');
const c__text = document.getElementById('c__text');
const d__text = document.getElementById('d__text');
const submitBtn = document.getElementById('submit');
const answerEls = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function getSelected(){
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a__text.innerText = currentQuizData.a;
    b__text.innerText = currentQuizData.b;
    c__text.innerText = currentQuizData.c;
    d__text.innerText = currentQuizData.d;
}



submitBtn.addEventListener('click', () =>{
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length}</h2>
            <button onClick="location.reload()">Reload</button>`;
        }
    }



})
