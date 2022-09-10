const startBtn = document.getElementById('start-btn');
const homeBtn = document.getElementById('home-btn');
const nextBtn = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const responseElement = document.getElementById('response');
const questionElement = document.getElementById('question');
const controlsElement = document.getElementById('controls');
const answerButtonsElement = document.getElementById('answer-btn');
let myQuestions, currentQuestionIndex;
let answeredYesCounter = 0;

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startQuiz() { // start quiz after clicking start btn
    startBtn.classList.add('hide'); // hide start btn as quiz starts only once
    myQuestions = questions;
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide'); // hide question and ans btn
    controlsElement.classList.add('hide'); // hide 
    setNextQuestion();
}

function setNextQuestion() {
    resetState(); // clear & hide some elements
    showQuestion(myQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainerElement.classList.remove('hide');
    responseElement.classList.add('hide');
    controlsElement.classList.add('hide');
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.classList.add('ans-btn');
        if (answer.Yes) {
            button.dataset.Yes = answer.Yes;
            button.dataset.resp = answer.resp;
        } else {
            button.dataset.No = answer.No;
            button.dataset.resp = answer.resp;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    answerButtonsElement.classList.remove('hide'); // show both Yes&No btns
    responseElement.innerText = ''; // clear response if any displayed
    nextBtn.classList.add('hide'); // hide next btn
    while (answerButtonsElement.firstChild) { // delete previously generated btns
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    // const selectedBtn = e.target;
    // const Yes = selectedBtn.dataset.Yes;
    // console.log(e.target.dataset);
    responseElement.classList.remove('hide');
    responseElement.innerText = e.target.dataset.resp; // write response to resp div
    controlsElement.classList.remove('hide');
    questionContainerElement.classList.add('hide');
    answerButtonsElement.classList.add('hide'); // hide ans btns
    if (e.target.dataset.Yes) {
        answeredYesCounter++;
    }
    if (myQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hide');
    } else {
        startBtn.innerText = 'Finish';
        startBtn.classList.remove('hide');
        showResults();
    }
}

function showResults() {
    questionContainerElement.classList.add('hide');
    startBtn.classList.add('hide');
    homeBtn.classList.remove('hide');
    // responseElement.innerText = 'You answered yes to ' + answeredYesCounter + ' questions.';
    // console.log(answeredYesCounter);
    switch (answeredYesCounter) {
        case 0:
            responseElement.innerText = `All right! You seem not to be interested to work in IT at the moment.
            This just might not be the right time for you.
            But you can still try 5 day coding at Code Institute
            or just check their website to see other options. Best of luck!`;
            break;
        case 1:
            responseElement.innerText = `Cool! You answered Yes to one question. You just might need some extra
            time to consider this again. And you can still try 5 day coding at Code Institute
            or just check their website to see other options. Best of luck!`;
            break;
        case 2:
            responseElement.innerText = `Nice! You answered Yes to two questions. We suggest to do some research and
            find out what role would suit you. And you can still try 5 day coding at Code Institute
            or just check their website to see other options. Best of luck!`;
            break;
        case 3:
            responseElement.innerText = `Great! You answered Yes to three questions. You probably know somewhere at the
            back of your mind what roles would you fit in. We strongly recomend to start the journey
            in near future. And you can still try 5 day coding at Code Institute or just check their
            website to see other options. Best of luck!`;
            break;
        case 4:
            responseElement.innerText = `Excellent! You answered Yes to four questions. You are more likely to end up in IT role.
            Find out more about IT companies and roles to have good idea what it takes to be sucessfull. 
            Why not to try 5 day coding at Code Institute or just check their website to see other options.
            Best of luck!`;
            break;
        default:
            responseElement.innerText = `Astonishing! You answered Yes to all five questions. You are almost there!
            Don't worry if you dont have any IT experience. You can join Code Institute
            bootcamp to start today. Try 5 day coding at Code Institute or just check their
            website to see other options. Best of luck!`;
    }
}

const questions = [{
        question: 'Are you good at Math?',
        answers: [{
                text: 'Yes',
                Yes: true,
                resp: "Thats good! Even not every role necessarily needs a math this is still a great advantage."
            },
            {
                text: 'No',
                No: true,
                resp: "No worries. Did you know that there are plenty of IT roles you don't need Math?"
            }
        ]
    },
    {
        question: 'Is work-life balance important to you?',
        answers: [{
                text: 'Yes',
                Yes: true,
                resp: "Great! Most of IT jobs offer flexible working hours and hybrid working."
            },
            {
                text: 'No',
                No: true,
                resp: "A healthy work-life balance will mean different things to us all. A healthy balance might look like: meeting your deadlines at work while still having time for friends and hobbies. Having enough time to sleep properly and eat well. Not worrying about work when you're at home."
            }
        ]
    },
    {
        question: 'Do you want better than average salary?',
        answers: [{
                text: 'Yes',
                Yes: true,
                resp: "Excellent, even the entry positions offering better than average financial compensation."
            },
            {
                text: 'No',
                No: true,
                resp: "That's OK. Most tech companies value their employees and try to create job satisfaction as a priority for everyone. They lead the way when it comes to wellness initiatives such as free meals, wellness therapies, paid time off of work to volunteer, company holidays, casual dress codes, and more."
            }
        ]
    },
    {
        question: 'Are you looking for career growth?',
        answers: [{
                text: 'Yes',
                Yes: true,
                resp: "Perfect! IT sector is still a leader in the fastest growing industries. The opportunities are endless!"
            },
            {
                text: 'No',
                No: true,
                resp: "Choosing a career path is no easy task, especially because it can determine your future and the other important aspects of your life. Consider these points when making that crucial decision. Hopefully, you can say YES to a career in IT and make it one of your best life decisions yet."
            }
        ]
    },
    {
        question: 'Do you want to work for the future?',
        answers: [{
                text: 'Yes',
                Yes: true,
                resp: "Fantastic!  Technology inspires and drives the way the world functions and lives. You’ll never get bored in the tech sector either as new markets and opportunities are constantly arising."
            },
            {
                text: 'No',
                No: true,
                resp: "Technology isn’t just about coming up with new ideas. If you work in technology, you don’t have to resign yourself to a lacklustre role that serves no purpose. Technology inspires and drives the way the world functions and lives. You’ll never get bored in the tech sector either as new markets and opportunities are constantly arising."
            }
        ]
    }

]