
$(document).ready(function(){

if(navigator.userAgent.search(/Edge/)>0){$('html').addClass('edge')};
if (navigator.userAgent.search(/MSIE/) > 0 || navigator.userAgent.search(/NET CLR /) > 0) {$('html').addClass('ie')};
if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {$('html').addClass('safari')};




$('.articles').owlCarousel({
    responsiveClass:true,
    navText: [
      `<div class="owl-btn">
          <svg width="97" height="97" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d)">
              <circle cx="48.5" cy="44.5" r="33.5" fill="white"/>
              </g>
              <path d="M42.933 56C42.6841 56 42.4664 55.9109 42.2799 55.7326C41.9067 55.376 41.9067 54.8114 42.2799 54.4845L52.7607 44.5L42.2799 34.5155C41.9067 34.1589 41.9067 33.5943 42.2799 33.2674C42.6531 32.9109 43.244 32.9109 43.5861 33.2674L54.7201 43.876C54.9067 44.0543 55 44.2623 55 44.5C55 44.7377 54.9067 44.9754 54.7201 45.124L43.5861 55.7326C43.3995 55.9109 43.1818 56 42.933 56Z" fill="#20384E"/>
              <defs>
              <filter id="filter0_d" x="0" y="0" width="97" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="7.5"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              </filter>
              </defs>
          </svg>
        </div>`,
        `<div class="owl-btn">
            <svg width="97" height="97" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d)">
              <circle cx="48.5" cy="44.5" r="33.5" transform="rotate(180 48.5 44.5)" fill="white"/>
              </g>
              <path d="M54.067 33C54.3159 33 54.5335 33.0891 54.7201 33.2674C55.0933 33.624 55.0933 34.1886 54.7201 34.5155L44.2393 44.5L54.7201 54.4845C55.0933 54.8411 55.0933 55.4057 54.7201 55.7326C54.3469 56.0891 53.756 56.0891 53.4139 55.7326L42.2799 45.124C42.0933 44.9457 42 44.7377 42 44.5C42 44.2623 42.0933 44.0246 42.2799 43.876L53.4139 33.2674C53.6005 33.0891 53.8182 33 54.067 33Z" fill="#20384E"/>
              <defs>
              <filter id="filter0_d" x="0" y="0" width="97" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="7.5"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              </filter>
              </defs>
              </svg>
        </div>`
    ],
    nav: true,
    responsive:{
        0:{
            items:2,
            margin:10,
            loop:true,
            autoWidth: true,
        },
        750:{
            items:3,
            margin:30,
            loop:true,
            autoWidth: true,
        },
        1300:{
            items:4,
            margin:40,
            loop:true,
        },
        1450:{
            items:4,
            margin:40,
            loop:true,
        }
    }
});

$('.prods-line').owlCarousel({
    responsiveClass:true,
    navText: [
      `<div class="owl-btn">
          <svg width="97" height="97" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d)">
              <circle cx="48.5" cy="44.5" r="33.5" fill="white"/>
              </g>
              <path d="M42.933 56C42.6841 56 42.4664 55.9109 42.2799 55.7326C41.9067 55.376 41.9067 54.8114 42.2799 54.4845L52.7607 44.5L42.2799 34.5155C41.9067 34.1589 41.9067 33.5943 42.2799 33.2674C42.6531 32.9109 43.244 32.9109 43.5861 33.2674L54.7201 43.876C54.9067 44.0543 55 44.2623 55 44.5C55 44.7377 54.9067 44.9754 54.7201 45.124L43.5861 55.7326C43.3995 55.9109 43.1818 56 42.933 56Z" fill="#20384E"/>
              <defs>
              <filter id="filter0_d" x="0" y="0" width="97" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="7.5"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              </filter>
              </defs>
          </svg>
        </div>`,
        `<div class="owl-btn">
            <svg width="97" height="97" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d)">
              <circle cx="48.5" cy="44.5" r="33.5" transform="rotate(180 48.5 44.5)" fill="white"/>
              </g>
              <path d="M54.067 33C54.3159 33 54.5335 33.0891 54.7201 33.2674C55.0933 33.624 55.0933 34.1886 54.7201 34.5155L44.2393 44.5L54.7201 54.4845C55.0933 54.8411 55.0933 55.4057 54.7201 55.7326C54.3469 56.0891 53.756 56.0891 53.4139 55.7326L42.2799 45.124C42.0933 44.9457 42 44.7377 42 44.5C42 44.2623 42.0933 44.0246 42.2799 43.876L53.4139 33.2674C53.6005 33.0891 53.8182 33 54.067 33Z" fill="#20384E"/>
              <defs>
              <filter id="filter0_d" x="0" y="0" width="97" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="7.5"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              </filter>
              </defs>
              </svg>
        </div>`
    ],
    nav: true,
    responsive:{
        0:{
            items:3,
            margin:10,
            loop:true,
            autoWidth: true,
        },
        750:{
            items:3,
            margin:30,
            loop:true,
            autoWidth: true,
        },
        1300:{
            items:5,
            margin:200,
            loop:true,
        },
        1450:{
            items:5,
            margin:30,
            loop:false,
            mouseDrag:false,
        }
    }
});



if( $('html').scrollTop()){
  $('header').addClass('header-scroll')
}

$(window).scroll(function() {

   var st = $(this).scrollTop();
   var window_height=document.documentElement.clientHeight;
   var window_height_over=document.documentElement.clientHeight/5;
   if (window.matchMedia("(min-width: 1260px)").matches) {
   $('.anons-elem').each(function() {
         var ths=$(this);
         var a=ths.offset().top-(window_height/1.1);
         var b=ths.offset().top-(window_height);
         if(a<st){
             ths.addClass('show_anons');
         }
         if(b>=st){
           ths.removeClass('show_anons');
         }
     });
  }
   if (window.matchMedia("(min-width: 1260px)").matches) {
    if (st>0) {$('header').addClass('header-scroll')}
    else {$('header').removeClass('header-scroll')}
  }
});

$(window).on('load', function(){
  var st = $('html').scrollTop();
  console.log(st);
  if (st!=0){
    $('.anons-elem').addClass('show_anons');
    $('html').scrollTop(st);
  }
  else{
    $('.anons-elem').addClass('show_anons');
    $('html').scrollTop(0);
  }
});



$(document).ready(function(){
    $("#ankers").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
            console.log(top);
            top = top-120;
            console.log(top);
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $("li").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
            console.log(top);
            top = top-120;
            console.log(top);
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


$(document).ready(function(){
    $(".menu_button_mobile").on("click", function (event) {
        event.preventDefault();

        if ($('.menu-mobile').hasClass('fade')){
          $(".menu_button_mobile").attr("src","/assets/img/menu_768.svg");
          $('.menu-mobile').removeClass('fade')
          $('header').removeClass('menu-header')
          $('html').removeClass('block-scroll')

        }
        else {
          $(".menu_button_mobile").attr("src","/assets/img/close_menu_768.svg");
          $('.menu-mobile').addClass('fade')
          $('header').addClass('menu-header')
          $('html').addClass('block-scroll')
        }
    });
});




    $(".other-menu li div").on("click", function (event) {
      var thx=$(this)
        // event.preventDefault();
        let a = thx.closest('li').find('.menu-head');
        let b = thx.closest('li');
        let c= b.find('svg');
        if (b.hasClass('close')){
          a.slideDown();
          b.removeClass('close')
          c.removeClass('close_path')

        }
        else {
          b.addClass('close')
          c.addClass('close_path')
          a.slideUp();
        }


    });

    $('.more-articles-btn').click(function() {
      $('.more-grid-elem').slideDown();
    });

    $(function (){
        $('.dropdown-link').click(function(){
           let link = $(this).text();
           console.log(link)
           $('.btn-text span').text(link);

        });
    });










});
