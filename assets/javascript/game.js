//create a variable to store questions and to store possible choices for each question
//manipulate the page to show chosen question with possible choices
//if user clicks right answer, store count and move on to next question
//if user clicks wrong answer, store count and move on to next question
//if user does not choose an answer within timer, count as incorrect, and move on to next question
//at the end of the game, display scoreboard of correct answer and wrong answers.
//reset button to restart the game without refreshing.

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
        question: "Which superhero girl uses bullet proof bracelts and has a magic lasso?",
        choices: ["Catwoman", "Super Girl", "Starfire", "Wonder Woman"],
        answer: "Wonder Woman"
    },
    {
        question: "Spider-Man's Uncle Ben, said \"With great power, comes great ...\"",
        choices: ["responsibility", "times", "control", "authority"],
        answer: "responsibility"
    },
    {
        question: "Iron Man was a founding member for which superhero team?",
        choices: ["The Justice League", "Suicide Squad", "The Avengers", "S.H.E.I.L.D."],
        answer: "The Avengers"
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

    //rightWrongAnswer("wrong");
    //setTimeout(nextQuestion, 3 * 1000);
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

    //insert html content
    $(".question").html("<div class='card'>" +
        "<div class='card-header'><h3>" + question + 
        "</h3></div></div>");
    
    $(".spacer").html("<hr class='my-5'></hr>");
    
    $(".choices").html("<div class='card m-3'>" +
        "<div class='card-body'>" +
        "<div class='row d-flex justify-content-around m-3'>" + showChoices(choices) + 
        "</div></div></div>");
    
    $(".timer").html("<div class='card m-3 p-3'><h5>" + counter + " Seconds remaining</h5></div>");  
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
    };
};

//allow a click event on a dynamically added button
$(document).on("click", ".choice", function(){

    clearInterval(timer);

    var clicked = $(this).attr("data-answer");
    var correctAnswer = trivia[currentQuestion].answer;

    if(correctAnswer === clicked){
        //user wins
        correct++;

        //rightWrongAnswer("right");
        //setTimeout(clearDiv, 3 * 1000);
        nextQuestion();

    } else {
        //user lost
        incorrect++;

        //rightWrongAnswer("wrong");
        //setTimeout(nextQuestion,3 * 1000);
        nextQuestion();

    };

    console.log("clicked", clicked);

});

//display picture if right answer, display different pic if wrong answer

/*function rightWrongAnswer(state){

    if(state === "right"){

        var right =
        "<div><img class='right' src='./assets/images/giphy (3).gif'>";

        $(".game-area").html(right);

    } else {

        var wrong = 
        "<div><img src='./assets/images/giphy (1).gif'>";

        $(".game-area").html(wrong);

    }
}*/

//display results
function showResults(){

    var result = 
        //"<div class='card m-3 p-3 result'>" +
        "<h4>You answered " + correct + " questions right!</h4>" +
        "<h4>You answered " + incorrect + " questions wrong.</h4>" +
        //"</div>" +
        "<button class='btn btn-primary m-5 result' id='reset'>Restart the Game!</button>";
    
    $(".game-area").html(result);

    /*$(".game-area").css({"background-image": "url('./assets/images/giphy (2).gif')",
    "background-size" : "cover"});*/

};

//make click event for reset button
$(document).on("click", "#reset", function(){
    counter = 20;
    currentQuestion = 0;
    correct = 0;
    incorrect = 0;
    timer = null;

    /*$(".gamearea").remove();
    $(".gamearea").html("<div class='question'></div><div class='spacer'></div><div class='choices'></div><div class='timer'></div>");*/

    showQuestion();
    console.log("reset click");
});


$(".start").click(function(){

    $(".start").remove();
    showQuestion();

    /*$(".game-area").css({"background-image": "url('./assets/images/giphy.gif')",
    "background-size" : "cover"});*/
});

/*function clearDiv(){
    $(".question").empty();
    $(".choices").empty();
    $(".timer").empty();
    nextQuestion();
}*/