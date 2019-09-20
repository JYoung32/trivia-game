//create a variable to store questions
//create a variable to store possible choices for each question
//manipulate the page to show chosen question with possible choices
//if user clicks right answer, store count and move on to next question
//if user clicks wrong answer, store count, display correct answer, and move on to next question
//if user does not choose an answer within timer, count as unanswered, display answer, and move on to next question
//at the end of the game, display scoreboard of correct answer and wrong answers.


var trivia = {
    //variable for trivia
    correct: 0,
    inccorect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 15,
    timerOn: false,
    timerCount: '',
    //questions
    questions: ["Question1", "Question2", "Question3", "Question4", "Question5", "Question6", "Question7", "Question8", "Question9", "Question10"],
    //choices
    choices: [
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
    ],
    //answers
    answers: ["Answer1", "Answer2", "Answer3", "Answer4", "Answer5", "Answer6", "Answer7", "Answer8", "Answer9", "Answer10"],
}

$(document).ready(function(){
//make a function to put question into questions class with a 15 second timer
//function ask question with choices
$(".question").html(trivia.questions[0]);
$(".btn-1").html(trivia.choices[0][0]);
$(".btn-2").html(trivia.choices[0][1]);
$(".btn-3").html(trivia.choices[0][2]);
$(".btn-4").html(trivia.choices[0][3]);
//timeout counter








})