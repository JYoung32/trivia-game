//create a variable to store questions and to store possible choices for each question
//manipulate the page to show chosen question with possible choices
//if user clicks right answer, store count and move on to next question
//if user clicks wrong answer, store count, display correct answer, and move on to next question
//if user does not choose an answer within timer, count as unanswered, display answer, and move on to next question
//at the end of the game, display scoreboard of correct answer and wrong answers.
//--------------------------------------
//variable for trivia
var trivia = [
    {
        question: "What superhero is Tony Stark?",
        choices: ["Batman", "Spider-Man", "Iron Man", "Deadpool"],
        answer: "Iron Man"
    },
    {
        question: "What is Batman's alias?",
        choices: ["Tony Stark", "Bruce Wayne", "Clark Kent", "Steven Strange"],
        answer: "Bruce Wayne"
    },
    {
        question: "Which superhero is not part of the Fantastic 4?",
        choices: ["The Hulk", "Mr. Fantastic", "Human Torch", "Susan Storm"],
        answer: "The Hulk"
    },
    {
        question: "Which newspaper does Peter Parker work for?",
        choices: ["New Daily Globe", "The Daily Planet", "The Daily News", "The Daily Bugle"],
        answer: "The Daily Bugle"
    },
    {
        question: "Wolverine's claws are made of",
        choices: ["Titanium", "Adamantium", "Vibranium", "Aluminum"],
        answer: "Adamantium"
    },
    {
        question: "What item is not part of Batman's aresenal?",
        choices: ["Batmobile", "Grappling Hook", "Power Ring", "Utility Belt"],
        answer: "Power Ring"
    },
    {
        question: "What Superhero team includes a sentient tree creature?",
        choices: ["Teen Titans", "Guardians Of The Galaxy", "Suicide Squad", "The Justice League"],
        answer: "Guardians Of The Galaxy"
    },
    {
        question: "Question8",
        choices: ["a", "b", "c", "d"],
        answer: "Answer8"
    },
    {
        question: "Question9",
        choices: ["a", "b", "c", "d"],
        answer: "Answer9"
    },
    {
        question: "Question10",
        choices: ["a", "b", "c", "d"],
        answer: "Answer10"
    }
];
//default game values
var counter = 20;
var currentQuestion = 0;
var correct = 0;
var incorrect = 0;
var timer;

//make the counter stop at 0 and fire next question
function timeStop(){
    clearInterval(timer);
    incorrect++;
    nextQuestion();
};
//make a countdown timer
function countDown(){
    counter--;
    $(".timer").html("<div class='card m-3 p-3'><h5>" + counter + " Seconds remaining</h5></div>");
    if(counter === 0){
        timeStop();
    }
};

//make a function to load question to the page
function showQuestion(){
    counter = 20;
    timer = setInterval(countDown, 1000);
    var question = trivia[currentQuestion].question;
    var choices = trivia[currentQuestion].choices;

    $(".question").html("<div class='card'>" +
        "<div class='card-header'><h3>" + question + 
        "</h3></div></div>");

    $(".timer").html("<div class='card m-3 p-3'><h5>" + counter + " Seconds remaining</h5></div>");

    $(".choices").html("<div class='card m-3'>" +
        "<div class='card-body'>" +
        "<div class='row d-flex justify-content-around m-3'>" + showChoices(choices) + 
        "</div></div></div>");

    $(".spacer").html("<hr class='my-5'></hr>");
};
//make a function to load choices
function showChoices(choices){
    var result = "";
    for(var i = 0; i < choices.length; i++){
        result = result + ("<p class='btn btn-primary col-sm m-2 choice' data-answer='"+ choices[i] +
        "'>" + choices[i] + "</p>");
    }
    return result;
};
//function to go to the next question
function nextQuestion(){
    var endGame = (trivia.length - 1) === currentQuestion;
    if (endGame){
        showResults();
    } else {
    currentQuestion++;
    showQuestion();
    }
};
//allow a click event on a dynamically added button
$(document).on("click", ".choice", function(){
    clearInterval(timer);
    var clicked = $(this).attr("data-answer");
    var correctAnswer = trivia[currentQuestion].answer;
    if(correctAnswer === clicked){
        //user wins
        correct++;
        nextQuestion();
    } else {
        //user lost
        incorrect++;
        nextQuestion();
    }
    console.log("clicked", clicked);
});

//display results
function showResults(){
    var result = 
        "<div class='card m-3 p-3'>" +
        "<h4>You answered " + correct + " questions right!</h4>" +
        "<h4>You answered " + incorrect + " questions wrong.</h4>" +
        "</div>" +
        "<button class='btn btn-primary m-5 reset'>Resart the Game!</button>";
    
    $(".game-area").html(result);
};

//make click event for reset button
$(document).on("click", ".reset", function(){
    counter = 20;
    currentQuestion = 0;
    correct = 0;
    incorrect = 0;
    timer = null;
    showQuestion();
});


$(".start").click(function(){
    $(".start").remove();
    showQuestion();
});