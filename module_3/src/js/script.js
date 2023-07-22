$(document).ready(function(){
    $('.slider__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/slider/arrow-icon.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./img/slider/arrrow.svg"></button>',
        dotsClass: 'slider__dots',
        adaptiveHeight: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__wrap').removeClass('catalog__wrap_active').eq($(this).index()).addClass('catalog__wrap_active');
  });

  function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.card__image').eq(i).toggleClass('card__image_active');
            $('.card__more').eq(i).toggleClass('card__more_active');
        })
      });
  };
  toggleSlide('.card__a');
  toggleSlide('.card__ab');

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function(){
    $('.overlay, #thanks, #consultation, #order').fadeOut('slow');
  });
  $('.button_min').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__subtitle').text($('.card__title').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    })
  });
});