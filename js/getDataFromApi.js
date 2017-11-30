$(document).ready(function(){
  $('#newQuote').on("click", function(){
    getQuote(); // Function to get the quotes from the andruxnet API when the button is clicked
  });
});
/* Function to get the quotes from the andruxnet API */
function getQuote(){
  $.ajax({
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
    headers: {
      'X-Mashape-Key': 'FeOj1uTMitmshkrZaVyUjRobAfrvp1jYjhKjsnPQz2HfF12AHs'
    },
    method: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    dataType: 'json',
    success: function (data) {
      var quote = data.quote;
      var author = data.author;
      $("#quote").html(quote);
      $("#author").html(author);

      /* to share the quote and author in Twitter */
      $('#tweetIt').click(function() {
        /*var encodedQuote = encodeURIComponent(quote + " ~ " + author);
        var tweetUrl = "https://twitter.com/intent/tweet?text=" + encodedQuote;
        window.open(tweetUrl);*/
        window.open("https://twitter.com/intent/tweet?text=" + quote + " ~ " + author);
        // $(this).attr('href',"https://twitter.com/intent/tweet?text="+quote+" "+author);
     });
      // $("#blockquote").append("<p>" + quote + "</p><br><footer><cite>" + author + "</cite></footer>");
    },
    error: function(err) {
      $("#quote").html("An error has occured. Try later again!");
      $("#author").html("The administrator");
    }
  });
}
