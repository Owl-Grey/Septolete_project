
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
            margin:0,
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





$('.test-list').owlCarousel({
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
            margin:0,
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
            items:2,
            margin:20,
            loop:true,
        }
    }
});

$('.video').owlCarousel({
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
            margin:0,
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
            items:3,
            margin:40,
            loop:true,
        },
        1450:{
            items:3,
            margin:25,
            loop:true,
        }
    }
});
let owl = $('.head-scroll').owlCarousel({
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
            margin:0,
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
            items:1,
            margin:10,
            loop:true,
            autoplay:true,
        }
    }
});
owl.on('changed.owl.carousel', function(event) {
  if(event.item.index-($('.head-scroll .owl-item.cloned').length/2)===0){
    var t=$('.head-scroll .owl-item:not(.cloned)').eq($('.head-scroll .owl-item:not(.cloned)').length-1)
    t.addClass('car-none')
    setTimeout(function(){
      t.removeClass('car-none')
    },1500)
  }
  $('.head-scroll .owl-item').each(function(k,item){
    let ths= $(this);
    if (event.item.index-1===k){

      ths.addClass('car-none')
      setTimeout(function(){
        ths.removeClass('car-none')
      },1500)
    }
  })
})


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
$('.choose-sept').owlCarousel({
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
var a=0;
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
  if (window.matchMedia("(min-width: 1260px)").matches) {
  let line = 'bot'
  if(st<a){ line='top'}
  if (line=='top'){
    $('header').addClass('header-scroll-top')
    setTimeout(function () {$('header').css({'top': 0})}, 0)
}
  else{
    $('header').css({'top': '-90px'})
  setTimeout(function () {$('header').removeClass('header-scroll-top')}, 300)


}
  a=st;
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
    $(document).on("click",".ankers a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
            console.log(top);
            top = top-140;
            console.log(top);
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $(document).on("click",".page-nav li a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
            console.log(top);
            top = top-140;
            console.log(top);
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


$(document).ready(function(){
    $(".menu_button_mobile").click( function (event) {
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

$(document).ready(function(){
  let a = $(".other-menu li div").closest('li').find('.menu-head');
  let b = $(".other-menu li div").closest('li');
  let c = b.find('svg');

    b.addClass('close')
    c.removeClass('path')
    c.addClass('close_path')
  if (window.matchMedia("(min-width: 768px)").matches) {
    a.addClass('close')
  }
  else{
    a.slideUp()
  }
});


    $(".other-menu li div").on("click", function (event) {
      var thx=$(this)
        // event.preventDefault();
        let a = thx.closest('li').find('.menu-head').find('li');
        let aa= thx.closest('li').find('.menu-head');
        let b = thx.closest('li');
        let c= b.find('svg');
        if (window.matchMedia("(min-width: 768px)").matches) {
        if (b.hasClass('close')){
          a.addClass('open-list')
          b.removeClass('close')
          c.removeClass('close_path')
          c.addClass('path')
        }
        else {
          a.removeClass('open-list')
          b.addClass('close')
          c.removeClass('path')
          c.addClass('close_path')
        }
      }
      else{
        if (b.hasClass('close')){
          aa.slideDown()
          b.removeClass('close')
          c.removeClass('close_path')
          c.addClass('path')
        }
        else {
          aa.slideUp()
          b.addClass('close')
          c.removeClass('path')
          c.addClass('close_path')
        }
      }

    });

    $('.more-articles-btn').click(function() {
      $('.more-grid-elem').slideDown();
    });

    $(function (){
        $('.dropdown-link').click(function(){
           let link = $(this).text();
           $('.btn-text span').text(link);

        });
    });
    if ($('.baba-block').length>0){
    var main_height=$('.main-main').height();
    var baba_height=$('.baba-block').height();
    var block_height=$('.story').offset().top-229;
    var story_height=$('.story').height();
    let x= main_height-baba_height+story_height;
    let y = main_height - baba_height + story_height;
    $( window ).resize(function() {
       main_height=$('.main-main').height();
       baba_height=$('.baba-block').height();
       block_height=$('.story').offset().top-229;
       var story_height=$('.story').height();
       let x= main_height-baba_height+story_height;
       let y = main_height - baba_height + story_height;
    });

    var window_height=document.documentElement.clientHeight;
    $(window).scroll(function() {
       var st = $(this).scrollTop();
       var window_height=document.documentElement.clientHeight;
       var window_height_over=document.documentElement.clientHeight/5;
       if (st<block_height) {
         $('.baba-block').css({'top': 0})
         $('.baba-block').removeClass('block-fix')
         $('.baba-block').removeClass('up-block')
       }
       else if (st>block_height && st<x){
         $('.baba-block').addClass('block-fix')

          $('.baba-block').css({'top': 0})
          $('.baba-block').removeClass('up-block')
       }
       else {
          $('.baba-block').addClass('up-block')
          $('.baba-block').removeClass('block-fix')

         $('.baba-block').css({'top': y})
       }


    });
  }
  $(".dropdown-btn").on("click", function (event) {
    if (window.matchMedia("(max-width: 1260px)").matches) {
      if ($('.dropdown-list').hasClass('open-dropdown')){
        $('.dropdown-list').removeClass('open-dropdown')
      }
      else{
        $('.dropdown-list').addClass('open-dropdown')
      }
    }
  });




  if ($('.story').length>0){
    let k=$('.story').offset().top;

        $(window).scroll(function() {
       var str = $(this).scrollTop();
       let end=708;
       let firf=k+236;
       let secf=k+287;
       let thf=k+338;
       let zn=2*k+154;
       let lif=3*k+259;
       let lis=3*k+327+220;
       let lit=3*k+392+100;
       let h2=3*k+154;
      if (str>k && str<k+end) {
         $('.first img').addClass('story-vis')
         if ($('.first img').hasClass('move-main')){
           $('.first img').removeClass('move-main')
         }
      }else{
          if(str>k+end){$('.first img').addClass('move-main')
          }else{
            $('.first img').removeClass('move-main')
          }
          $('.first img').removeClass('story-vis')
      }


         if(str>firf && str<k+end){
           $('.fir').addClass('story-vis')
           if ($('.fir').hasClass('move-main')){
             $('.fir').removeClass('move-main')
           }
         }else{
           if(str>k+end){$('.fir').addClass('move-main')
           }else{
             $('.fir').removeClass('move-main')
           }
           $('.fir').removeClass('story-vis')}


         if(str>secf && str<k+end){
           if ($('.sec').hasClass('move-main')){
             $('.sec').removeClass('move-main')
           }
           $('.sec').addClass('story-vis')
         }else{
           if(str>k+end){$('.sec').addClass('move-main')
         }else{
           $('.sec').removeClass('move-main')
         }
           $('.sec').removeClass('story-vis')
         }


         if(str>thf && str<k+end){
           if ($('.th').hasClass('move-main')){
             $('.th').removeClass('move-main')
           }
           $('.th').addClass('story-vis')
         }else{
           if(str>k+end){$('.th').addClass('move-main')
           }else{
             $('.th').removeClass('move-main')
           }
           $('.th').removeClass('story-vis')
         }


         if (str>4*k && str<4*k+4*end) {
            $('.wmn2').addClass('wmn-vis')
            if ($('.wmn2').hasClass('move-main')){
              $('.wmn2').removeClass('move-main')
            }
         }else{
             if(str>4*k+4*end){$('.wmn').addClass('move-main')
             }else{
               $('.wmn2').removeClass('move-main')
             }
             $('.wmn2').removeClass('wmn-vis')
         }

         if(str>4*k && str<4*k+4*end){
                   if ($('.textth').hasClass('move-main')){
             $('.textth').removeClass('move-main')
           }
           $('.textth').addClass('story-vis')
         }else{
           if(str>4*k+4*end){$('.textth').addClass('move-main')
           }else{
             $('.textth').removeClass('move-main')
           }
           $('.textth').removeClass('story-vis')
         }







         if (str>2*k && str<3*k+end) {
            $('.wmn').addClass('wmn-vis')
            if ($('.wmn').hasClass('move-main')){
              $('.wmn').removeClass('move-main')
            }
         }else{
             if(str>3*k+3*end){$('.wmn').addClass('move-main')
             }else{
               $('.wmn').removeClass('move-main')
             }
             $('.wmn').removeClass('wmn-vis')
         }

            if(str>2*k && str<3*k+end){
              $('.znak').addClass('znak-vis')
              if ($('.znak').hasClass('move-main')){
                $('.znak').removeClass('move-main')
              }
              if(str>3*k && str<3*k+end){
                $('.znak').addClass('znak-sec')
              }
              else{
                $('.znak').removeClass('znak-sec')
              }
            }else{
              if(str>3*k+end){$('.znak').addClass('move-main')
              console.log(str)
              }else{
                $('.znak').removeClass('move-main')
              }
              $('.znak').removeClass('znak-vis')}

            if(str>lif && str<3*k+end){
              $('.lif').addClass('li-vis')
              if ($('.lif').hasClass('move-main')){
                $('.lif').removeClass('move-main')
              }
              if(str>lis && str<3*k+end){
                $('.lif p').addClass('visib')
                setTimeout(function(){
                  $('.lif p').addClass('visib-p')
                },100)
              }else{
                $('.lif p').removeClass('visib-p')
                $('.lif p').removeClass('visib')
              }
            }else{
              if(str>3*k+end){$('.lif').addClass('move-main')
              }else{
                $('.lif').removeClass('move-main')
              }
              $('.lif').removeClass('li-vis')}


            if(str>lis && str<3*k+end){
              $('.lis').addClass('li-vis')
              if ($('.lis').hasClass('move-main')){
                $('.lis').removeClass('move-main')
              }
              if(str>lit && str<3*k+end){
                $('.lis p').addClass('visib')
                setTimeout(function(){
                  $('.lis p').addClass('visib-p')
                },300)
              }else{
                $('.lis p').removeClass('visib-p')
                $('.lis p').removeClass('visib')
              }
            }else{
              if(str>3*k+end){$('.lis').addClass('move-main')
              }else{
                $('.lis').removeClass('move-main')
              }
              $('.lis').removeClass('li-vis')}



            if(str>lis && str<3*k+end){
              $('.lit').addClass('li-vis')
              if ($('.lit').hasClass('move-main')){
                $('.list').removeClass('move-main')
              }
              if(str>lit && str<3*k+end){
                $('.lit p').addClass('visib')
                setTimeout(function(){
                  $('.lit p').addClass('visib-p')
                },300)
              }else{
                $('.lit p').removeClass('visib-p')
                $('.lit p').removeClass('visib')
              }
            }else{
              if(str>3*k+end){$('.lis').addClass('move-main')
              }else{
                $('.lit').removeClass('move-main')
              }
              $('.lit').removeClass('li-vis')}



            if(str>h2 && str<3*k+end){
              $('.h').addClass('h-vis')
              if ($('.h').hasClass('move-main')){
                $('.h').removeClass('move-main')
              }
            }else{
              if(str>3*k+end){$('.h').addClass('move-main')
              }else{
                $('.h').removeClass('move-main')
              }
              $('.h').removeClass('h-vis')}




     });
   }
     $('.video-item').click(function () {
        let ths=$(this).find('.play')
        let vid=$(this).find('.vid')
        if(ths.hasClass('visib')){
          vid.trigger('pause')
          ths.removeClass('visib')
        }else{
          vid.trigger('play')
          ths.addClass('visib')
        }
     });

     $(document).ready(function () {
       $('.faq-text').slideUp()
     });

     $(document).on('click','.panel-btn',function () {

        let ths=$(this).find('.faq-text')
        let a=$(this).find('.panel')
        if (a.hasClass('hide')){
          ths.slideUp()
          a.removeClass('hide')
        }else{
          a.addClass('hide')
          ths.slideDown()
        }



     });



     let num=1;
     let x='.q'+num;
     let y='.an'+num;

     $(document).on('click','.button-supertest',function () {
       $('.visible-test').addClass('visib-p')
       $('.choose-test').addClass('disp-block')
       $(x).addClass('disp-block')
       $(y).addClass('ans-prg')
       console.log(y)
     });

     $(document).on('click','.next-btn',function () {

        $(x).removeClass('disp-block')
        $(y).addClass()
        num++
        x='.q'+num;
        y='.an'+num;
        $(x).addClass('disp-block')
        console.log(y)
        $(y).addClass('ans-prg')
     });


});
