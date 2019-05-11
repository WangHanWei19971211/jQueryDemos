$(window).ready(function(){
//发布
	$("#btn").on("click",function(){//点击发布按钮后
		var text = $(".innerBox #text").val();//获取文本区域内容
		if(text.trim().length == 0){//将文本去掉首尾的空格，之后判断长度是否为零
			alert("请输入需要发布的内容！");
		}
		else{
			var li = "<li>" + text +"</li>";//合成html标签
			$(".innerBox #ul").prepend(li);//添加到列表中，后添加的在上面
			$(".innerBox #text").val("");//清空文本区域
		}
	});	
});
