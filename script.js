function start(){

   // $("body").css ("background-color","pink");

}

$(window).on("load", start);

function loadpage(e){

    e.preventDefault();
    $("#menu a.active").removeClass("active");
    $(this).addClass("active");

    $("#content").load("about.html")
}

$(document).on("click", "#menu a", loadpage);



