function getQuote() {
  api = "https://favqs.com/api/qotd";
  lang = "en";
  var quoteId = 42;
  var url = api;
  console.log("test");
  $.getJSON({
    url: url, success: function(result){
      $("#quote").text(result.quote.body);
    }
  });
}

getQuote();