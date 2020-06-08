// 编写人：彭佳林  学号：1811030118 
var TIMER=setInterval(refresh(),60000);
var code="";
//获取id
function $byid(id){
	return document.getElementById(id);
}
//重置
function refresh(){
	$byid("un").value="";
	$byid("pwd").value="";
	$byid("yzm").value="";
	$byid("pwdts").innerHTML="";
	$byid("yzmcode").innerHTML=code=createCode();
}
//创建验证码
function createCode(){
	var codeLength=4;
	var validateCode="";
	var codeChars=new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
	for(var i=0;i<codeLength;i++){
		var charNum=Math.floor(Math.random()*62);
		validateCode+=codeChars[charNum];
	}
	return validateCode.replace(/\s+/g,'');
}
//页面加载时显示验证码
function webLoad(){
	code=createCode();
	$byid("yzmcode").innerHTML=code;
}
//点击刷新验证码
function switchCode(obj){
	obj.innerHTML=code=createCode();
}
//校验验证码和验证码
function valInputCode(){
	if($byid("pwd").value.length>=0)
	{
		if($byid("pwd").value.length==0)
		{
			$byid("pwdts").innerHTML="请输入密码";
			return false;
		}
		else if($byid("pwd").value.length<8 || $byid("pwd").value.length>16)
		{
			$byid("pwdts").innerHTML="8-16位";
			return false;
		}
	}
	var codeInput=$byid("yzm");
	var inCode=codeInput.value.replace(/\s+/g,'');
	if(inCode.length==0){
		codeInput.value="请输入验证码！";
		return false;
	}
	else if(inCode.toUpperCase()!=code.toUpperCase()){
		codeInput.value="验证码错误！";
		return false;
	}
	// else{
	// 	return true;
	// }
}
//检查密码位数
// function checkLogOn(){
// 	if($byid("pwd").value.length>=0)
// 	{
// 		if($byid("pwd").value.length==0)
// 		{
// 			$byid("pwdts").innerHTML="请输入密码";
// 			return false;
// 		}
// 		else if($byid("pwd").value.length<8 || $byid("pwd").value.length>16)
// 		{
// 			$byid("pwdts").innerHTML="8-16位";
// 			return false;
// 		}
// 	}
// 	else{
// 		return true;
// 	}
	
// }
// function check(){
// 	if(valInputCode()&&checkLogOn())
// 		return true;
// 	else
// 		return false;
// }

//此处原本想写校验密码位数的方法，但是写出来，在登陆检验的时候发现怎么都不能同时调用，所以将其注释，将密码校验和验证码校验合在一起写了

//点击密码框清空密码和提示
function removePwd(){
	$byid("pwd").value="";
	$byid("pwdts").innerHTML="";
}
//点击用户名框清空用户名
 function removeName(){
	$byid("un").value="";
}
//点击清除验证码
function removeYam(){
	$byid("yzm").value="";
}
//不同角色不同用户名提示
function checkedUser(no){
	switch(no){
		case 0:$byid("un").value="请输入职责编号";break;
		case 1:$byid("un").value="请输入教师编号";break;
		case 2:$byid("un").value="请输入学号";break;
		case 3:$byid("un").value="请输入访客编号";break;
	}
}