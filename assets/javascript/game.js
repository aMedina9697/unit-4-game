
var randomResult;
var losses = 0;
var wins = 0;
var previous = 0;

//setters
//getters

  
var resetAndStart = function () {

    $(".crystals").empty();

    var images = [
        'https://myelitedetail.us/images/gems-clipart-ruby/gems-clipart-ruby-9.png',
        'https://openclipart.org/image/2400px/svg_to_png/172603/Diamond-Remix-2-by-Merlin2525.png',
        'https://openclipart.org/image/2400px/svg_to_png/183578/1379546138.png',
        'https://openclipart.org/image/2400px/svg_to_png/173472/karthikeyan-ruby-flatmix.png',
    ]

    randomResult = Math.floor(Math.random() * 69) + 30;

    $("#result").html(randomResult);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        //console.log(random);


        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        crystal.css({
            "background-image":"url('" + (images[i]) + "')",
            "background-size": "cover",
        })
    

        $(".crystals").append(crystal);
    }

    $("#previous").html("Total Score: " + previous);

}

resetAndStart();


//Event Delegation
$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if (previous > randomResult) {

        losses++;

        $("#losses").html(losses);

        previous = 0;

        resetAndStart();

    }
    else if (previous === randomResult) {

        wins++;

        $("#wins").html(wins);

        previous = 0;

        resetAndStart();
    }

});


//Speudo coding
//A game with 4 crystals and a random result
//Every crystal needs to have a random number between 1-12
//A new random number should be generated every single time we win or lose
//to those 4 crystals
//When clicking any crystal, it should be adding with the previous result
//Until it equals the random result
//If it is greater than the random result, we decrease the score as a lose
//If it is equal, then we increment a win counter


