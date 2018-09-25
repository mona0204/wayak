
$(document).ready(function(){
    
   
    //nice scroll
        $("body").niceScroll({
    cursorcolor:'#8dc63f',
    cursorborder:'none',
    });

	
  
    //nav bar active
    $('.nav-item').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    //limit of string 
var longText = $('.longText');
         var dots=" ...";
         longText.text(longText.text().substr(0,230)+ dots);

    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
        autoplay:true,
        autoplayHoverPause:true,
        animateOut:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
});
//        change text modal

    function vi2(o) {
               

                var title1 = $(o).attr("title1");
                    $('#exampleModalCenterTitle').text(title1);
        var text = $(o).attr("text");
                    $('#modal-text').text(text);
}

//waw
     new WOW().init();
