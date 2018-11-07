// EXPERIMENT #1
// let message = "Hello Javascript";
let messageBtn = document.querySelector('#messageBtn');
messageBtn.addEventListener('click',function(){
	alert("I will strive harder to learn Javascript");
});

// EXPERIMENT #2
let myName = "Happy Tummy";
let myNameBtn = document.querySelector('#myNameBtn');
myNameBtn.addEventListener('click',function(){
	alert(myName);
});

// EXPERIMENT #3
let Country = "Philippines";
let    City = "Quezon City";
let userLocationBtn = document.querySelector('#userLocationBtn');
	userLocationBtn.addEventListener('click',function(){
	alert("User Location: "+ City +", "+ Country);
});

//EXPERIMENT #4

let fahrenheitBtn = document.querySelector('#fahrenheitBtn');
	fahrenheitBtn.addEventListener('click',function(){
		let fahrenheit = prompt("Enter fahrenheit temperature.");
		let    celcius = (fahrenheit-32)*(5/9);
		alert(celcius);
	});

//EXPERIMENT #5

let studentScoreBtn = document.querySelector('#studentScoreBtn');
	studentScoreBtn.addEventListener('click',function(){
		let    examScore = document.querySelector('#examScoreTxt').value;
		let     maxScore = document.querySelector('#maxScoreTxt').value;
		let studentScore = ((examScore/maxScore)*100).toFixed(2);

		if( !studentScore ) {
			alert("Student Score: "+studentScore +" %");
		}
		else {
			alert("Invalid Input");
		}
		
	});

//EXPERIMENT #6

function sum() {
	let firstNumber = parseFloat(document.querySelector('#firstNumber').value);
	let secondNumber = parseFloat(document.querySelector('#secondNumber').value);
	let sum = (firstNumber+secondNumber);
	let totalNumber = document.querySelector('#totalNumber');

	if ( !firstNumber && !!secondNumber ) {
		totalNumber.innerHTML = secondNumber;
	}
	else if ( !!firstNumber && !secondNumber ) {
		totalNumber.innerHTML = firstNumber;
	}
	else if ( !sum  ){
		totalNumber.innerHTML = "Empty Values";
		}
	else { 
		totalNumber.innerHTML = sum;
	}
}
let computeBtn = document.querySelector('#computeBtn');
	computeBtn.addEventListener('click',sum);

//EXPERIMENT 7

let adminChk = document.querySelector('#adminChk');
let loggedinChk = document.querySelector('#loggedinChk');

loggedinChk.addEventListener('click',function(){
	if(loggedinChk.checked) {
		let userName = document.querySelector('#userName');
		let adminChk = document.querySelector('#adminChk');
		
		userName.removeAttribute('disabled');
		adminChk.removeAttribute('disabled');

		let isLoggedinTxt = document.querySelector('#isLoggedinTxt');
		
		isLoggedinTxt.style.backgroundColor = red;
	}
	else {
		let userName = document.querySelector('#userName');
			userName.disabled ="true";
			userName.value = "";
		let adminChk = document.querySelector('#adminChk');
			adminChk.disabled = "true";
			adminChk.value = 0;

	}
});

