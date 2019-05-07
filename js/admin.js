const admini = {
	"results": [{
			"username": "admin",
			"password": "admin567",
			"fullName": "Aleksandra Ilic"
		},
		{
			"username": "beka",
			"password": "beka567",
			"fullName": "AI"
		}
	]
}
// 
function logIn() {
	var userName = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	for (let i = 0; i < admini.results.length; i++) {
		var admin = admini.results[i];
		if (admin.username === userName && admin.password === password) {

			alert("Ulogovali ste se");
			localStorage.setItem("trenutniAdmin", admin.fullName);

			return 0;

		}
	}
	$(document).ready(
		function Error() {
			window.location.href = "logIn.html";
		},
		alert("Pogrešno ste uneli podatke!")
	)}


function postaviTrenutnogAdmina() {
	var trenutniAdmin = localStorage.getItem("trenutniAdmin");
	var trenutniA = document.getElementById("trenutniAdmin");
	trenutniA.innerHTML = trenutniAdmin;
	if (trenutniAdmin) {
		var elem = document.querySelector('#prijaviSe a');
		elem.style.display = 'none';
	}}


function logOut() {
	localStorage.setItem("trenutniAdmin", "", 1);
}


var btn = $('#button');
$(window).scroll(function () {
	if ($(window).scrollTop() > 300) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
});

btn.on('click', function (e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, '300');
});