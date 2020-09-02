$(document).ready(function(){

  $(".next").click(
    function(){
      next();
    });

    $(".prev").click(
      function(){
        prev();
      });

    function next(){
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
    };

    function prev(){
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
    }

    $(document).keypress(
      function(){
        switch(event.which){
          case 115:
                prev();
                break;
          case 100:
                next();
                break;
          default:
                alert("Pulasante non codificato");
                break;
        };
      });
});
