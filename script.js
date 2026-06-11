// your code here
const button = document.getElementByid("button");
button.addEventListener("click".function()){
	const name = document.getElementById("name").value;
	const year = document.getElementById("year").value;
	let url ="https://localhost:8080/?";
	if(name && year){
		url += 'name=${name}&year=${year}';
	} else if(name){
		url += 'name=${name}';
	} else if(year){
		url += 'name=${year}';
	} else{
		url = "https://localhost:8080/"
	}
	document.getElementById("url").textContent = url;
});