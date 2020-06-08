function $byName(name){
	return document.getElementsByName(name);
}
function check(){
	var sel4=0;
	var sel5=0;
	for(var j=0;j<$byName("t4").length;j++)
		if($byName("t4")[j].checked)
			sel4++;
	for(var j=0;j<$byName("t5").length;j++)
		if($byName("t5")[j].checked)
			sel5++;
	if(sel4==0||sel5==0){
		alert("第4,5题至少要选一个选项");
		return false;
	}
}