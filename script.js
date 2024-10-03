// Constants
const ACTIVE_TIME_MS = 5000;
const DEACTIVATION_TIME_MS = 750;

// Variables
var felix = document.getElementById("felix");
var responseFrame = document.getElementById("response-frame");
var responseMessage = document.getElementById("response-message");
var userMadeDecision = false;
var jokes = [
	'sayang, sebenernya akutu gak suka sama kamu, cuman duitmu banyak jadi mau mau aja.',
	'beb tau ga apa yg lebih jelek dari pada hulk, hahaha iya kamuuu.. ih becanda ayangg😙 jangan ngambek gitu dong.',
	'kamu itu mesum jelek pelitt sama aku, gamau aku sama kamu Humphhh😡.',
	'cowo cowo sekarang pada brengsek.',
	'sana pergi gausah chattan atau sentuh sentuh aku lagi gamau aku sama kamu',
	'es krim dulu baru aku ngga ngambek.',
	'gamau ayang, akutu lagi sakit gigi.',
	'aku punya temen... dia itu.. oh iya aku kan selalu sendiri😄.'
];

// Activate felix and set timeout for awaiting a command.
function activateFelix() {
	userMadeDecision = false;
	felix.classList.remove("inactive");
	felix.classList.add("active");
	setTimeout(function() {
		if (!userMadeDecision) {
			felix.classList.remove("active");
			felix.classList.add("inactive");
			setTimeout(function() {
				felix.classList.remove("inactive");
			}, 750);
		}
	}, 5000);
}
function deactivateFelix() {
	userMadeDecision = true;
	felix.classList.remove("active");
	felix.classList.add("inactive");
	setTimeout(function() {
		felix.classList.remove("inactive");
	}, 750);
}
function getWeather() {
	responseMessage.innerText = "Duh bang kan lu liat bisa sendiri di luar gmn cuacanya, masa tanya gw sih anying.";
	showResponse();
}
function getTime() {
	var today = new Date();
	var time = today.getHours() + ":" + today.getMinutes();
	responseMessage.innerText = "Lu Ga punya jam tangan? jam dinding? atau handphone gitu? bang lu gajelas anying. Becanda sayang 💗 sekarang jam " + time + ".";
	showResponse();
}
function getDate() {
	var today = new Date();
	var date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
	responseMessage.innerText = "Bang di hp lu itu ada, di laptop lu ada, bahkan ni ye, dinding rumah Lu itu ada bangggg kenapa lu masih nanya gw anyingggg.iye dah iye dah gw kasih tau dah Tuh " + date + ".";
	showResponse();
}
function tellJoke() {
	var index = Math.floor((Math.random() * jokes.length) - 1);
	responseMessage.innerText = jokes[index];
	showResponse();
}
function searchGoogle() {
	deactivateFelix();
	window.open("https://www.google.com/", "_blank");
}
function showInspiration() {
	deactivateFelix();
	window.open("https://dribbble.com/shots/5473987-AI-Robot", "_blank");
}
function showResponse() {
	responseFrame.classList.add("active");
	deactivateFelix();
}
function closeResponse() { responseFrame.classList.remove("active"); }
changeTheme(SiteTheme.Dark);