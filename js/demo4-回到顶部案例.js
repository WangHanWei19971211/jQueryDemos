$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>200){//屏幕滚动距离超过200时
			$(".back").fadeIn(300);//淡入
			$(".back").css("cursor","pointer");//添加手型属性
		}
		if($(window).scrollTop()<=200){//屏幕滚动距离小于200时
			$(".back").fadeOut(300);//淡出
		}
	});
	$(".back").on("click",function(){//点击回到顶部div时
		$("html,body").animate({//缓慢回到顶部动画
			scrollTop:0		
		},800);
//		return false;//是否需要？如果是a标签则需要，用来阻止默认行为（如a标签的跳转）
	});
});