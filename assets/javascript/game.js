$(document).ready(function () {
    var targetNumber = Math.floor(Math.random() * 102) + 19;
    var numberOptions = [];
    var counter = 0;
    var wins = 0;
    var loss = 0;
    $("#wins").text(wins);
    $("#loss").text(loss);
    $("#score").text(counter);
    $("#number-to-guess").text(targetNumber);
    reset();

    function reset() {
        targetNumber = Math.floor(Math.random() * 102) + 19;
        numberOptions = [];
        counter = 0;
        $("#number-to-guess").text(targetNumber);
        $("#score").text(counter)
        crystalNumbers();
        console.log("targetNumber: " + targetNumber);
        console.log("numberOptions: " + numberOptions);
    }

    function crystalNumbers() {
        for (var i = 0; i < 4; i++) {
            randomAnswer = Math.floor(Math.random() * 12 + 1);
            numberOptions.push(randomAnswer);
        }
    }    
    
    for (var i = 0; i < numberOptions.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");        
        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        $("#crystals").append(imageCrystal);
    }

    $(".crystal-image").on("click", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        console.log(crystalValue);
        counter += crystalValue;
        $("#score").text(counter);
        if (counter == targetNumber) {
            wins++;
            $("#wins").text(wins);
            reset();
        } else if (counter >= targetNumber) {
            loss++;
            $("#loss").text(loss);
            reset();
        }

    });

});