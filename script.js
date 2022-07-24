let mostPopularPhotos = ["https://static01.nyt.com/images/2021/05/17/dining/kc-korean-bulgogi-burger/kc-korean-bulgogi-burger-mobileMasterAt3x.jpg", "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg", "https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/beaches-near-nyc-cover.jpg", ];

let photos = [];
$(".submit").click(function() {
    let link = $("input").val();
    photos.push(link);
    $(".posts").empty();
    for (let photo of photos) {
        $(".posts").append("<img src=" + photo + ">");
    }
    if (photos.length === 3) {
        $(".message").text("Congrats, you are a Silver Level user!");
    } else if (photos.length === 5) {
        $(".message").text("Congrats, you are a Gold Level user!");
    } else if (photos.length >= 5) {
        $(".message").text("Congrats, you are a Platinum Level user!");
    }
});
        $(".liked-photo").append("<img src=" + mostPopularPhotos[0] + ">");

$(".go").click(function() {
    let comment = $(".comments").val();
    $(".comment-section").append("<p>" + comment + "</p>");
    console.log(comment);
});