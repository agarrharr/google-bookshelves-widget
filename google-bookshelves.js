var googleBookshelves = (function() {
  var idNumber;
  var shelfNumber;
  var container;
  var limit;
  var pageCurl;
  var imageSize;
  var layoutPath;

  var showShelf = function(options) {
    initialize(options);
    displayBooks();
  };

  var initialize = function(options) {
    idNumber = options.idNumber || "113720634485746776434";
    shelfNumber = options.shelfNumber || "Reading Now";
    container = options.container || "#readingNow";
    limit = (typeof options.limit !== 'undefined')? options.limit: 10;
    pageCurl = (typeof options.pageCurl !== 'undefined')? options.pageCurl: false;
    imageSize = options.imageSize || "thumb";
    layoutPath = options.layoutPath || "";
  };

  var displayBooks = function() {
    // $(container).addClass('google_bookshelves_shelf_' + layout);
    getBooks(function(data) {
      getTemplateAjax(layoutPath, function(template) {
        $(container).append(template(data));
      });
    });
  };

  var getBooks = function(callback, startIndex) {
    var requestLimit;
    if(typeof startIndex === 'undefined') {
      startIndex = 0;
    }
    if(limit === 0) {
      requestLimit = 40;
    } else if(limit > 40) {
      requestLimit = limit - startIndex;
      if(requestLimit > 40) {
        requestLimit = 40;
      }
    } else {
      requestLimit = limit;
    }

    $.ajax({
      url: getUrl() + "?maxResults=" + requestLimit + "&startIndex=" + startIndex
    })
      .done(function(data) {
        if(typeof callback === 'function') {
          alterData(data, callback);
        }
        if(data.items.length === requestLimit) {
          getBooks(callback, startIndex + requestLimit + 1);
        }
      });
  };

  var alterData = function(data, callback) {
    var options = {};
    options.books = [];
    var book;
    var volume;

    for(var i = 0; i < data.items.length; i++) {
      book = {};
      volume = data.items[i].volumeInfo;
      book.title = volume.title;
      book.authors = volume.authors;
      book.description = volume.description;
      book.link = volume.infoLink;
      if(typeof volume.imageLinks !== 'undefined') {
        book.image = (imageSize === "thumb")? volume.imageLinks.thumbnail: volume.imageLinks.smallThumbnail;
        if(!pageCurl) {
          book.image = book.image.replace('edge=curl', 'edge=nocurl');
        }
      } else {
        book.image = (imageSize === 'thumb')? 'images/no_cover_thumb.png': 'images/no_cover_smallthumb.png';
      }
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
