
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
	// var slider = $('.bxslider').bxSlider({
	// 		auto: true, mode:'fade',
	// 	});
	// var slider_01 =	$('.bxslider_01').bxSlider({
	// 		auto: true,autoControls: true, mode:'vertical',
	// 	});
	var slider_02 =	$('.bxslider_02').bxSlider({
			auto: true,controls:false,pagerCustom: '#bx-pager1'
		});
	// var slider_03 =	$('.bxslider_03').bxSlider({
	// 		auto: true,controls:false,pager:false,maxSlides: 3,moveSlides:1,  slideWidth: 100,slideMargin:0,autoHover:true,
	// 	});
		// 클릭시 멈춤 현상 해결 //
		$(document).on('click','.bx-next, .bx-prev',function() {
		slider_02.stopAuto();
		slider_02.startAuto();
		});
		$(document).on('mouseover','.bx-pager, #bx-pager1',function() {
		slider_02.stopAuto();
		slider_02.startAuto();
		});	
});


// btSlider

var imgWidth = document.querySelector(".btSlider img").width;
		var gallMove = document.querySelector(".btSlider ul");
		var gallZone = document.querySelector(".btSlider");
		var arrow = document.querySelectorAll(".arrow");

		window.addEventListener('load',start);
		gallZone.addEventListener('mouseover',stop);
		gallZone.addEventListener('mouseout',start);

		var interval;
		var aniStartPoint;
		var aniEndPoint;
		var count = 0;
		var slideon = "on";

		function start(){
			interval = setInterval(go, 5000);
			arrow[0].style.opacity = "0";
			arrow[1].style.opacity = "0";
		}

		function go(){
			if(slideon == "on"){

				slideon = "off";

				if(count == 2) count = 0;

				aniStartPoint = -imgWidth * count;
				count++;
				aniEndPoint = -imgWidth * count;

				goAni();
			}
		}

		function left(){
			if(slideon == "on"){

				slideon = "off";

				if(count == 0) count = 2;

				aniStartPoint = -imgWidth * count;
				count--;
				aniEndPoint = -imgWidth * count;

				goAni();
			}
		}

		function goAni(){
			var ani = gallMove.animate([
				{
					transform:"translateX(" + aniStartPoint + "px)"
				},{
					transform:"translateX(" + aniEndPoint + "px)"
				}
			],1000);

			ani.addEventListener('finish',function(){
				gallMove.style.transform = "translateX(" + aniEndPoint + "px)";
				slideon = "on";
			});
		}

		function stop(){
			clearInterval(interval);
			arrow[0].style.opacity = "0.3";
			arrow[1].style.opacity = "0.3";
		}