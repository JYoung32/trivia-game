//create a variable to store questions and to store possible choices for each question
//manipulate the page to show chosen question with possible choices
//if user clicks right answer, store count and move on to next question
//if user clicks wrong answer, store count and move on to next question
//if user does not choose an answer within timer, count as incorrect, and move on to next question
//at the end of the game, display scoreboard of correct answer and wrong answers.
//reset button to restart the game without refreshing.
//--------------------------------------
//variable for trivia
const trivia = [
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
        question: "Which superhero girl uses bullet proof braclets and has a magic lasso?",
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
let [counter, currentQuestion, correct, incorrect, unanswered] = [20, 0, 0, 0, 0];
let timer;

//make the counter stop at 0 and fire next question
timeStop = () => {
    clearInterval(timer);
    unanswered++;
    rightWrongAnswer();
    setTimeout(nextQuestion, 3 * 1000);
};

//make a countdown timer
countDown = () => {
    counter--;
    $(".timer").html(`<div class='card m-3 p-3'><h5>${counter} Seconds remaining</h5></div>`);
    if(counter === 0){
        timeStop();
    };
};

//make a function to load question to the page
showQuestion = () => {
    counter = 20;
    timer = setInterval(countDown, 1000);
    let [question, choices] = [trivia[currentQuestion].question, trivia[currentQuestion].choices];

    //insert html content
    $(".question").html(`<div class='card'>
        <div class='card-header'>
            <h3>${question}</h3>
        </div>
    </div>
    <hr class='my-5'></hr>
    <div class='card m-3'>
        <div class='card-body'>
            <div class='row d-flex justify-content-around m-3'>
                ${showChoices(choices)}
            </div>
        </div>
    </div>`);  
    $(".timer").html(`<div class='card m-3 p-3'><h5>${counter} Seconds remaining</h5></div>`);  
};

//make a function to load choices
showChoices = (choices) => {
    let result = "";
    for ( var i = 0; i < choices.length; i++ ) {
        result = result + (`<button class='btn btn-primary col-sm m-2 choice' data-answer='${choices[i]}'>${choices[i]}</button>`);
    };
    return result;
};

//function to go to the next question
nextQuestion = () => {
    //check if the game is over
    let endGame = (trivia.length - 1) === currentQuestion;
    endGame ? 
        showResults() : 
            (currentQuestion++, 
            showQuestion());
};

//display picture if right answer, display different pic if wrong answer
rightWrongAnswer = (state) => {
    switch(state) {
        case "right":
            const right = `<div><img class='right' src='./assets/images/giphy (3).gif'></div>`;
            $(".game-area").html(right);
            setTimeout(divReset, 3 * 1000);
            break;
        case "wrong":
            const wrong = `<div><img src='./assets/images/giphy (1).gif'></div>`;
            $(".game-area").html(wrong);
            setTimeout(divReset, 3 * 1000);
            break;
        default:
            const unanswered = `<div><img src='./assets/images/giphy (4).gif'></div>`;
            $(".game-area").html(unanswered);
            setTimeout(divReset, 3 * 1000);
    }; 
};

//display results
showResults = () => {
    let scoreBoard = `<div class='card m-3 p-3 result'>
        <h4>You answered ${correct} questions right!</h4>
        <h4>You answered ${incorrect} questions wrong.</h4>
        <h4>You have ${unanswered} questions unanswered.</h4> 
        </div>
        <button class='btn btn-primary m-5 result'>Restart the Game!</button>`;
    
    $(".game-area").html(scoreBoard);
    $(".game-area").css({"background-image": "url('./assets/images/giphy (2).gif')",
    "background-size" : "cover"})
};

//function to reset div after right/wrong image shows
divReset = () => {
    let div = `<div class='question'></div>
        <div class='timer'></div>`;

    $(".game-area").html(div);
};

//start button click function
$(".start").click(function(){
    $(".start").remove();
    showQuestion();
    $(".game-area").css({"background-image": "url('./assets/images/giphy.gif')",
    "background-size" : "cover"});
});

//allow a click event on a dynamically added button
$(document).on("click", ".choice", function(){
    clearInterval(timer);

    let [clicked, correctAnswer] = [$(this).attr("data-answer"), trivia[currentQuestion].answer];

    (correctAnswer === clicked) ?
        //user wins
        (correct++,
        rightWrongAnswer("right"),
        setTimeout(nextQuestion, 3 * 1000)) : 
            //user lost
            (incorrect++,
            rightWrongAnswer("wrong"),
            setTimeout(nextQuestion, 3 * 1000));
});


//make click event for reset button
$(document).on("click", ".result", function(){
    [counter, currentQuestion, correct, incorrect, unanswered, timer] = [20, 0, 0, 0, 0, null];

    $(".game-area").html(divReset());
    $(".game-area").css({"background-image": "url('./assets/images/giphy.gif')",
    "background-size" : "cover"});

    showQuestion();
});
