$(document).ready(function() {

    //set up Global variables
    var totalQuiz = 5,
        answers = ["The Man of Steel", "Kryptonite", "Bruce Wayne", "Gotham City", "Wonder Woman"],
        data = $("input"),
        correctAnswer = 0,
        incorrectAnswer = 0,
        blank = 0,
        count = 25;

    //for loop and if else statement to see how many user selectionsa and answers match

    function scoreCount() {
        for (var i = 0; i < data.length; i++) {

            // If user selected an answer
            if (data[i].checked) {

                // check if what the user select is equal to the array answers

                if (answers.indexOf(data[i].value) !== -1) {
                    correctAnswer++;
                } else {
                    incorrectAnswer++;
                }
            }
        }
        //check how many questions were blank by subtracting the if/else values from above from the total number of questions.
        
        var totalAnswered = correctAnswer + incorrectAnswer;
        console.log(totalAnswered);
        if (totalAnswered !== totalQuiz) {
            blank = totalQuiz - totalAnswered;
        }

        $('#correct').html(" " + correctAnswer);
        $('#incorrect').html(" " + incorrectAnswer);
        $("#blank").html(" " + blank);

    } //end scoreCount

    //Hide and Show events

    //hide quiz until click play\\
    $("#quiz, #results").hide();

    //questions show and timer begins\\
    $("#play").click(function() {
        $("#start").hide("slow");
        $("#quiz").show("slow");

        //Setup timer to countdown from 60 seconds total to answer all questions\\

        var startTimer = setInterval(function() {
            count--;
            $("#countdown").html(count);

            //if user runs out of time before completing questions, alert fail, show correct answers and calculate results.\\

            if (count === 0) {
                clearInterval(timer);
                $("#quiz, #timer").hide("slow");
                $("#results").show("slow");
                scoreCount();
            }
        }, 1000);

    });

    //done button sends to results page//

    $("#done").click(function() {
        $("#quiz, #timer").hide("slow");
        $("#results").show("slow");
        clearInterval(timer);
        scoreCount();
    });

    //restart button refreshes page back to start screen//

    $("#restart").click(function() {
        location.reload();
    });
});