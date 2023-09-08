$(document).ready(function(){
    
    
    // 메인 화면 스크롤 다운 이미지 움직이기
    
    var i = 0;
 
    setInterval(function(){
        i++;
        
        if(i == 3){
            i=0;
        }
        $(".scroll_img_list>li").eq(i).fadeIn(800);
        $(".scroll_img_list>li").eq(i-1).fadeOut(800);
        
    });
 
    
    // home 메뉴에 디폴트 active

    $(".gnb_home").parent("li").addClass("active");
    

    // 모바일, 태블릿일 때 헤더 메뉴 토글
    
    var toggle = $(".menu_moreBtn");
    var gnbview = $("#gnb");
    
    toggle.click(function(){
       toggle.toggleClass("active");
        gnbview.toggleClass("active");
    });

    
    // 모바일, 태블릿에서 PC로 사이트 크기 넓어질 때 햄버거 메뉴와 헤더 메뉴 active 없애기
    
    
    $(window).resize(function(){
        if($(window).width() > 914){
            toggle.removeClass("active");
            gnbview.removeClass("active");
        }
    })
    
    
    // 헤더 메뉴 리스트 클릭 시 해당 섹션으로 이동
    
    $(".gnb_home").click(function(){
        $("html, body").animate({
           'scrollTop': 0
        }, 650);
        $(this).parent("li").addClass("active");
    });
    
    $(".gnb_profile").click(function(){
        $("html, body").animate({
           'scrollTop': $('.profile').offset().top - 100
        }, 650);
         $(this).parent("li").addClass("active");
    });
    
    $(".gnb_portfolio").click(function(){
        $("html, body").animate({
           'scrollTop': $('.portfolio').offset().top + 30 
        }, 650);
         $(this).parent("li").addClass("active");
    });
    
    $(".gnb_contact").click(function(){
        $("html, body").animate({
           'scrollTop': $('.contact').offset().top + 30
        }, 650);
         $(this).parent("li").addClass("active");
    })
    
    
    // 각 섹션 위치에 있을 때 해당하는 헤더 메뉴 active 활성화
    
    $(window).scroll(function(){
        var scltop = $(window).scrollTop();
        
        if($(".home").offset().top <= scltop) {
            $("#gnb>li").removeClass('active');
            $(".gnb_home").parent().addClass('active');
        }
        
        if($(".profile").offset().top <= scltop + 101) {
            $("#gnb>li").removeClass('active');
            $(".gnb_profile").parent().addClass('active');
        }
        
        if($(".portfolio").offset().top <= scltop) {
            $("#gnb>li").removeClass('active');
            $(".gnb_portfolio").parent().addClass('active');
        }
        
        if($(".contact").offset().top <= scltop) {
            $("#gnb>li").removeClass('active');
            $(".gnb_contact").parent().addClass('active');
        }        
    });
    
 
    // profile capa 이미지에 마우스오버 시 이미지 변경 및 상세 설명 보이기
    
    
    $(".langauge_list>li").eq(0).hover(function(){
        $(this).children("img").attr("src", $(this).children("img").attr("src").replace("icon_html.png","icon_html_hover.png"));
    }, function(){
        $(this).children("img").attr("src", $(this).children("img").attr("src").replace("icon_html_hover.png","icon_html.png"));
    });
    
    $(".langauge_list>li").eq(1).hover(function(){
        $(this).children("img").attr("src", $(this).children("img").attr("src").replace("icon_css.png","icon_css_hover.png"));
    }, function(){
        $(this).children("img").attr("src", $(this).children("img").attr("src").replace("icon_css_hover.png","icon_css.png"));
    });
    
    $(".langauge_list>li").eq(2).hover(function(){
        $(this).children("img").attr("src", $(this).children("img").attr("src").replace("icon_js.png","icon_js_hover.png"));
    }, function(){
        $(this).children("img").attr("src", $(this).children("img").attr("src").replace("icon_js_hover.png","icon_js.png"));
    });
    
    $(".langauge_list>li").eq(3).hover(function(){
        $(this).children("img").attr("src", $(this).children("img").attr("src").replace("icon_jquery.png","icon_jquery_hover.png"));
    }, function(){
        $(this).children("img").attr("src", $(this).children("img").attr("src").replace("icon_jquery_hover.png","icon_jquery.png"));
    });
    
    $(".tool_list>li").eq(0).hover(function(){
        $(this).children("img").attr("src", $(this).children("img").attr("src").replace("icon_ps.png","icon_ps_hover.png"));
    }, function(){
        $(this).children("img").attr("src", $(this).children("img").attr("src").replace("icon_ps_hover.png","icon_ps.png"));
    });
    
    $(".tool_list>li").eq(1).hover(function(){
        $(this).children("img").attr("src", $(this).children("img").attr("src").replace("icon_ai.png","icon_ai_hover.png"));
    }, function(){
        $(this).children("img").attr("src", $(this).children("img").attr("src").replace("icon_ai_hover.png","icon_ai.png"));
    });
    
    $(".tool_list>li").eq(2).hover(function(){
        $(this).children("img").attr("src", $(this).children("img").attr("src").replace("icon_figma.png","icon_figma_hover.png"));
    }, function(){
        $(this).children("img").attr("src", $(this).children("img").attr("src").replace("icon_figma_hover.png","icon_figma.png"));
    });
    
    
    
    
    // 포트폴리오 아이템 마우스 오버 시 VIEW 버튼 나타남
    
    $(".portfolio_listBtn").hover(function(){
        
        $(this).children(".p_listBtn").addClass("hover");
        
    }, function(){
        
        $(this).children(".p_listBtn").removeClass("hover");
                                  });
    
    
    
    // 포트폴리오 아이템 클릭 시 디테일 창 오픈
    
    $(".listBtn1").click(function(){
       $(this).parents(".portfolio_listBtn").siblings(".portfolio_detail").addClass("active"); 
        $("html, body").addClass("scrollnot");
    });
    
    $(".close_btn").click(function(){
       $(".portfolio_detail").removeClass("active");
        $("html, body").removeClass("scrollnot");
    });
    
//    $(".portfolio_detail").click(function(){
//        $(".portfolio_detail").removeClass("active"); 
//        $("html, body").removeClass("scrollnot");
//    });
    
    
    // 포트폴리오 URL 클릭 시 새 창에서 링크 열림
    $(".p_thehyuil .listBtn2").click(function(){
        window.open("https://thehyuil.co.kr/", "_blank"); 
     });

    $(".p_moongae .listBtn2").click(function(){
       window.open("http://neomiseo0.dothome.co.kr/portfolio_detail/p_moongae/", "_blank"); 
    });
    
    $(".p_avatar .listBtn2").click(function(){
       window.open("http://neomiseo0.dothome.co.kr/portfolio_detail/p_avatar", "_blank"); 
    });
    
    $(".p_yellows .listBtn2").click(function(){
       window.open("http://neomiseo0.dothome.co.kr/portfolio_detail/p_yellows", "_blank"); 
    });
    
    $(".p_yeirang .listBtn2").click(function(){
       window.open("http://neomiseo0.dothome.co.kr/portfolio_detail/p_yeirang", "_blank"); 
    });
    
    $(".p_pintjob .listBtn2").click(function(){
       window.open("http://neomiseo0.dothome.co.kr/portfolio_detail/p_pintjob/", "_blank"); 
    });
    
    $(".p_kia .listBtn2").click(function(){
       window.open("https://www.figma.com/proto/yP7EWDp6eH2ylSTE6cAKl0/%EC%96%B4%ED%94%8C%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%A4%EC%8A%B5_%EA%B8%B0%EC%95%84%EC%BB%A4%EB%84%A5%ED%8A%B8?page-id=0%3A1&node-id=1%3A3&viewport=751%2C426%2C0.54&scaling=scale-down&starting-point-node-id=1%3A3", "_blank"); 
    });

    $(".p_refolk .listBtn2").click(function(){
        window.open("http://www.yes24.com/24/Category/Series/001?SeriesNumber=292278", "_blank"); 
    });

    $(".p_lprecipe .listBtn2").click(function(){
        window.open("https://link.tumblbug.com/LYqxHMFKazb", "_blank"); 
    });
   
});