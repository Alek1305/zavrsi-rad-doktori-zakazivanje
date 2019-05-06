


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


  





