new WOW().init();

$('.header_top').addClass('wow animated bounceInDown');
$('.main_menu_area').addClass('wow animated fadeInDown');
$('.slider_table_cell h1').addClass('wow animated zoomInUp');
$('.slider_table_cell p').addClass('wow animated bounce');
$('.slider_table_cell a').addClass('wow animated pulse');
$('.section_heading').addClass('wow animated rubberBand');
$('.single_service').addClass('wow animated slideInUp');
$('.works_preview_big').addClass('wow animated flipInX');
$('.works_single_item').addClass('wow animated lightSpeedIn');
$('.footer_widget').addClass('wow animated pulse');












$(document).ready(function () {
  
$('.owl_one').owlCarousel({
    loop:true,
  navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
    margin:10,
    nav:true,
  dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
  
$('.owl_two').owlCarousel({
    loop:true,
    margin:10,
  dots:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
});

  
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
  
  
  
  
  

});

  $(document).ready(function(){
            var submitIcon = $('.searchbox-icon');
            var inputBox = $('.searchbox-input');
            var searchBox = $('.searchbox');
            var isOpen = false;
            submitIcon.click(function(){
                if(isOpen == false){
                    searchBox.addClass('searchbox-open');
                    inputBox.focus();
                    isOpen = true;
                } else {
                    searchBox.removeClass('searchbox-open');
                    inputBox.focusout();
                    isOpen = false;
                }
            });  
             submitIcon.mouseup(function(){
                    return false;
                });
            searchBox.mouseup(function(){
                    return false;
                });
            $(document).mouseup(function(){
                    if(isOpen == true){
                        $('.searchbox-icon').css('display','block');
                        submitIcon.click();
                    }
                });
        });
            function buttonUp(){
                var inputVal = $('.searchbox-input').val();
                inputVal = $.trim(inputVal).length;
                if( inputVal !== 0){
                    $('.searchbox-icon').css('display','none');
                } else {
                    $('.searchbox-input').val('');
                    $('.searchbox-icon').css('display','block');
                }
            }