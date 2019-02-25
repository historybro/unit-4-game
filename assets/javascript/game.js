$(document).ready(function () {
    //initalize variables etc
    var targetNumber = 0;
    var scoreOptions = [];
    var counter = 0;
    var wins = 0;
    var loss = 0;
//pushes variables to html
    $("#wins").text(wins);
    $("#loss").text(loss);
    $("#score").text(counter);
    $("#number-to-guess").text(targetNumber);
    reset();

//function called to reset game
    function reset() {
        targetNumber = Math.floor(Math.random() * 102) + 19;
        scoreOptions = [];
        counter = 0;
        $("#number-to-guess").text(targetNumber);
        $("#score").text(counter)
        crystalScore();
        console.log("targetNumber: " + targetNumber);
        console.log("scoreOptions: " + scoreOptions);
    }

//function called on win, adds to total # of wins, resets game
    function wincon() {
        wins++;
        $("#wins").text(wins);
        reset();
    }

//function called on loss, adds to total # of losses, resets game
    function losecon() {
        loss++;
        $("#loss").text(loss);
        reset();
    }

    function crystalScore() {
        //old code for creating random scores
        // for (var i = 0; i < 4; i++) {
        //     randomAnswer = Math.floor(Math.random() * 12 + 1);
        //     if ()
        //     scoreOptions.push(randomAnswer);
        //     console.log(randomAnswer + " :Random Answer");
        //     console.log(scoreOptions + " :Number Options");

        // }
        //new code creates random non repeating numbers
        let scoreOptions = [];

        let scoreGenerator = function (arr) {
            if (arr.length >= 4) return;
            let crystalScore = Math.floor(Math.random() * 12 + 1);
            if (arr.indexOf(crystalScore) < 0) {
                arr.push(crystalScore);
            }
            scoreGenerator(arr);
        };

        scoreGenerator(scoreOptions);
        console.log("NumberOptions: " + scoreOptions);
        $("#crystal1").attr("data-crystalvalue", scoreOptions[0]);
        $("#crystal2").attr("data-crystalvalue", scoreOptions[1]);
        $("#crystal3").attr("data-crystalvalue", scoreOptions[2]);
        $("#crystal4").attr("data-crystalvalue", scoreOptions[3]);
    }

    $(".crystal-image").on("click", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        console.log(crystalValue);
        counter += crystalValue;
        $("#score").text(counter);
        if (counter == targetNumber) {
            wincon();
        } else if (counter >= targetNumber) {
            losecon();
        }

    });

});