function nextCoreDate() {
	var d = new Date();
	//header variables
	var daysUntilCore = 4 - d.getDay();
	//table variables
	var dates = document.getElementsByClassName("date");
	var isMonthLeadingZero = (d.getMonth() + 1) < 10;
	var isDayLeadingZero = d.getDate() < 10;
	var monthString = "";
	var dateString = "";
	//d.setFullYear(2018, 2, 5); //for testing dates
	if (daysUntilCore < 0) {
		daysUntilCore = daysUntilCore + 7;
	}
	d.setDate(d.getDate() + daysUntilCore);
	//Set the 'Core Date' header
	document.getElementById("date-window").textContent = "Next Core on " + formatDate(d);
	//Set the 'Date' row in the table
	if (isMonthLeadingZero){
		monthString = "0";
	}
	if (isDayLeadingZero) {
		dateString = "0";
	}
	monthString += d.getMonth() + 1;
	dateString += d.getDate();
	for (i = 0; i < dates.length; i++) {
		//sets each row as year-month-day, with leading zeroes if applicable
		dates[i].innerText = d.getFullYear() + "-" + monthString + "-" + dateString;
	}
}

function formatDate(d) {
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}