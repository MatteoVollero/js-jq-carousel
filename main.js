$(document).ready(function(){

  $(".next").click(
    function(){
      var currentImg = $(".active");
      currentImg.removeClass("active");

      if(currentImg.hasClass("last") == true){
        var nextImg = $(".first");
        console.log("ultima foto");
      }else{
        var nextImg = currentImg.next();
      }
      nextImg.addClass("active");
    });

    $(".prev").click(
      function(){
        var currentImg = $(".active");
        currentImg.removeClass("active");

        if(currentImg.hasClass("first") == true){
          var prevImg = $(".last");
        }else{
          var prevImg = currentImg.prev();
        }
        prevImg.addClass("active")
      });

});
