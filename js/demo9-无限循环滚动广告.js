$(window).ready(function(){
	//无限循环滚动广告
	$(function(){
		var offset = 0;//偏移量
		var timer;
		function autoPlay(){
		//滚动
			timer = setInterval(function(){ //命名为timer，方便后面停止它
				offset +=-5;
				if(offset == -4*300){//移出去四张图片时重置，由于56和12相同，所以看不出来跳转到开头了
					offset = 0;
				}
				$(".box-2 .ul1").css("marginLeft",offset);
			}, 30);
		};
		autoPlay();
		//暂停
		$(".box-2 .ul1 li").hover(
			function(){
				clearInterval(timer);
				var no = $(this).index();
				$(this).siblings("li").fadeTo(100,0.5);//使其他li变透明，显出li背景色
			},
			function(){
				autoPlay();
				$(this).siblings("li").fadeTo(100,1.0)//恢复透明度
			}
		);
	});
});