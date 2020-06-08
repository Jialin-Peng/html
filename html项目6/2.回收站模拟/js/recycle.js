function drag(event) {
 	event.dataTransfer.setData("text", event.target.id);
 }

 function allowDrop(event) {
 	event.preventDefault();
 }

 function drop(event) {
 	event.preventDefault();
 	var id = event.dataTransfer.getData("text");
 	var folder = document.getElementById(id);
 	document.getElementById("container").removeChild(folder);
 }
