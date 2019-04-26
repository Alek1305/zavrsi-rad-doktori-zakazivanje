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

            location.href = "index.html";
           
            
            
            return 0;

        }
    }

    alert("Ne postoji korisnik ili je sifra pogresna");
  

}





function postaviTrenutnogKorisnika () {
    var trenutniKorisnik = localStorage.getItem("trenutniKorisnik");
    var ivan = document.getElementById("trenutniKorisnik");
    ivan.innerHTML = trenutniKorisnik;
    if(trenutniKorisnik){
         document.querySelector('#prijaviSe a').innerHTML='';
    }
  
    
  
} 

function prikaziKorisnika () {
    postaviTrenutnogKorisnika();
    var imePrezime = localStorage.getItem("trenutniKorisnik");
    var lozinka = localStorage.getItem('trenutnaLozinka');

    
}


function logOut () {
    localStorage.setItem("trenutniKorisnik", "", 1);
   localStorage.setItem("trenutnaLozinka", "", 1);
   
   
}

