
/*****************************************
File: asgn1_Nguyen.html
Author: Thuy Tien Nguyen
Assignment: 1
Create Date: 6/20/2019
Last Modified: 6/22/2019
****************************************/


var $ = function (id) 
{
	return document.getElementById(id);
}

var displayMessage = function ()
{
	//get value from user
	var myFirstName = $("firstname").value;
	var myAge = $("age").value;
	var hourSlept = $("hour").value;
	
	//make value integer
	var myAgeInt = parseInt(myAge);
	var hourSleptInt = parseInt(hourSlept);
	
    //calculate slept years	
	var mySleptYear = myAgeInt * (hourSleptInt / 24);
	
	//round slept years to a nearest integer
	var mySleptYearRound = Math.round(mySleptYear);
	
	//print text message after button is clicked
	var myText = "Hi " + myFirstName + ". You have slept " + mySleptYearRound + " years of your life away.";

	$("mymsg").innerHTML = myText;
}

window.onload = function ()
{
	$("mybutton").onclick = displayMessage;  
}