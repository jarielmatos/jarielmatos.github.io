$(document).ready(function(){
	var random_num = Math.floor((Math.random()*100) + 1);
    $("#submit").click(function(){
      var name= $("input[name=ok]").val();
        $("#response").html(name);
}

));
