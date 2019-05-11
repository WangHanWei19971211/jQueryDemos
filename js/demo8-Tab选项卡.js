$(window).ready(function(){
	//Tab选项卡
	$(".box .ul1 li").mouseenter(function(){
		$(this).css("background-color","white");//移入的li背景变色
		$(this).siblings("li").css("background-color","wheat");//其他li背景变色
		var no = $(this).index();//获取移入的li的索引
		var pic = $(".ul2 li").eq(no);//获取ul2中对应li
		pic.css("display","block");//显示对应li
		pic.siblings("li").css("display","none");//隐藏其余li
	});
});