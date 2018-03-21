function nextCoreDate() {
	var d = new Date();	
	//d.setFullYear(2018, 2, 22); //for testing dates
	var daysUntilCore = 4 - d.getDay();
	if (daysUntilCore < 0) {
		daysUntilCore = daysUntilCore + 7;
	}
	d.setDate(d.getDate() + daysUntilCore);
	document.getElementById("date-window").textContent = "Next Core on " + formatDate(d);
}

function formatDate(d) {
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}