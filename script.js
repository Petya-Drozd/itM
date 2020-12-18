$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode:true,
    slidesToShow:3,
    dotts:false,
    centerPadding:'50px',
    infinite:true,
    arrows:false,
    variableWidth: true,
  });
  $('.slider1').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow:2,
    dotts:false,
    infinite:true,
    arrows:false,

    responsive:[{
      breakpoint:1048,
      settings: {
        slidesToShow:1,
      }
    }]
  });
});

//////////////////////////////////////////////////
// Menu link Anchors
//////////////////////////
$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  })
});
////////////////////////////////////////////
//header header fixed
///////////////////////
$(document).ready(function () {
  let header = $("#nav");
  let about = $("#about");
  let aboutH = about.innerHeight();
  let scrollPos = $(window).scrollTop();

  checkScroll(scrollPos, aboutH);

  $(window).on("scroll resize", function() {
    let aboutH = about.innerHeight();
    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, aboutH);
  });

  function checkScroll(scrollPos, aboutH) {
    if(scrollPos > aboutH) {
      header.addClass("header__fixed");
    }
    else {
      header.removeClass("header__fixed");
    }
  };
});

////////////////////////////////////////////////
// Key Up show and scroll
$(document).ready(function () {
  var btn = $('#button');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 1000) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '1400');
  });
});
