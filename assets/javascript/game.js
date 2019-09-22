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
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 15,
    timerOn: false,
    timerCount: '',
    //questions
    questions: ["What superhero is Tony Stark?", "What is Batman's alias?", "Which superhero is not part of the Fantastic 4?", "Which newspaper does Peter Parker work for?", "Wolverine's claws are made of", "What item is not part of Batman's aresenal?", "What Superhero team includes a sentient tree creature?", "Question8", "Question9", "Question10"],
    //choices
    choices: [
        ["Batman", "Spider-Man", "Iron Man", "Deadpool"],
        ["Tony Stark", "Bruce Wayne", "Clark Kent", "Steven Strange"],
        ["The Hulk", "Mr. Fantastic", "Human Torch", "Susan Storm"],
        ["New Daily Globe", "The Daily Planet", "The Daily News", "The Daily Bugle"],
        ["Titanium", "Adamantium", "Vibranium", "Aluminum"],
        ["Batmobile", "Grappling Hook", "Power Ring", "Utility Belt"],
        ["Teen Titans", "Guardians Of The Galaxy", "Suicide Squad", "The Justice League"],
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
    ],
    //answers
    answers: ["Iron Man", "Bruce Wayne", "The Hulk", "The Daily Bugle", "Adamantium", "Power Ring", "Guardians Of The Galaxy", "Answer8", "Answer9", "Answer10"],
}

$(document).ready(function(){
//make a function to put question into questions class with a 15 second timer
//function ask question with choices

//JS to insert items, will be moved later
$(".question").html(trivia.questions[0]);
$(".btn-1").html(trivia.choices[0][0]);
$(".btn-2").html(trivia.choices[0][1]);
$(".btn-3").html(trivia.choices[0][2]);
$(".btn-4").html(trivia.choices[0][3]);
$(".timer").html(trivia.timer + " Seconds")


//timeout counter

//function to start game
function gamestart(){
    //game start values
    trivia.currentSet = 0;
    trivia.correct = 0;
    trivia.incorrect = 0;
    trivia.unanswered = 0;

    $(".timer").text(trivia.timer + " Seconds")

}
//function to ask question
function askQuestion(){
    //reset timer for question
    trivia.timer = 15;
    $(".timer").text(trivia.timer + " Seconds");
    //prevent speed up
    if(!trivia.timerOn){
        setInterval(timerRun, 1000);
    }

}

function guessChecker(){
    if(trivia.choices === trivia.answers){
        alert("correct")
    } else {
        alert("Wrong")
    }
}

function timerRun(){
    //if(trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length){
        trivia.timer--;
        $(".timer").text(trivia.timer + " Seconds");
    //}
}
timeRun()


})