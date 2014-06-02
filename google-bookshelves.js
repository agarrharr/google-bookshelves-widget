var googleBookshelves = (function() {
  var showShelf = function(options) {
    options.idNumber = options.idNumber || "113720634485746776434";
    options.shelf = options.shelf || "Reading Now";
    options.container = options.container || "#readingNow";
    options.limit = options.limit || 10;
    options.random = (typeof options.random !== 'undefined')? options.random: false;
    options.pageCurl = (typeof options.pageCurl !== 'undefined')? options.pageCurl: false;
    options.imageSize = options.imageSize || "thumb";

    return options;
  };

  return {
    showShelf: showShelf
  };
}());
