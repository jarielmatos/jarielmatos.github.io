$(document).ready(function(){
	var random_num = Math.floor((Math.random()*100) + 1);
    $("#submit").click(function(){
	    console.log("testing");
      var name= $("input[name=ok]").val();
        $("#response").html(name);
}

));
