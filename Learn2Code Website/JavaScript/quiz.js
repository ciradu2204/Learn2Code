// The difference between const and var. Once const is declared, it can't be updated compared to var which can be updated.
// It's better to use the const for the quiz since we don't want students to change the quiz 
// creating const to store the information from each class 
const questionNumberSpan = document.querySelector(".question-num-value"); // it stores the question number
const answerTrackerContainer = document.querySelector(".answers-tracker");// it tracks the answers
const options = document.querySelector(".options").children; // it stores the options
const question = document.querySelector(".question");// it stores the questions
const feedback = document.querySelector(".feedback"); // it stores the feedback
const totalQuestionSpan = document.querySelector(".total-question"); //it stores the total question that is displayed on questions
const correctAnswerSpan = document.querySelector(".correct-answers"); //it stores the correct answers
const totalQuestionSpan2 = document.querySelector(".total-question2"); //it stores the total question that is displayed on the alert box
const percentage = document.querySelector(".percentage"); // it stores the percentage
const opt1 = document.querySelector(".options1"); // it stores the first option 
const opt2 = document.querySelector(".options2"); // it stores the second option
const opt3 = document.querySelector(".options3"); // it stores the third option 
const opt4 = document.querySelector(".options4"); // it stores the third option

let questionIndex;// initialize a questionIndex var which helps loop through the array object
let index = 0; // initialize an index var which helps to change the question number
let myArray = [];
let myArr = []; //
let score=0; // defines and initiate a var called score that keeps track of the scores

// creating an array of objects which stores a each question with options, answer, and feedback
const questions = [
    {
        q: ' Which of the following is the correct format for the HTML5 doctype?',
        option: ['< DOCTYPE html!>', '< !DOCTYPE html>', "< !html DOCTYPE>", "< html DOCTYPE!>"],
        answer: 1,
        feedback:'<strong>Feedback</strong>: The doctype declaration must be the very frst thing in your HTML document, before the <html> tag. It is not an HTML tag; it is an instructon to the web browser about what version of HTML the page is writen in'

    },

    {
        q: ' Which of the following examples is the correct way to markup a paragraph?',
        option: ["< paragraph>This is a paragraph.< /paragraph>", "< p1>This is a paragraph.< /p1>", "< p>This is a paragraph.< /p>"],
        answer: 2,
        feedback:'<strong>Feedback</strong>:< p>< /p> is the correct format. < paragraph> and < p1> do not exist within HTML'
    },


    {
        q: 'Which of the following examples would you expect to usually render as bold text?',
        option: ["< em>Text< /em>", "< strong>Text< /strong>", "< bold>Text< /bold>", "< s>Text< /s>"],
        answer: 1,
        feedback:'<strong>Feedback</strong>: < strong> is a phrase tag that defines important text. This is usually rendered as bold text in the browser. Not to be confused with the < b> tag, which is used to draw attention to without indicating additional importance. < bold> does not exist within HTML.'
    },

    {
        q: 'How do you add an external css file to an html?',
        option: ['< link rel="stylesheet" type="text/css" href="mystyle.css" >', '< link type="text/css" href="mystyle.css">', '< link href="mystyle.css">'],
        answer: 0,
        feedback:' <strong>Feedback</strong>: it needs to have both rel and type whereby rel shows the relationship between html and the external file. Text which identifies the content where by the default is text/css which means is css'
    },

    {
        q: 'How many < body>< /body>tag can you have in an html file?',
        option: ['unlimited', 'two', 'three', 'one'],
        answer: 3,
        feedback: '<strong>Feedback</strong>: You can only have one body tag in an html file. An html file of many body tag is considered invalid by World Wide Web Consortium (W3C)'
    },
]

totalQuestionSpan.innerHTML = questions.length; //make the totalQuestionSpan equals to the length of the array object

function load() { // function called load which update the html
    questionNumberSpan.innerHTML = index + 1; // replace the question number with 1
    question.innerHTML = questions[questionIndex].q;// use the questionIndex value to display the question of the questions( array object)
    opt1.innerHTML = questions[questionIndex].option[0];// use the questionIndex of the questions value to display the first option of the array options
    opt2.innerHTML = questions[questionIndex].option[1];// use the questionIndex of the questions value to display the second option of the array options
    opt3.innerHTML = questions[questionIndex].option[2];//use the questionIndex of the questions value to display the third option of the array options
    opt4.innerHTML = questions[questionIndex].option[3];//use the questionIndex of the questions value to display the fourth option of the array options
    index++;
}

