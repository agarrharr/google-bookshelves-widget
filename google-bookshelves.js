var googleBookshelves = (function() {
  var idNumber;
  var shelfNumber;
  var container;
  var limit;
  var random;
  var pageCurl;
  var imageSize;

  var showShelf = function(options) {
    initialize(options);
    getBooks();
    $(container).html(shelfNumber);
  };

  var initialize = function(options) {
    idNumber = options.idNumber || "113720634485746776434";
    shelfNumber = options.shelfNumber || "Reading Now";
    container = options.container || "#readingNow";
    limit = options.limit || 10;
    random = (typeof options.random !== 'undefined')? options.random: false;
    pageCurl = (typeof options.pageCurl !== 'undefined')? options.pageCurl: false;
    imageSize = options.imageSize || "thumb";
  };

  var getBooks = function() {
    $.ajax({
      url: getUrl()
    })
      .done(function(data) {
        console.log(data);
      });
  };

  var getUrl = function() {
    return "https://www.googleapis.com/books/v1/users/" + idNumber + "/bookshelves/" + shelfNumber + "/volumes";
  };

  var public = {
    showShelf: showShelf
  };

  public._private = {
    initialize: initialize,
    getBooks: getBooks,
    getUrl: getUrl
  };

  return public;
}());
