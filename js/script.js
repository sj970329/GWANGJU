
window.addEventListener('resize', slideFont);
var st = document.querySelector(".slideTitle span");
var ww = window.innerWidth; //현재 창 크기
var fontSize;

function slideFont(){
    var newFont = 1.1 * (window.innerWidth/ww)
    st.style.fontSize = newFont + "rem";
}



var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#fullscreen').toggleClass('open');
});

$('.sgnb>li').click(
    function(){
        $('.gnb').hide();
        $(this).children('.gnb').show();
    }
);

$(".gnb li").click(
    function(){
        var $sub = $(this).children(".sub").hasClass("on");
    
        if($sub){
            $(this).children(".sub").stop().slideUp();
            $(this).children(".sub").removeClass("on");
        }else{
            $(this).children(".sub").stop().slideDown();
            $(this).children(".sub").addClass("on");
            $(this).siblings().children(".sub").stop().slideUp();
            $(this).siblings().children(".sub").removeClass("on");
        }
    }
);

