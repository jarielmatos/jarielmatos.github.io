$(document).ready(function(){
	var random_num = Math.floor((Math.random()*100) + 1);
	$('button').click(function(){
		var guess = $("input[name=ok]").val();
		if(guess == random_num){
			$('div').html("You won!");
		} else if(guess < random_num){
			 $('div').html("Too low - guess higher!");
		}
		else {
			$('div').html("Too high - guess lower!");
		}
	});	
});
