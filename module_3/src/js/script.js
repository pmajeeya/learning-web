$(document).ready(function(){
    $('.slider__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/slider/arrow-icon.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./img/slider/arrrow.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
  })
})