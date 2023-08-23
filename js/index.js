
$(document).ready(function(){
    $('.news__slider').slick({
        arrows: true,
        infinite: false,
        speed: 300,
        prevArrow: '.slider__controls-secondary-prev',
        nextArrow: '.slider__controls-secondary-next',
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [     
          {
            breakpoint: 1099,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
 
});

$(document).ready(function(){
    $('.slicky-ricky').slick({
        infinite: true,
        speed: 1200,       
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: '.slider__controls-primary-prev',
        nextArrow: '.slider__controls-primary-next',
        lazyLoad: 'ondemand',
        autoplaySpeed: 5000,
        loop: true
      });
      
      $(".slide1").click(function(e) {
        $(".slicky-ricky").slick('slickGoTo', parseInt(0));
      });
      $(".slide2").click(function(e) {
        $(".slicky-ricky").slick('slickGoTo', parseInt(1));
      });
      $(".slide3").click(function(e) {
        $(".slicky-ricky").slick('slickGoTo', parseInt(2));
      });
      $(".slide4").click(function(e) {
        $(".slicky-ricky").slick('slickGoTo', parseInt(3));
      });
      
      $('.slide1').addClass('active');
      
      /* Add and remove active class */
      
      $('.slicky-ricky').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        if (nextSlide == 0) {
          $('.slide1').addClass('active');
          $('.slide2').removeClass('active');
          $('.slide3').removeClass('active');
          $('.slide4').removeClass('active');
        } else if (nextSlide == 1) {
      
          $('.slide2').addClass('active');
          $('.slide1').removeClass('active');
          $('.slide3').removeClass('active');
          $('.slide4').removeClass('active');
        } else if (nextSlide == 2) {
      
          $('.slide3').addClass('active');
          $('.slide2').removeClass('active');
          $('.slide1').removeClass('active');
          $('.slide4').removeClass('active');
        } else if (nextSlide == 3) {
      
          $('.slide4').addClass('active');
          $('.slide2').removeClass('active');
          $('.slide3').removeClass('active');
          $('.slide1').removeClass('active');
        }
      });
});

$(window).on('scroll', function() {
    var windowHeight = $(window).height();
    var scrollPos = $(window).scrollTop();

    $('#mainnav li').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.find('a').attr("href"));

        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            currLink.addClass("active");
            currLink.find('a').addClass("active-link"); // Добавьте эту строку, чтобы добавить класс "active-link" к активной ссылке раздела
        } else {
            currLink.removeClass("active");
            currLink.find('a').removeClass("active-link"); // Добавьте эту строку, чтобы удалить класс "active-link" с неактивных ссылок разделов
        }
    });
});

var currentStep = 1;
var totalSteps = 3;
    
    function showStep(step) {
        for (var i = 1; i <= totalSteps; i++) {
            var stepDiv = document.getElementById('step' + i);
            stepDiv.style.display = 'none';
        }
    
        var currentStepDiv = document.getElementById('step' + step);
        currentStepDiv.style.display = 'block';
    
        var navigation = document.getElementById('navigation');
        var prevBtn = document.getElementById('quiz-prevBtn');
        var nextBtn = document.getElementById('quiz-nextBtn');
    
        if (step === 1) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }
    
        if (step === totalSteps) {
            nextBtn.innerHTML = 'Отправить';
        } else {
            nextBtn.innerHTML = 'Далее';
        }
        }
    
    function nextStep() {
        if (currentStep < totalSteps) {
            currentStep++;
            showStep(currentStep);
        } else {
            // Логика отправки формы обратной связи
            alert('Форма отправлена');
        }
        }
    
    function prevStep() {
          if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
          }
        }
    
showStep(currentStep);


const button = document.querySelector('.hero__download');
        button.addEventListener('click', function() {
        this.style.transform = 'scale(1.1)';
        setTimeout(() => this.style.transform = 'scale(1)', 200);
});




