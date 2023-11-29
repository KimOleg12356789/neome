$(document).ready(function(){

	      $(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.accordion_content').not($next).slideUp().parent().removeClass('open');
    };
  } 

  var accordion = new Accordion($('#accordion'), false);
});

$('.one_sl').slick({
        infinite: true,
        speed: 300,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            }
          }
      ]
  });




});