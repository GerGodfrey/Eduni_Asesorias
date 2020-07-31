/**BARRA DE NAVEGACION */

let navbar =$(".navbar");
let navl =$(".nav-link");
let navi =$(".nav-item");


$(window).scroll(function(){
    let oTop = $(".section-2").offset().top - window.innerHeight;

    if($(window).scrollTop() > oTop){
        navbar.addClass("sticky");
        navl.removeClass("nav-link");
        navi.addClass("nav-item");
    }else{
        navbar.removeClass("sticky");
        navl.addClass("nav-link");
        navi.removeClass("nav-item");
    }
})


//PARA QUE NO SE PAUSE EL COROUSEL CUANDO EL MOUSE ESTE ARRIBA
$('.carousel').carousel({
    pause: "false"
});

$(document).ready(function() {

  let oTop = $(".skw-pages").offset().top;

    var curPage = 1;
    var numOfPages = $(".skw-page").length;
    var animTime = 1000;
    var scrolling = false;
    var pgPrefix = ".skw-page-";
  
    function pagination() {
      scrolling = true;
  
      $(pgPrefix + curPage).removeClass("inactive").addClass("active");
      $(pgPrefix + (curPage - 1)).addClass("inactive");
      $(pgPrefix + (curPage + 1)).removeClass("active");
  
      setTimeout(function() {
        scrolling = false;
      }, animTime);
    };
  
    function navigateUp() {
      if (curPage === 1) return;
      curPage--;
      pagination();
    };
  
    function navigateDown() {
      if (curPage === numOfPages) return;
      curPage++;
      pagination();
    };
  
    /**$(document).on("mousewheel DOMMouseScroll", function(e) {
      if (scrolling) return;
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        navigateUp();
      } else { 
        navigateDown();
      }
    });**/
  
    $(document).on("keydown", function(e) {
      if (scrolling) return;
      if (e.which === 38) {
        navigateUp();
      } else if (e.which === 40) {
        navigateDown();
      }
    });
    $("#der").click(function(e){
    navigateDown();
});
    
    $("#izq").click(function(e){
    navigateUp();
});
  
});

// Función para desplegar y ocultar las biografias de los integrantes
$(".dispBio").bind("click", function(e) {
  e.preventDefault();
  var ref = $(this).attr("href");
  var disp = $(ref).css("display");
  $("#p1").css("display","none");
  $("#p2").css("display","none");
  $("#p3").css("display","none");
  $("#p4").css("display","none");
  $("#p5").css("display","none");
  $("#p6").css("display","none");
  $("#p7").css("display","none");
  if(disp == "inline"){
    $(ref).css("display","none");
  }else{
    $(ref).css("display","inline");
  }
  
  
});
