




const admini = {
    "results": [{"username" : "admin", "password" : "admin567", "fullName" : "Aleksandra Ilic"},
    {"username" : "beka", "password" : "beka567", "fullName" : "AI" }]
}

function logIn () {
    var userName = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    for (let i = 0; i < admini.results.length; i++) {
        var admin = admini.results[i];
        if (admin.username === userName && admin.password === password ) {
            
            alert("Ulogovali ste se");
            localStorage.setItem("trenutniKorisnik", admin.fullName);
            localStorage.setItem("trenutnaLozinka", admin.password);

            
           
            
            
            return 0;

        }
    }
    $(document).ready(
        function Error(){
        window.location.href="logIn.html";
    },
    alert("Ne postoji korisnik ili je sifra pogresna")
    )

    
  

}





function postaviTrenutnogKorisnika () {
    var trenutniKorisnik = localStorage.getItem("trenutniKorisnik");
    var ivan = document.getElementById("trenutniKorisnik");
    ivan.innerHTML = trenutniKorisnik;
    if(trenutniKorisnik){
         document.querySelector('#prijaviSe a').innerHTML='';
    }
  
    
  
} 




function logOut () {
    localStorage.setItem("trenutniKorisnik", "", 1);
   localStorage.setItem("trenutnaLozinka", "", 1);
   
   
}
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


