function $byid(id){
	return document.getElementById(id);
}
function $byname(name){
	return document.getElementsByName(name);
}
function getInfor(){
	$byid("d1").innerHTML=window.opener.document.getElementById("un").value;
	$byid("d2").innerHTML=window.opener.document.getElementById("po").value;
	$byid("d3").innerHTML=window.opener.document.getElementById("no").value;
	var td1=window.opener.document.getElementsByName("t1");
	for(var i=0;i<td1.length;i++){
		if(td1[i].checked)
		$byid("d4").innerHTML=td1[i].value;
	}
	var td2=window.opener.document.getElementsByName("t2");
	for(var i=0;i<td2.length;i++){
		if(td2[i].checked)
		$byid("d5").innerHTML=td2[i].value;
	}
	var td3=window.opener.document.getElementsByName("t3");
	for(var i=0;i<td3.length;i++){
		if(td3[i].checked)
		$byid("d6").innerHTML=td3[i].value;
	}
	var td4=window.opener.document.getElementsByName("t4");
	var sc4=" ";
	for(var i=0;i<td4.length;i++){
		if(td4[i].checked)
		sc4=sc4+td4[i].value+"  ";
	}
	$byid("d7").innerHTML=sc4;
	var td5=window.opener.document.getElementsByName("t5");
	var sc5=" ";
	for(var i=0;i<td5.length;i++){
		if(td5[i].checked)
		sc5=sc5+td5[i].value+"  ";
	}
	$byid("d8").innerHTML=sc5;
}