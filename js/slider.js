
$(document).ready(function(){


  $('.viprec_sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
          {
          breakpoint: 641,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
      ]
  });
  
$('.cart').slick({
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      fade: true,
                      autoplay:false,
                      arrows:false,
                      dots: false,
                      asNavFor: '.iss'
                    });

                    $('.iss').slick({
                      slidesToShow:4,
                      slidesToScroll: 1,
                      asNavFor: '.cart',
                      active:true,
                      autoplay:false,
                      dots: false,
                      arrows:true,
                      centerPadding: '5px',
                      focusOnSelect: true,
                      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            arrows:false,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 775,
          settings: {
            slidesToShow: 2,
            dots:false,
            arrows:false,
            slidesToScroll: 1
          }
        },


          {
            breakpoint: 565,
            settings: {
              slidesToShow: 1,
              dots:false,
              arrows:false,
              slidesToScroll: 1
            }
          }
      ]

                    });



$('#is1').on('click','li',function(){
      $('#opened').click();
      var $t = $(this),
          $f = $('.field')
          text = $t.html(),
          drop = $t.find('a.drop').attr('span.drop-tit');
      $f.find('.seltext').html(text);
      $f.find('a.drop').attr('span.drop-tit');
    });
    $('.field').click(function(e){
      e.preventDefault();
      $('#opened').click();
    })
});


$(".seltext").on("click", function (e) {

$('.seltext').toggleClass('active')




});

 $('#is').on('click','li',function(){
      $('#openeds').click();
      var $t = $(this),
          $f = $('.fields')
          text = $t.html(),
          drops = $t.find('a.drops').attr('span.drop-tits');
      $f.find('.seltexts').html(text);
      $f.find('a.drops').attr('span.drop-tits')
    });
    $('.fields').click(function(e){
      e.preventDefault();
      $('#openeds').click();
    })


 $(".seltexts").on("click", function (e) {
 $('.seltexts').toggleClass('active')

});





  