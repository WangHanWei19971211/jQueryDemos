$(document).ready(function(){
	$(".comment li").on("mouseenter",function(){//鼠标移入时
		$(this).text("■").prevAll().text("■");
	}).on("mouseleave",function(){//鼠标移出时class="li"的元素及其之前的元素为实心，之后的为空心
		$(this).text("□").prevAll().text("□");
		$(".li").text("■").prevAll().text("■");
	}).on("click",function(){//鼠标点击时
		$(this).attr("class","li");//给当前点击的元素加上class="li"
		$(this).siblings().removeAttr("class");//去掉其他li的class="li"
		$(".li").text("■").nextAll().text("□");//class="li"的元素之后的元素为空心
	});
});