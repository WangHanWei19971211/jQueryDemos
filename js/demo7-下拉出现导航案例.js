$(window).ready(function(){
//导航下拉菜单
	$(".menu_ul>li").hover(//这里如果选择a标签，那鼠标移出a标签后div又消失了。选择li标签则不会，因为子菜单div也在li标签中
		function(){
			$(this).children("div").css("display","inline");//fadeIn()或css()或slideDown()
		},
		function(){
			$(this).children("div").css("display","none");
		}
	);
//滚动后导航固定
	$(window).scroll(function(){
		if($(window).scrollTop()>$(".top").height()){//滚动距离超过上方元素高度时
			$(".menu").attr("id","fixedMenu");
		}
		else{
			$(".menu").removeAttr("id");
		}
	});
});