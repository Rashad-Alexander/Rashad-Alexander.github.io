$(function(){
        $('#menu2').slicknav({
            label : " ",
            duplicate : false
        });
    });

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});

$(document).ready(function() {
 
  $("#owl-demo_1").owlCarousel({
    autoPlay: 3000,
    items : 4,
    lazyLoad : true,
    navigation : true
  }); 
 
});