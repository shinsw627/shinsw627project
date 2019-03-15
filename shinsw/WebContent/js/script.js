function selMenu(m1,m2,m3) {
	$('#topmenu .'+m1).addClass('on');
	$('#topmenu .'+m1+' > a').addClass('sel');
	$('#topmenu .'+m1+' > ul').show();
	$('.'+m2+' > a').addClass('sel');
	$('#'+m1).show();
	$('.'+m2).addClass('on');
	$('.'+m3).addClass('on').parent().show().find('.'+m3).find('a:first').addClass('sel');
}
$(document).ready(function(){

	$('#lnb ul li a').each(function(){
		if($(this).hasClass('sel') == true) {
			$(this).parent().addClass('on');
		}
	})
	$('#lnb > div > ul > li').hover(
		function(){
			if($(this).find('>a:first').hasClass('sel') == false){
				$(this).css({'top':0,'margin-bottom':0});
			}			
		},
		function(){
			if($(this).find('>a:first').hasClass('sel') == false){
				$(this).css({'top':0,'margin-bottom':0});
			}
		}
	);

	$('#topmenu').bind({
			mouseenter : function(){
				var activeLi = $(this).find('ul>li[class~="on"]:first');
				var $linkBtn = $('#topmenu>ul>li>a');
				$linkBtn.mouseenter(function(){

						var $this = $(this).parent('li');
						$('#topmenu>ul>li>ul').hide().css('opacity',0);
						$this.find('ul').stop().show().animate({'opacity':1},'slow')

				})
				$('#topmenu>ul').mouseleave(function(){
					$('#topmenu>ul>li>a').removeClass('sel');
					$('#topmenu>ul>li>ul').hide().css('opacity',0);
					activeLi.addClass('on').find('a:first').addClass('sel').next('ul').stop().show().animate({'opacity':1},'slow')
				})
				
			}
		});

})


//상단메뉴

$(function() {
    gnb_init();
});

function gnb_init() {
    if($("#gnb").size() == 0) return;
    $("#gnb").removeClass("gnb_nojs");
    var gnb_menu = $("#gnb .menu");
    var gnb_submenu = $("#gnb .sub_menu");
	 var gnb_submenu_ul = $("#gnb .sub_menu ul");
    var gnb_bg = $("#gnb").next(".gnb_bg");
    var gnb_interval = null;
    
    function gnb_show() {
        clearTimeout(gnb_interval);
        gnb_submenu.fadeIn( 200 );
		gnb_submenu_ul.fadeIn( 200 );
        gnb_bg.fadeIn( 200 );
    }
    function gnb_hide() {
        clearTimeout(gnb_interval);
        gnb_interval = setTimeout(function() {
            gnb_submenu.fadeOut( 200 );
			gnb_submenu_ul.fadeOut( 200 );
            gnb_bg.fadeOut( 200 );
        },100);
    }
    function gnb_over(type,target) {
        var get_menu = $(target).closest(".menu");
        if(type) {
            get_menu.children("a").children("img").attr("src",function() { return this.src.replace("_on","").replace(".gif","_on.gif"); });
            get_menu.children(".sub_menu").addClass("on");
        }
        else {
            get_menu.children("a").children("img").attr("src",function() { return this.src.replace("_on",""); });
            get_menu.children(".sub_menu").removeClass("on");
        }
    }
    
    $("#gnb").hover(
        function() { gnb_show(); },
        function() { gnb_hide(); }
    ).children(".menu").hover(
        function() { gnb_over(true,this); },
        function() { gnb_over(false,this); }
    )
    //gnb 포커스 이벤트
    .on("focusin",function() {
        gnb_over(true,this);
    }).on("focusout",function() {
        gnb_over(false,this);
    });
    $("#gnb").on("focusin",function() {
        gnb_show();
    }).on("focusout",function() {
        gnb_hide();
    });
    gnb_bg.hover(
        function() { clearTimeout(gnb_interval); },
        function() { gnb_hide(); }
    );
}