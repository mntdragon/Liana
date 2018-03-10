$(document).ready(function () {
    var feed_url = "https://www.lianatech.com/news/all-news.rss";
    var arr = [];
    var classActive = '';
    var classFollowed = '';
    var openDate='<div class="col-md-4"><div class="card"><div class="card-block p-t-2"><p class="small text-wide p-b-2">';
    var closeDate= '</p>';
    var openTitle='<p><a href="#">';
    var closeTitle='</a></p></div></div></div>';

    function getActive(arr){
        for(var i = 0; i < 3; i ++){
            classActive += openDate + arr[i].date +
            closeDate + openTitle +arr[i].title+ closeTitle;
        }
        $('.activated').append(classActive);
    }
    function getFollowed(arr){
        for(var i = 3; i < 5; i ++){
            classFollowed += openDate + arr[i].date +
            closeDate + openTitle +arr[i].title+ closeTitle;
        }
        classFollowed += openDate + arr[i].date +
            closeDate + openTitle +arr[i].title+ closeTitle;
        $('.followed').append(classFollowed);
    }
    function showFeed(arr){
        getActive(arr);
        getFollowed(arr);
    }
        
       

    $.ajax({
        type: "GET",
        url: "https://api.rss2json.com/v1/api.json?rss_url=" +
            feed_url,
        dataType: "json",
        success: function (data) {
            console.log(data);
            x = data.items;

            $.each(x, function () {
                arr.push({
                    title: this.title,
                    date: this.pubDate});
            });
            showFeed(arr);
        }
    });


});