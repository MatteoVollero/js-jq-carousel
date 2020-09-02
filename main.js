$(document).ready(function(){

  $(".next").click(
    function(){
      //prende la classe active presente sia nell'immagine che nei pallini
      var currentImg = $(".active");
      //Rimuove la classe active che gli da visibiltà
      currentImg.removeClass("active");

      //Controlla che non si trovi all'ultima immagine e nel caso torna alla prima
      if(currentImg.hasClass("last") == true){
        var nextImg = $(".first");
        console.log("ultima foto");
      }else{
        //Passa all'immagine successiva
        var nextImg = currentImg.next();
      }
      //Aggiunge la classe active
      nextImg.addClass("active");
    });

    $(".prev").click(
      function(){
        var currentImg = $(".active");
        currentImg.removeClass("active");

        //Controlla che non si trovi alla prima immagine e nel caso torna all'ultima
        if(currentImg.hasClass("first") == true){
          var prevImg = $(".last");
        }else{
          //Passa all'immagine precedente
          var prevImg = currentImg.prev();
        }
        //Aggiunge la classe active
        prevImg.addClass("active")
      });

});
