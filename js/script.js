
window.addEventListener('resize', slideFont);
var st = document.querySelector(".slideTitle span");
var ww = window.innerWidth;
var fontSize;

function slideFont(){
    var newFont = 1.1 * (window.innerWidth/ww)
    st.style.fontSize = newFont + "rem";
}


// swiper
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


// notice
jQuery(function($)
{
    var ticker = function()
    {
        timer = setTimeout(function(){
            $('.rolling li:first').animate( {marginTop: '-50px'}, 900, function()
            {
                $(this).detach().appendTo('ul.rolling').removeAttr('style');
            });
            ticker();
        }, 2000);         
      };

      $(document).on('click','.prev',function()
      {
            $('.rolling li:last').hide().prependTo($('.rolling')).slideDown();
            clearTimeout(timer);
            ticker();
      }); 
  
      $(document).on('click','.next',function()
      {
            $('.rolling li:first').animate( {marginTop: '-50px'}, 400, function()
                    {
                        $(this).detach().appendTo('ul.rolling').removeAttr('style');
                    });
            clearTimeout(timer);
            ticker();
        }); 
    

    var tickerover = function()
    {
        $('.rolling').mouseover(function(){
            clearTimeout(timer);
        });
        $('.rolling').mouseout(function(){
            ticker();
        });  
    };
    tickerover();

        ticker();
    
});


// bxSlider
$(document).ready(function(){
	var slider_02 =	$('.bxslider_02').bxSlider({
			auto: true,controls:false,pagerCustom: '#bx-pager1'
	});
		$(document).on('click','.bx-next, .bx-prev',function() {
		slider_02.stopAuto();
		slider_02.startAuto();
		});
		$(document).on('mouseover','.bx-pager, #bx-pager1',function() {
		slider_02.stopAuto();
		slider_02.startAuto();
	});	
});


// nowSlider
$(document).ready(function(){
	var slider_03 =	$('.bxslider_03').bxSlider({
			auto: true, mode:'fade',
	});
});