$(`document`).ready(()=>{
//Calculating photos height

var width = $(`.photo`).css(`width`);
var gridWrapper = $(`.grid-wrapper`).offset();
$(`photo`).css(`height` , width);

/////// Animation!

MainPhoto = () =>{
    //Fade Out
    $(`.main-photo-wrapper`).animate({
        width: `300px`,
        height: `300px`
    });

    $(`.gradient`).animate({position: 50},{
        step: function(now,fx) {
            $(this).css('clip-path','circle('+160+'px at '+now+'% '+now+'%)'); 
          }
    })
    $(`.main-photo`).delay(1200).animate({
        width: `90%`,
        height: `90%`
    })

    //Decrease size
    $(`.main-photo-wrapper`).delay(2000).animate({
        width: `120px`,
        height: `120px`
    });
    $(`.gradient`).delay(2000).animate({position: 50},{
        step: function(now,fx) {
            $(this).css('clip-path','circle('+65+'px at '+now+'% '+now+'%)'); 
          }
    })
    $(`.main-photo-container`).delay(2400).animate({
        width: `130px`,
        height: `130px`,
        left: `45%`,
        top: `80px`
    })
    $(`.main-photo-container`).delay(2000).animate({
        left: `${gridWrapper.left}`,
    })

//////////////Title
   $('.logo').delay(5300).queue(function (next) {
    $(this).css(`opacity`, `1`); 
    $(this).css(`left`, `0`); 
    next(); 
  });
  $('.username').delay(5300).queue(function (next) {
    $(this).css(`opacity`, `1`); 
    $(this).css(`top`, `50%`); 
    next(); 
  });
  $('.dot:nth-of-type(1)').delay(5300).queue(function (next) {
    $(this).css(`opacity`, `1`); 
    next(); 
  });
  $('.dot:nth-of-type(2)').delay(6000).queue(function (next) {
    $(this).css(`opacity`, `1`); 
    next(); 
  });
  $('.dot:nth-of-type(3)').delay(6700).queue(function (next) {
    $(this).css(`opacity`, `1`); 
    next(); 
  });

  //////Line

$(`.line`).delay(5300).queue(function(next){
    $(this).css(`width`, `100%`);
    next();
})

  /////Else

  $(`.social-element:nth-of-type(1)`).delay(5300).queue(function (next) {
    $(this).css(`margin-top`, `0`); 
    $(this).css(`opacity`, `1`); 
    next(); 
  })
    $(`.number1`).delay(5500).queue(function(next){
      $(this).css(`margin-left`,`0`);
      $(this).css(`opacity`, `1`); 
      next();
  })
  $(`.social-element:nth-of-type(2)`).delay(5700).queue(function (next) {
    $(this).css(`margin-top`, `0`); 
    $(this).css(`opacity`, `1`); 
    next(); 
  })
    $(`.number2`).delay(5900).queue(function(next){
      $(this).css(`margin-left`,`0`);
      $(this).css(`opacity`, `1`); 
      next();
  })
  $(`.social-element:nth-of-type(3)`).delay(6100).queue(function (next) {
    $(this).css(`margin-top`, `0`); 
    $(this).css(`opacity`, `1`); 
    next(); 
  })
    $(`.number3`).delay(6400).queue(function(next){
      $(this).css(`margin-left`,`0`);
      $(this).css(`opacity`, `1`); 
      next();
  })

  $(`.follow-btn`).delay(5300).queue(function (next) {
    $(this).css(`width`, `80%`); 
    $(this).css(`opacity`, `1`); 
    next(); 
  })
  $(`.recomendations-btn`).delay(5300).queue(function (next) {
    $(this).css(`opacity`, `1`); 
    next(); 
  })

  $(`.about`).delay(5300).queue(function(next) {
      $(this).css(`opacity` , `1`);
      $(this).css(`margin-top` , `0`);
      next();
  })



  ////////////////////////////////////////////Gallery

  $(`.photo1 img`).delay(6000).queue(function(next){
    $(this).css(`height` , width);
    $(this).css(`width` , `100%`);
    next();
  })
  $(`.photo2 img`).delay(6400).queue(function(next){
    $(this).css(`height` , width);
    $(this).css(`width` , `100%`);
    next();
  })

  ///////Scroll
  $("html, body").delay(6400).animate({ 
      scrollTop: $(document).height() 
    }, 1500);


  $(`.photo3 img`).delay(6700).queue(function(next){
    $(this).css(`height` , width);
    $(this).css(`width` , `100%`);
    next();
  })
  $(`.photo4 img`).delay(6000).queue(function(next){
    $(this).css(`height` , width);
    $(this).css(`width` , `100%`);
    next();
  })
  $(`.photo5 img`).delay(6400).queue(function(next){
    $(this).css(`height` , width);
    $(this).css(`width` , `100%`);
    next();
  })
  $(`.photo6 img`).delay(6700).queue(function(next){
    $(this).css(`height` , width);
    $(this).css(`width` , `100%`);
    next();
  })
}

MainPhoto();
})



