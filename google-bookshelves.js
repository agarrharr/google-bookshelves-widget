var googleBookshelves = (function() {
  var idNumber;
  var shelf;
  var container;
  var limit;
  var random;
  var pageCurl;
  var imageSize;

  var showShelf = function(options) {
    initialize(options);
    $(container).html(shelf);
  };

  var initialize = function(options) {
    idNumber = options.idNumber || "113720634485746776434";
    shelf = options.shelf || "Reading Now";
    container = options.container || "#readingNow";
    limit = options.limit || 10;
    random = (typeof options.random !== 'undefined')? options.random: false;
    pageCurl = (typeof options.pageCurl !== 'undefined')? options.pageCurl: false;
    imageSize = options.imageSize || "thumb";
  };

  var public = {
    showShelf: showShelf
  };

  public._private = {
    initialize: initialize
  };

  return public;
}());
