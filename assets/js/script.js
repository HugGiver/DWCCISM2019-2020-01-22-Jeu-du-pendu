var answerArray = [];
var guessCount = 10;
var guessBank = [];
var words = ['test', 'angle', 'armoire', 'banc' , 'bureau' , 'cabinet' , 'carreau' , 'chaise' , 'classe' , 'calque' , 'javascript' , 'poisson' , 'lego' , 'angular' , 'perle' , 'leadbees' , 'masculin' , 'marinade' , 'bicyclette' , 'gaming' , 'casque' , 'reportage' , 'phrase' , 'australie' , 'triangle' , 'excuse' , 'travail' , 'hacking' , 'renvoyer' , 'embaucher' , 'formation' , 'requin' , 'scooter'];
var randomIndex = Math.floor((Math.random() * (words.length - 1)) + 1);
var answer = words[randomIndex];
var guess = $('#guess').val().toLowerCase();

function setUp() {
    guessCount = 10;
    guess = $('#guess').val('');
    guessBank = [];
    randomIndex = Math.floor((Math.random() * (words.length - 1)) + 1);
    answer = words[randomIndex];
    answerArray = answer.split('');


    console.log('answer', answer)
    console.log('answerArray', answerArray)

    // Reset de la bankLetter écrite
    $('#bankLetter').html('Lettre utilisées : ')

    // Génération de tirets pour chaque lettre du mots
    $("#letters").html("");
    for (var i = 0; i < answer.length; i++) {
        $("#letters").append('<li class="letter letter' + answerArray[i] + '">_</li>');
    }

    //Nombre de vies
    $("#lives").html(guessCount);

}

function guessLetter() {
    guess = $('#guess').val().toLowerCase();
    if (guess != '') { // Si guess n'est pas vide
        if (guessBank.includes(guess) == false) { // Si guess n'est pas déjà dans guessBank
        guess = $('#guess').val().toLowerCase(); // Récupération du guess et mise en forme en majuscule
            guessBank.push(guess); // Ajout des lettres dans le tableau guessBank
            $('#bankLetter').append(guess + ' - '); // Ajout des lettres dans les lettres utilisées
            checkLives();
            checkIfGameOver();
            checkIfWin();
        }

        else{
            alert('Lettre déjà utilisée.')
        }
    }

    else{
        alert('Veuillez entrer une lettre.')
    }
}

function checkLives() {
    guess = $('#guess').val().toLowerCase();
    if (answerArray.includes(guess)) {
        $('.letter' + guess).html(guess);
        $('#guess').val('');
    }

    else {
        var lives = $("#lives").html();
        var livesNum = eval(lives);
        lives = livesNum - 1;
        $("#lives").html(lives);
        $('#guess').val('');
    }
}

function checkIfWin() {
    if ($('ul').html().includes('_') == false) {
        setTimeout(function(){ alert('You win! Un autre jeu va commencer lorsque vous cliquerez sur "OK".'); }, 500);
        setTimeout(function(){ setUp(); }, 3000);
    }
}

function checkIfGameOver() {
    if ($("#lives").html() == '0') {
        alert('Vous avez perdu. Le jeu va se relancer lorsque vous appuierez sur "OK".');
        setUp();
    }
}

setUp();