
fetch('https://randomuser.me/api/?results=12')
.then(response => response.json())
.then(podaci => prikaziDoktora(podaci))


function prikaziDoktora(korisnici) {
    const doktori = document.getElementById('doktori'); 
      
    let kartica = ``;
    for(let i = 0; i < korisnici.results.length; i++) {
        const doktor = korisnici.results[i];
       

        kartica += `
       
        <div class="col-sm-12 col-md-4 col-lg-4>
        <div class="card">
        <div class="card-body">
        <img src="${doktor.picture.large}" value=" class="card-img-top" alt="${doktor.name.first}"> 
          <h5 class="card-title velikoSlovo">${doktor.name.first} ${doktor.name.last}</h5>
          <p class="card-text">Email: ${doktor.email}</p>
          <a href="zakazivanje.html" class="btn btn-primary">Zakaži</a>
         
        </div>
      </div>
      </div>
        
        `      
    }

    doktori.innerHTML = kartica;
}


// Navigacija
$("#dropdown-itemOne").on("click", function () {
 
  $("#PrviKont").show();
  $(".drugi").hide();
  $(".treci").hide();
  $(".fixed-top").css("position","static");
 
 
 

});
$("#dropdown-itemTwo").on("click", function () {
 
  $(".prvi").hide();
  $("#DrugiKont").show();
  $(".treci").hide();
  $(".fixed-top").css("position","static");
 
 
 

});
$("#dropdown-itemThree").on("click", function () {
 
  $(".prvi").hide();
  $(".drugi").hide();
  $("#TreciKont").show();
  $(".fixed-top").css("position","static");
 
 
 

});
// Kartice

$("#prvi").on("click", function () {
 
    $(".prvi").toggle( "slow");
    $(".drugi").hide();
    $(".treci").hide();
    $(".fixed-top").css("position","static");
   
   

});
$("#drugi ").on("click", function () {
 
  $(".drugi").toggle( "slow");
  $(".prvi").hide();
  $(".treci").hide();
  $(".fixed-top").css("position","static");
 

});
$("#treci ").on("click", function () {
 
  $(".treci").toggle( "slow");
  $(".prvi").hide();
  $(".drugi").hide();
  $(".fixed-top").css("position","static");
 

});


// Forma Validacija
$("#posalji ").on("click", function () {
 
  const FormaValidna = ZakazivanjePregleda.checkValidity();
  if ( FormaValidna ) {

        $('.alert').show();
        setTimeout(function(){
          ZakazivanjePregleda.submit();

        },2000)
        
  } 
 
  });

// ScrollToTop
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







