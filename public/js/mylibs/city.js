$(function(){
  $(document).ready(function(){
    $("#show-direct-flights, #hide-direct-flights").click(function(event){
      event.preventDefault();
      $("#direct-flights").toggle();
    });
  });
});