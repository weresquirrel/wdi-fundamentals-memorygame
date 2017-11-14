var cards = [
	{
		rank: "queen",
		suit: "hearts",		
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",		
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",		
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",		
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];
var playerScore = 0;

var reset = function() {	
	for (var i = 0 ; i < cards.length ; i++) {
		document.getElementsByTagName("img")[i].setAttribute("src", "images/back.png");
	};
	cardsInPlay = [];	
};

var checkForMatch = function() {	
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		playerScore += 1		
		document.querySelector("h3").innerHTML = "Your score: <span>" + playerScore + "</span>";
	} else {
		alert("Sorry, try again.");
	}
};

var flipCard = function() {
	if (cardsInPlay.length < 2) {
		var cardId = this.getAttribute("data-id");	
		cardsInPlay.push(cards[cardId].rank);
		this.setAttribute("src", cards[cardId].cardImage);
		if (cardsInPlay.length === 2) {
			checkForMatch();
			setTimeout(function(){
  				reset();
			}, 2000);		
		}	
	}
};

var createBoard = function(){
	for (var i = 0 ; i < cards.length ; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	};
};


createBoard();
/*document.querySelector("button").addEventListener("click", reset);*/






