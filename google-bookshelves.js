var googleBookshelves = (function() {
  var idNumber;
  var shelfNumber;
  var container;
  var limit;
  var pageCurl;
  var imageSize;
  var layout;
  var credits;

  var showShelf = function(options) {
    initialize(options);
    displayBooks();
  };

  var initialize = function(options) {
    idNumber = options.idNumber || "113720634485746776434";
    shelfNumber = options.shelfNumber || "Reading Now";
    container = options.container || "#readingNow";
    limit = options.limit || 10;
    pageCurl = (typeof options.pageCurl !== 'undefined')? options.pageCurl: false;
    imageSize = options.imageSize || "thumb";
    layout = options.layout || "grid";
    credits = (typeof options.credits !== 'undefined')? options.credits: false;
  };

  var displayBooks = function() {
    getBooks(function(data) {
      getTemplateAjax('layouts/' + layout + '.handlebars', function(template) {
        $(container).html(template(data));
      });
    });
  };

  var getBooks = function(callback) {
    $.ajax({
      url: getUrl()
    })
      .done(function(data) {
        if(typeof callback === 'function') {
          alterData(data, callback);
        }
      });
  };

  var alterData = function(data, callback) {
    var options = {};
    options.books = [];
    options.credits = credits;
    var book;
    var volume;

    for(var i = 0; i < data.items.length; i++) {
      book = {};
      volume = data.items[i].volumeInfo;
      book.title = volume.title;
      book.authors = volume.authors;
      book.description = volume.description;
      book.link = volume.infoLink;
      book.image = imageSize === "thumb"? volume.imageLinks.thumbnail: volume.imageLinks.smallThumbnail;
      options.books.push(book);
    }

    if(typeof callback === 'function') {
      callback(options);
    }
  };

  var getUrl = function() {
    return "https://www.googleapis.com/books/v1/users/" + idNumber + "/bookshelves/" + shelfNumber + "/volumes";
  };

  function getTemplateAjax(path, callback) {
    var source;
    var template;

    $.ajax({
      url: path,
      success: function(data) {
        source = data;
        template = Handlebars.compile(source);

        if(callback) callback(template);
      }
    });
  }

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
