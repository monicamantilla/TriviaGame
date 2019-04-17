//display container with submit button
//on click of submit button, hide button and display timer and questions
//countdown 30 seconds
//if clock reaches 0


//Timer
var count = 30;
var interval;
clockRunning = false;


function startClock() {
    interval = setInterval(countDown, 1000)
}

function countDown() {
    count--;

    $("#totalTime").text(count)
    if (count === 0) {
        stop()
    }

}

function stop() {
    clearInterval(interval);
    clockRunning = false;
}

$(document).ready(function () { //jquery has to go in here
    $("#timer").hide();

    $("#btn-start").click(function () {
        $("#timer").show();
        $(this).hide();
        startClock();
        $("#triviaGame").show();
    });

    //function to check the answers      

    $("#submit").click(function() {
        var question1 = $("input[name='question1']:checked").val();
        var question2 = $("input[name='question2']:checked").val();
        var question3 = $("input[name='question3']:checked").val();
        var correct = 0;
        var wrong = 0;

        console.log(question1);

        if (question1 == "Canada") {
            correct++;
        } else {
            wrong++;
        }
        if (question2 == "Peru") {
            correct++;
        } else {
            wrong++;
        }
        if (question3 == "Damascus") {
            correct++;
        } else {
            wrong++;
        }

        $('#afterSubmit').show();
        $('#correctAnswers').text("You got " + correct + " correct answers!");
        $("#wrongAnswers").text("You got " + wrong + " wrong answers!");
        $("#trivia").hide();
        $("#timer").hide();
    })
});

//once timer hits 0, display alert (time's up)


