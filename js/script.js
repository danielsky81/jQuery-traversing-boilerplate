//waits until page is ready
$(document).ready(function() {
 
    $(".card_image").click(function() {
        $(this).next().children("p").slideToggle("fast");
    });        
        
    $(".card").click(function() {
        $(this).toggleClass("card_bkg");
    });
        
    $("#select_btn").click(function() {
        $(".card").not(".card_bkg").hide();
    });
    
    $("#all_btn").click(function() {
        $(".card").css("display", "inline-block");
    });



}); 