function check(element) { // this functions checks the option clicked
    if (element.id == questions[questionIndex].answer) { // when the option clicked is the same as the answer in the questions array object
        element.classList.add("correct"); // go on that option div and add a class called correct
        updateAnswerTracker("correct"); // update the answer tracker html and add a class called correct
        score++; // increment the score by one 
        console.log("score:" +score); // write the score in the console
    } else { // when the option clicked is different from the actual answer
        feedback.innerHTML= questions[questionIndex].feedback; // update the feedback html with the feedback in the questions Array object 
        feedback.classList.remove("close"); // remove the class called close which make the feedback display
        element.classList.add("wrong"); // add a class called wrong on the options div
        updateAnswerTracker("wrong"); // add a class called wrong the updateAnswerTracker div
       
    
    }
    disabledOptions(); // call the disable option
}
 
function disabledOptions() {// this function limits a student from changing the option after clicking the option
    for (let i = 0; i < options.length; i++) { //repeat for every option
        options[i].classList.add("disabled"); 
        if (options[i].id == questions[questionIndex].answer) {
            options[i].classList.add("correct")
        }
    }
}
function enableOptions() { // the function enable options for the questions 
    for (let i = 0; i < options.length; i++) { //repeat for all the options
        options[i].classList.remove("disabled", "correct", "wrong"); // this removes all the classlist for students to select their option
    }
    
    
}
function validate() { // this functions helps to validate by checking if a student chose an option at least before going to the next question
    if (!options[0].classList.contains("disabled")) {// if all the options are not disabled that's mean no option has been clicked yet
        alert("Please select one option")// give an alert to the student that they need to select an option before moving the other one
    } else {
        enableOptions(); // call the enableOptions function
        randomQuestions(); // call the randomQuestion function
    }
}

function next() {
    validate(); // call the validate option 
    feedback.classList.add("close"); // this hides the feedback from the previous question
}


function randomQuestions() {// the function helps to create random numbers which helps to know which question to show
    let randomNumber = Math.floor(Math.random() * questions.length); //creates random number bettween 0 and 5
    let hitDuplicate = 0; // this helps to avoid duplicates of random numbers 
    if (index == questions.length) { // when the questionNumber is equal to 5
        quizOver();// call the quizOver function
    }
    else { //otherwise
        if (myArray.length > 0) { // when the arraylength is greater than zero
            for (let i = 0; i < myArray.length; i++) { //repeat for every arrayElement
                if (myArray[i] == randomNumber) { // if one element in the array is equal to the random number created
                    hitDuplicate = 1;//make the hitDuplicate equals to 1;
                    break; // leave the loop 
                }
            }
            if (hitDuplicate == 1) { // when the hitDuplicate is equal to 1 
                randomQuestions();// generate another randomQuestion
            } else {//otherwis
                questionIndex = randomNumber; // make the QuestionIndex equal to randomNumber
                load(); // call the load function
                myArr.push(questionIndex);// push the questionIndex to the second arry created
            }
        }
        if (myArray.length == 0) { //when the myArray length is equal to 0
            questionIndex = randomNumber; // make the QuestionIndex equal to randomNumber
            load();// call the load function
            myArr.push(questionIndex);// push the questionIndex to the second arry created
           
        }
        console.log("myArr:" + myArr); //prints the array in the console
        myArray.push(randomNumber);// push the randomNumber in the array
    }

}

function answerTracker() { //the function helps to create the answerTracker immediately when the window load
    for (let i = 0; i < questions.length; i++) { // repeat for every questions object
        const div = document.createElement("div") // create a div
        answerTrackerContainer.appendChild(div);// add it in the answerTrackcontainer div as a child
    }
}

function updateAnswerTracker(classNam) {// the function helps to update the answer tracker by marking it wrong or correct
    answerTrackerContainer.children[index - 1].classList.add(classNam);//update the answerTrackerContainer div children based on the question with the specfied argument passed in it
}

function quizOver(){// the function helps to inform the student that the quiz is over
document.querySelector(".quiz-over").classList.add("show"); // add a class called show on the div
correctAnswerSpan.innerHTML = score; // update the correctAnswerSpn html with the score 
totalQuestionSpan2.innerHTML= questions.length;// update the totalQuestion2 with the questions length
percentage.innerHTML= (score/questions.length)*100+ "%"; //converts the score in percentage
console.log(percentage);// write the percentage in the console
}

window.onload = function (){// every time you load the window
    this.randomQuestions(); // call the randomQuestions function 
    answerTracker(); // call the answerTracker function
}

function tryAgain(){ // the functions gives a chance students to repeat the quiz
    window.location.reload(); // when you click try again, the window will reload with the quiz again
}
