//Mean Menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function(){
    
    //STICKY  MENU
    $('.js--services-section').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass("sticky");
            $('.back-to-top').show();
        }
        else{
            $('nav').removeClass("sticky");
            $('.back-to-top').hide();
        }
    });
    
    $("nav ul li a").click(function () {
            $("nav ul li a").removeClass("active"), $(this).addClass("active");
    }),
    $("nav a img.logo").click(function () {
        $("nav ul li a").removeClass("active"), $("nav ul li:first-child a").addClass("active");
    });
    
    // MIZITUP (PORTFOLIO)
    var mixer = mixitup('.portfolio-container');
});



