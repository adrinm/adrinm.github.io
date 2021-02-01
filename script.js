function start(){

   // $("body").css ("background-color","pink");

}

$(window).on("load", start);

function loadpage(e){

    e.preventDefault();
    $("#menu a.active").removeClass("active");
    $(this).addClass("active");

    var href = $(this).attr("href");
    $("#content").load(href);
}

$(document).on("click", "#menu a", loadpage);



