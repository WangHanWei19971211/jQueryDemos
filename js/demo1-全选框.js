$(document).ready(function(){
	$("th input").change(function(){//当全选框改变时
		var isChecked=$(this).prop("checked");//获得全选框的checked属性的值
		$("td input").prop("checked",isChecked);//将全选框的checked属性的值赋给a、b两个框
	});
	$("td input").change(function(){//当a、b两个选项框改变时
		var allCount=$("td input").length;//td标签下的input标签的个数
		var checkCount=$("td input:checked").length;//td标签下的选中的input标签的个数
		if(allCount==checkCount){//判断a、b是否都被选中了（全选）
			$("th input").prop("checked",true);//代表全选的checkbox的checked为true
		}
		else{
			$("th input").prop("checked",false);//代表全选的checkbox的checked为false
		}
	});
});
		/*if else语句那块儿可简写为：
		var isAllChecked=allCount===checkCount;
		$("th input").prop("checked",isAllChecked);
		*/