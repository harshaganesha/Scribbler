$("#SaveButton").hide();
$("#FullPostEdit").hide();

$(document).click("#EditButton", function(){
    $("#SaveButton").show();
    $("#EditButton").hide();

    $("#FullPostEdit").show();
    $("#FullPost").hide();
    $("#FullPostEdit").append($('#FullPost').text());
    
});

$(document).click("#like", function(){
    var value = $(".likeCount .count");
    var count = parseInt($(".likeCount .count").text(), 10);
    count = count + 1;
    value.innerHTML = count;
})

$(document).click("#CommentButtonId", function(){
    comment = $('#EnterCommentId').innerHTML;
    //var commentText = "<p>"+ comment + "</p>"
    console.log("Test");
    $( "#AllCommentstext" ).append("<p>"+ comment + "</p>" );

})
