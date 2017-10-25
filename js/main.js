console.log("Up and running!");

/*var cardOne = "king";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "queen";*/

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = []; 
var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardsInPlay);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else if (cardsInPlay.length === 2) {
	alert("Sorry, try again.");
} else {
	alert("Click one more card, please.");
}





