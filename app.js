/*
GAME RULES:
The game has 2 players, playing in rounds
-- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 50 points on GLOBAL score wins the game*/

var  scores, roundscore, activePlayer;

//**score for each player */
/*var score1 =0;
var score2=0;
var roundscore=0;
/**BECAUSE I ONLY NEED ONE VARIABLE ILD USE AN ARRAY */

//function init() {
    scores=[0,0];
    roundscore=0;
    activePlayer=0;
//}


//so that dice doesnt show at the begining//
document.querySelector('.dice').style.display = 'none';

//display 0 for all values//
document.getElementById('score-0').textContent= '0';
document.getElementById('score-1').textContent= '0';
document.getElementById('current-0').textContent= '0';
document.getElementById('current-1').textContent= '0';

document.querySelector('.btn-roll').addEventListener('click', function(){
    //what happens when someone clicks'/
    //  1. Random Number 
    var dice = Math.floor(Math.random()*6) + 1;

    //2.Display the result and display the dice again and aslo make the dice display the exact number that was thrown
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src = 'img/dice-' + dice + '.png';

    //3.Update the round score if the total number was NOT 1
    if (dice !== 1) { 
        //Add score from dice to roundscore then display on UI
        roundscore +=dice;
        document.querySelector('#current-'+ activePlayer).textContent = roundscore;
    } else {
        //nextplayer = change the active player from 0 above to 1;we make use of the tenary operator
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    //Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundscore;
    //Update the UI
    document.querySelector ('#score-' + activePlayer).textContent = scores[activePlayer];

    //check if player won the game
    if (scores [activePlayer]>=100){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer + '-panel').classList.remove('active');
    } else {
        //Nextplayer
        nextPlayer();
    }
});

//nextplayer
function nextPlayer(){
    activePlayer=== 0 ?  activePlayer=1 : activePlayer= 0; roundscore =0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active'); 
    //we want to use a better method which is toggle 
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}


//new game and all
document.querySelector('.btn-new').addEventListener('click',  init);

function init() {
    scores=[0, 0];
    activePlayer= 0;
    roundscore= 0;

    document.querySelector('.dice').style.display ='none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
}


