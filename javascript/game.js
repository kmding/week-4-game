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

	alert('January 20, 2017: Only two hours in his presidency, the country has begun to fall apart. Not wanting to lose anymore revenue, (seeing as only a third of the country manage to survive his inauguration) the president must "make good" on his outragious promise. In order to do so, he has charged "YOU" to mine for diamonds (as the president quoate: "it worked on the world of minecrafts.") Unfortunally, a set amount must be collected, for a larger sum would alert the people of the countries poverty. Save the country, make America better than "great again".')
//New Game//
function newGame(){
	computersNumber = Math.floor(Math.random()*120 + 19);
	$('.computersNumber').html(computersNumber);
	randoNumboOne = Math.floor(Math.random()*12 + 1);
	randoNumboTwo = Math.floor(Math.random()*12 + 1);
	randoNumboThree = Math.floor(Math.random()*12 + 1);
	randoNumboFour = Math.floor(Math.random()*12 + 1);
	$('.yoCollection').html(whatYouHaveNow = 0);
	
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

//win or lose funcion //
function winOrLose(){
	var Victory = document.createElement('audio');
	Victory.setAttribute('src',"Gamesounds/Mo cube.mp3")

	var YoureFired = document.createElement('audio');
	YoureFired.setAttribute('src',"Gamesounds/YoureFired.m4a")

	if (whatYouHaveNow == computersNumber){
		alert('You Win'); 
		youWin++;
		whatYouHaveNow =0;'0';
		console.log(youWin);
		newGame();
		$('.winner').html(youWin);
		Victory.play();
		

	}

	if (whatYouHaveNow > computersNumber){
		alert('You Lose');
		 youLose++;
		 whatYouHaveNow= 0;'0';
		 console.log(youLose);
		 newGame();
		$('.loser').html(youLose);
		YoureFired.play();
	}
};