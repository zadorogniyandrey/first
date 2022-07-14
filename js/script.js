$(document).ready(function(){
    $('.baner').slick({
        autoplay:  true,
        dots: true,
        fade: true,
        appendArrows:'.slider-arrows',
        appendDots: '.slider-dots',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });
   
    $(".advantage__item").on("click", function () {
        $(".advantage__item").removeClass('selected')
        $(this).addClass('selected');
    });
    const iconMenu = document.querySelector('.menu__btn');
    const menuBody = document.querySelector('.header__top');
    if (iconMenu) {
        iconMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        });
    }
  });