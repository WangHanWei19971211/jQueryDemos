$(window).ready(function(){
	var timer;
	var x=[0,100,200];
	var y=[0,100,200];
	function autoPlay(){
		timer = setInterval(function(){
			var randomx = parseInt(Math.random()*x.length);
			var randomy = parseInt(Math.random()*y.length);
			$(".div2").css("marginLeft",x[randomx])
			.css("marginTop",y[randomy]);
		},500);		
	}
	$("#btn").click(function(){
		autoPlay();		
	});
	$(".div2").click(function(){
		//alert(parseInt($("#score").text())+1);
		$("#score").text(parseInt($("#score").text())+1);
	});
	$("#btn_end").click(function(){
		clearInterval(timer);
		alert("你的得分："+$("#score").text());
	});
});