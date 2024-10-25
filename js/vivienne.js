$(function(){
  //풀스크린
  var count = 0;
  var ht = $(window).height();
  
  $(".dot li").click(function(e){
    e.preventDefault();
    ht = $(window).height();
    var i = $(this).index();
    count = i;
    var nowTop = count*ht;
    activation();

    
    $("html,body").stop().animate({"scrollTop":nowTop},800);
  });
  
  function activation(){
    $(".dot > li").removeClass("on").eq(count).addClass("on");
  }
  $(".dot > li:first").trigger("click")

  
  var secMax = $("section").length;
  $("#contain").on("wheel",function(e){
    ht = $(window).height();
    if($("html,body").is(":animated")){return false;}
    e.preventDefault();
    var delta = e.originalEvent.deltaY;
    if(delta < 1 && count >= 1){
      count--;
      $("html,body").animate({"scrollTop":ht*count},800);
    }else if(delta > 1 && count < secMax-1){
      count++;
      $("html,body").animate({"scrollTop":ht*count},800);
    }
    activation();
  });

  //////////////////////////////////////////////////////////////

  // 사이드메뉴바
  $(".toggle").click(function(){//메뉴버튼 클릭시
    $(".sidebar").toggleClass("active");
  });

  ///////////////////////////////////////////////////////////


  // 사이드메뉴바 아코디언
  $("#main .title, #header .title").click(function(){

    if($(this).next().css("display") == "none"){
      $(".sub").slideUp();
    }
    
    $(this).next().slideToggle();
  });

  /////////////////////////////////////////////////////////

  // about페이지 아코디언
  $(".story_t").click(function(){

    if($(this).next().css("display") == "none"){
      $(".story_c").slideUp();
    }
    
    $(this).next().slideToggle();
  })

  /////////////////////////////////////////////////////////

  //slick-slide
$("#products .imgGroup").slick({ 
  infinite: true , /* 맨끝이미지에서 끝나지 않고 다시 맨앞으로 이동 */
  slidesToShow: 3, /* 화면에 보여질 이미지 갯수*/
 slidesToScroll: 3,  /*  스크롤시 이동할 이미지 갯수 */
  autoplay: true, /* 자동으로 다음이미지 보여주기 */
  arrows: false, /* 화살표  */
  dots:true, /*  아래점  */
  autoplaySpeed:5000,/* 다음이미지로 넘어갈 시간 */
  speed:1500 , /* 다음이미지로 넘겨질때 걸리는 시간 */
  pauseOnHover:true, /*  마우스 호버시 슬라이드 이동 멈춤 */
 //vertical:true,/*  세로방향으로 슬라이드를 원하면 추가하기// 기본값 가로방향 슬라이드*/
 responsive: [
    { /* 반응형웹*/
      breakpoint: 600, /*  기준화면사이즈 */
      settings: {slidesToShow:2 } /*  사이즈에 적용될 설정 */
    },
    { /* 반응형웹*/
      breakpoint: 400, /*  기준화면사이즈 */
      settings: {slidesToShow:2 } /*  사이즈에 적용될 설정 */
    }
  ]
});

////////////////////////////////////////////////////////////////////////////
  
});//document.ready