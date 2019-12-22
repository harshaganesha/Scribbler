

    document.getElementById("expand").onclick = function () {
        window.location.href = '\post.html';
    };
    document.getElementById("expand1").onclick = function () {
        window.location.href = '\post.html';
    };
    document.getElementById("expand2").onclick = function () {
        window.location.href = '\post.html';
    };
    document.getElementById("expand3").onclick = function () {
        window.location.href = '\post.html';
    };
    document.getElementById("expand4").onclick = function () {
        window.location.href = '\post.html';
    };


// function deletePost() {
//     event.stopPropagation();
//     var par = document.querySelector(".fa-trash").closest(".col-6");
//     par.remove();
// };


$(".fa-trash").click(function(){
    $(this).addClass("clicked");
    console.log("clicked");
});
$(".yesButton").click(function(){
    $(".clicked").parents(".col-6").remove();
    console.log("removed");
})