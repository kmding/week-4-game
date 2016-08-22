//<CompsNumber>//	
var computersNumber = Math.floor(Math.random()*120 + 19);
//your numbers//
var randoNumboOne = Math.floor(Math.random()*12 + 1);
var randoNumboTwo = Math.floor(Math.random()*12 + 1);
var randoNumboThree = Math.floor(Math.random()*12 + 1);
var randoNumboFour = Math.floor(Math.random()*12 + 1);
//your results//
var whatYouHaveNow = 0;
var youWin = 0;
var youLose = 0;

//New Game//
function newGame(){
	computersNumber = Math.floor(Math.random()*120 + 19);
	$('.computersNumber').html(computersNumber);
	randoNumboOne = Math.floor(Math.random()*12 + 1);
	randoNumboTwo = Math.floor(Math.random()*12 + 1);
	randoNumboThree = Math.floor(Math.random()*12 + 1);
	randoNumboFour = Math.floor(Math.random()*12 + 1);
	
}

//<Display CompsNumber>//
console.log("this is the computer: " + computersNumber);
$('.computersNumber').html(computersNumber);

//<buttons do stuff>//
$(".uno").on("click", function(){
	console.log("this is the random number: " + randoNumboOne);
	whatYouHaveNow = whatYouHaveNow + randoNumboOne;
	console.log(whatYouHaveNow);
	$('.yoCollection').html(whatYouHaveNow);
	winOrLose();
});

$(".Dos").on("click", function(){
	console.log("this is the random number 2: " + randoNumboTwo);
	whatYouHaveNow = whatYouHaveNow + randoNumboTwo;
	console.log(whatYouHaveNow);
	$('.yoCollection').html(whatYouHaveNow);
	winOrLose();
});

$(".Tres").on("click", function(){
	console.log("this is the random number 3: " + randoNumboThree);
	whatYouHaveNow = whatYouHaveNow + randoNumboThree;
	console.log(whatYouHaveNow);
	$('.yoCollection').html(whatYouHaveNow);
	winOrLose();
});

$(".Cuatro").on("click", function(){
	console.log("this is the random number 4: " + randoNumboFour);
	whatYouHaveNow = whatYouHaveNow + randoNumboFour;
	console.log(whatYouHaveNow);
	$('.yoCollection').html(whatYouHaveNow);
	winOrLose();
});

//funcion to make the game work//
function winOrLose(){

	if (whatYouHaveNow == computersNumber){
		alert('You Win'); 
		youWin++;
		whatYouHaveNow =0;
		console.log(youWin);
		newGame();
		$('.winner').html(youWin);
	}

	if (whatYouHaveNow > computersNumber){
		alert('You Lose');
		 youLose++;
		 whatYouHaveNow= 0;
		 console.log(youLose);
		 newGame();
		$('.loser').html(youLose);
	}
};