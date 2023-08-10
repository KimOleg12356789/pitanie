jQuery(document).ready(function() {


$('button#is1').click(function(){
          var tab_id = $(this).attr('data-tab');

          $('button#is1').removeClass('current');

          $(this).addClass('current');
          $("#"+tab_id).addClass('current');
  });

$('input.panel-is-1').click(function(){
    $(this).find('.colc-but-wrap').val('button.calc-but-ist').css('display','block')
});

$('button.expand-quves').click(function(){
        $('.quves-is').slideDown();
        $('button#is').slideDown();
        $('button.expand-quves').css('display','none')
});

$('button#is').click(function(){
     $('.quves-is').slideUp();
     $('button#is').slideUp();
    $('button.expand-quves').css('display','block')
});


const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
    });
});       




});