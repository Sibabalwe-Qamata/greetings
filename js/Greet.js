document.addEventListener('DOMContentLoaded', function() 
{

//get a reference to the billString
var billStringField = document.querySelector(".billString");

//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");

var total = document.querySelector(".total");

	
	

    
calculateBtn.addEventListener('click', displayBill);
});