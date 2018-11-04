var questions = [{
    ques: "Which NASCAR driver is known for this fact 'endured the loss of his father in the Daytona 500?",
    ans: ["Kobe Bryant", "Dale Earnhardt Jr.", "Tony Gwynn", "Jim Palmer"],
    name: "daleJr",
    correct: "Dale Earnhardt Jr.",
    divClass: ".daleJr"
},
{
    ques: "Who won the Inaugural Daytona 500?",
    ans: ["Lee Petty", "Curtis Turner", "Richard Petty", "Fireball Roberts"],
    name: "lPetty",
    correct: "Lee Petty",
    divClass: ".lPetty"
},
{
    ques: "A Boeing 777 is equipped with how many engines?",
    ans: ["4", "2", "3", "5"],
    name: "boeing",
    correct: "2",
    divClass: ".boeing"
},
{
    ques: "What was the nikename for the four engine B-17 bomber planes used during WWII?",
    ans: ["Tiger", "Jolly Roger", "Flying Fortress", "Puking Dog"],
    name: "fFortress",
    correct: "Flying Fortress",
    divClass: ".fFortress"
},
{
    ques: "In what year did aviator Charles A. Lindbergh cross the Atlantic Ocean?",
    ans: ["1927", "1932", "1933", "1940"],
    name: "cLindbergh",
    correct: "1927",
    divClass: ".cLindbergh"
},
{
    ques: "What automobile manufacturer was the first to implement the assembly line for the mass production of an entire automoble?",
    ans: ["Ford", "Chevy", "Dodge", "Toyota"],
    name: "ford",
    correct: "Ford",
    divClass: ".ford"
},
{
    ques: "What is the only bird known to fly backwards?",
    ans: ["vulture", "starling", "hummingbird", "blue jay"],
    name: "hummingbird",
    correct: "hummingbird",
    divClass: ".hummingbird"
},
{
    ques: "The term wake, kettle, or committee refers to a group of what bird?",
    ans: ["vulture", "starling", "hummingbird", "blue jay"],
    name: "vulture",
    correct: "vulture",
    divClass: ".vulture"
},
{
    ques: "What is a flock of crows called?",
    ans: ["pandemonium", "parliment", "cygnet", "murder"],
    name: "murder",
    correct: "murder",
    divClass: ".murder"
},
{
    ques: "What is the proper term for a group of parrots?",
    ans: ["pandemonium", "parliment", "cygnet", "murder"],
    name: "pandemonium",
    correct: "pandemonium",
    divClass: ".pandemonium"
}
] // end questions object

var labels = ["one", "two", "three", "four"];

var startGame = $("#startBtn").on("click", function() {
    $(this).parent().hide();
    $(".container").show();
    countdown(30);
    questionDisplay();
});  //end function startGame

var questionDisplay = function() {
    $(".questions :not('#submitQuiz')").empty();
    // $(".questions").empty();              
    for (var i = 0; i < 10; i++) {
        $(".questions").append("<div class='" + questions[i].name + "'></div>");
        $(questions[i].divClass).append('<div class ="ques-title">' + questions[i].ques + '</div>');        
        for (var j = 0; j <= 3; j++) {
            $(questions[i].divClass).append('<input type="radio" name="' + questions[i].name + '" value="' + 
            questions[i].ans[j] + '"/><label for="' + labels[j] + '">' + questions[i].ans[j] + '</label>');
        }  //end for
        $(".questions").append("<hr />");
    }  //end for      
} //end function questionDisplay

var countdown = function(seconds) {
    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#timeRemain").html(seconds);
        if (seconds <= 0) {
            $(".container").fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;       
            for (var i = 0; i < 10; i++) {
                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
                    correctAnswers++;
                    console.log("this is correct! number:" + i)
                } //end if
                else {
                    wrongAnswers++;
                    console.log("this is wrong! number:" + i)
                };  //end else
            }  //end for
            $("#correctTimesUp").append(correctAnswers);            
            $("#wrongTimesUp").append(wrongAnswers);
            $("#timesUp").fadeIn(1000).show();
        
            clearInterval(timer);
            return;
        }  //end if 
    }, 1000);   //end function timer
    
    $("#submitQuiz").on("click", function() {
    clearInterval(timer);
    })  //end function clear timer
}; // end function seconds

var gradeQuiz = $("#submitQuiz").on("click", function() {
    var correctAnswers = 0;
    var wrongAnswers = 0;
    for (var i = 0; i < 10; i++) {
        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
            correctAnswers++;
        } //end if
        else {
            wrongAnswers++;
        };  //end else
    };  //end for

    countdown();
    $(".container").fadeOut(500);
    $("#answerScreen").show();
    $("#correctScreen").append(correctAnswers);
    $("#wrongScreen").append(wrongAnswers);

}); // end gradeQuiz