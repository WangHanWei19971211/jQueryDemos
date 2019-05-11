$(window).ready(function(){
	//深浅复制比较
	//浅复制
	$("#bth-qian").click(function(){
		var newli = $(".box-3 li:first").clone(false);
		$(".box-3 ul").append(newli);
	});
	//深复制
	$("#bth-shen").click(function(){
		var newli = $(".box-3 li:first").clone(true);
		$(".box-3 ul").append(newli);
	});
	//点击li的事件
	$(".box-3 ul li").click(function(){
		alert("点击了li");
	});
});