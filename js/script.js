$(document).ready(function(){

    $('.main-menu li').mouseenter(function(){

        let result = $(this).attr('data-tab');
        $('.sub-menu').removeClass('active');
        $(`#${result}`).addClass('active');
       

       $('.sub-menu-box').addClass('active');
    });

    $('.sub-menu-box').mouseleave(function(){
        $(this).removeClass('active');
    });

    var swiper = new Swiper(".banner-img", {
        loop: true,
        autoplay:{
            delay: 2800,
        }
    });
 

var swiper = new Swiper(".item", {
   
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        1000:{
            slidesPerView: 4,
            spaceBetween: 20,
        },
        900:{
            slidesPerView: 3,
            spaceBetween: 20,
        },
        800:{
            spaceBetween: 20,
            slidesPerView: 2,
        }
    }
      
  });


//   스크롤스케일 백그라운드 이미지
$(window).scroll(function(){
    const scrollY = $(window).scrollTop();
    const bgScale = 200 + (scrollY);

    $('.sec-4 .container .story-img').css({
        backgroundSize : bgScale
    });
});

//물방울 효과
$('.sec-3 .container .water-effect').ripples({
    resolution: 512, // 해상도 설정
    dropRadius: 20,  // 물방울 반지름 설정
    perturbance: 0.04, // 물결의 굴곡 설정
});
$(document).on('mousemove', function (e) {
    // 마우스 움직일때 처리하기
    var x = e.pageX;
    var y = e.pageY;
    $('.water-effect').ripples('drop', x, y, 10, 0.2);
});

    $('#hamburger').click(function(){
        $(this).toggleClass('hamburger');
        $('.main-menu').toggleClass('active');
    });
});


