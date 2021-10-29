function clickFunction() {
    var para = document.getElementByClass("toggle-icon");
    para.classList.toggle("rotate-icon");
}



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

