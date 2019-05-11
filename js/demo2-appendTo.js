$(document).ready(function(){
	$("#btn1").click(function(){
		$("#sel1 option").appendTo($("#sel2"));
	});
	$("#btn2").click(function(){
		$("#sel2 option").appendTo($("#sel1"));
	});
	$("#btn3").click(function(){
		$("#sel1 option:selected").appendTo($("#sel2"));
	});
	$("#btn4").click(function(){
		$("#sel2 option:selected").appendTo($("#sel1"));
	});
});