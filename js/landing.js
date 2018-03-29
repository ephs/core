//landing.js
//Core Prototype

function signup(coreClass) {
	alert('You have signed up for: ' + coreClass.children[0].innerHTML);

	document.getElementById("assigned-text").innerHTML = "You are assigned to " + coreClass.children[0].innerHTML;
}