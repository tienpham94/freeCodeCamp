$(document).ready(function() {
    getQuote();
    $("#getQuote").on("click", getQuote);
});

function getQuote() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function(json) {
            var currentQuote = json.quoteText;
            var currentAuthor = json.quoteAuthor;
            $("#quote").html(currentQuote);
            $("#cite").html(currentAuthor);

            $("#tumblr").attr("href", 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' + encodeURIComponent(currentAuthor) + '&content=' + encodeURIComponent(currentQuote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
            $("#twitter").attr("href", 'https://twitter.com/intent/tweet?hashtags=quotes&via=duonghailee&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
        }
    })
}