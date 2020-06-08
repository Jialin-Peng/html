// 编写人：彭佳林  学号：1811030118 
//获取对象id
function $byid(id){
	return document.getElementById(id);
}
//获取对象name
function $byname(name){
	return document.getElementsByName(name);
}
var answer_name=new Array("first","second","three","four","five");
var trueAnswer=new Array(0,2,2,2,0);
var isSel=new Array(0,0,0,0);
var score=0;

//统计分数
function sure(){
	for(var i=0;i<answer_name.length;i++)
	{
		var abc=$byname(answer_name[i]);
		for(var j=0;j<abc.length;j++)
		{
			if(abc[j].checked)
			if(abc[j].value==trueAnswer[i])
			{
				score=score+20;
			}
		}
	}
	var parent_un=parent.window.opener.document.getElementById("un").value;
	var show="";
	var show1="";
	show="学号:"+parent_un+"    你的成绩为"+score;
	alert(show);
	// alert(score);
}
//重置
function clearAll(){
	for(i=0;i<answer_name.length;i++)
	{
		var abc=$byname(answer_name[i]);
		for(j=0;j<abc.length;j++)
		{
			abc[j].checked="";
		}
	}
	score=0;
}
//参考答案
function look_answer(){
	for(var i=0;i<answer_name.length;i++)
	{
		var abc=$byname(answer_name[i]);
		for(var j=0;j<abc.length;j++)
		{
			if(abc[j].value==trueAnswer[i])
			{
				abc[j].checked="checked";
			}
		}
	}
}