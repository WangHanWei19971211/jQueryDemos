$(window).ready(function(){
//弹幕
	var color = ["red","green","pink","yellow","blue"];
	$("#box2_btn").on("click",function(){
		var text = $(".box2_text").val();
		if(text.trim().length == 0){//将文本去掉首尾的空格，之后判断长度是否为零
			alert("请输入需要发送的内容！");
		}
		else{
			var randomY = parseInt(Math.random()*100);
			var randomColor = parseInt(Math.random()*color.length);
			//创建<span>text</span>并添加样式和动画
			var span = $("<span></span>").text(text)
			.css("color",color[randomColor])//随机生成颜色
			.css("position","absolute")//相对父div定义位置，需要父div设置position: relative
			.css("left","110%")//刚生成时在最右侧,div外
			.css("top",randomY)//距离顶部距离随机
			.css("font-size","25px")//字的大小
			.animate({left:"-15%"},10000,"linear",function(){//添加动画，15秒钟内left从110%变为-15%,"linear"使动画匀速
				$(this).remove();//回调函数，span标签动画结束后删除span标签
			});
			//将创建好的span标签添加到页面
			$(".box2_content").append(span);
			//设置文本框的内容为空
			$(".box2_text").val("");
		}
	});
	$(".box2_text").keyup(function(e){//当.box2_text获得焦点且键盘键被松开时
		if(e.keyCode == 13){//判断按下的建是否是回车
			$("#box2_btn").click();
		}
	}); //keyUp()注释：如果在文档元素上进行设置，则无论元素是否获得焦点，松开按键时该事件都会发生
	
});