//display container with submit button
//on click of submit button, hide button and display timer and questions
//countdown 30 seconds
//if clock reaches 0

// var startGame = $("#start").on('click', function() {
//  });

//Timer
var count = 30;
var interval;
clockRunning = false;


function startClock(){
    interval = setInterval(countDown, 1000)   
}

function countDown(){
    count--;
    
    $("#totalTime").text(count)
    if(count === 0){
        stop()
    }
    
}
    
function stop() {
    clearInterval(interval);
    clockRunning = false;
}

$(document).ready(function() {
    $("#timer").hide();

    $("#btn-start").click(function ()
        {
            $("#timer").show();
            $(this).hide();
            startClock();
        }
    );

});
var submitButton = $("#submit").on("click", function(){
    document.getElementById("afterSubmit").style.visibility="visible"
alert("You Won!")
}); 
            





