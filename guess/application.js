$(document).ready(function(){
	var random_num = Math.floor((Math.random()*100) + 1);
	$('#submit').click(function(){
		console.log("trying to print the value in the input...");
		var name = $("input[name=ok]").val();
		console.log(name);
		$('#response').html(name);
	});	
});
