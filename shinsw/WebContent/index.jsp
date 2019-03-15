<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Home</title>
<script>
// 자바스크립트에서 사용하는 전역변수 선언
var g5_url       = "http://www.soj.kr";
var g5_bbs_url   = "http://www.soj.kr/bbs";
var g5_is_member = "";
var g5_is_admin  = "";
var g5_is_mobile = "";
var g5_bo_table  = "";
var g5_sca       = "";
var g5_editor    = "";
var g5_cookie_domain = ".soj.kr";
</script>
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/jquery.menu.js"></script>
<script src="js/common.js"></script>
<script src="js/wrest.js"></script>

<link rel="stylesheet" href="css/font-awesome.min.css">
<link rel="stylesheet" href="css/swiper.min.css">
<link rel="stylesheet" href="jquery.bxslider.css">

<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/swiper.min.css">
<link rel="stylesheet" href="css/main.css">

<script type="text/javascript" src="js/script.js"></script>
<script type="text/javascript" src="js/jquery.bxslider.min.js"></script>
</head>
<body>
<div style="z-index:10;width:100%; height:530px; overflow:hidden; border-top:3px solid #019CB1; border-bottom:1px solid #EDEDED;">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" style="background:url(image/beach-84533_1920.jpg) 50% 50%; width:100%; height:530px;  repeat:no-repeat;"></div>
                <div class="swiper-slide" style="background:url(image/maldives-1993704.jpg) 50% 50%; width:100%; height:530px; overflow:hidden;"></div>
                <div class="swiper-slide" style="background:url(http://www.soj.kr/theme/basic/img/main03.jpg) 50% 50%; width:100%; height:530px; overflow:hidden;"></div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        <script src="http://www.soj.kr/theme/basic/js/swiper.min.js"></script>
        <script>
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            paginationClickable: true,
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: 5000,
            speed: 2000,
            autoplayDisableOnInteraction: false
        });
        </script>
    </div>



       
</body>
</html>