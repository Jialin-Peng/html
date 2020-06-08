// 编写人：彭佳林  学号：1811030118 
//获取对象id
function $byId(id){
	return document.getElementById(id);
}
//获取用户登陆对象并显示
function getLoginName(){
	var us=$byId("loginname");
	var op=window.opener.document.getElementById("un").value;
	us.innerHTML=op;
}
//图片轮播切换
var maxCnt=6;
var curPicNo=1;
var timer=null;
function altPic(){
	if(curPicNo==maxCnt)
		curPicNo=1;
	else
		curPicNo++;
	$byId("pic").src="main-images/"+curPicNo+".jpg";
}
//计时器
function init(){
	timer=setInterval("altPic()",2000);
}
//鼠标移动至图片停止切换
function pause(){
	clearInterval(timer);
}
//鼠标移开图片继续切换
function reStart(){
	altPic();
	init();
}
//鼠标移动至大标题显示小标题
function switchMenu(no){
	for(var i=1;i<9;i++)
	{
		if(i==no)
		{
			$byId("sm"+i).style.display="block";
			$byId("mm"+i).className="mm_on";
		}
		else
		{
			$byId("sm"+i).style.display="none";
			$byId("mm"+i).className="mm_off";
		}
	}
}