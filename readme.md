Google Bookshelves Widget
=====================
This plugin allows you to display the books in your Google Books Library

Description
=====================

This is currently a work in progress.

With this plugin you can add show off your books from any of the shelves on your Google Books Library. It uses the Google Boooks API to show your Reading Now, Favorites, Have Read, To Read, or your custom shelves. You can also choose the maximum number of books that you want to display.

In order to find your idNumber, visit books.google.com and click "My libary". Then look in the address bar and it should look something like this:

    http://books.google.com/books?uid=113720634485746776434

Everything after uid= is your idNumber.

To find the shelfNumber for a particular shelf, click on the name of the shelf. The address should look something like this:

    http://books.google.com/books?as_coll=3&num=10&uid=113720634485746776434&source=gbs_slider_cls_metadata_3_mylibrary_title

The number after as_col= is your shelfNumber. Note that you have to make sure that you make the shelf public for this to work. To do this, click on the settings button (looks like a gear), click "Edit properties", and next to visibility, click "Make public" if it isn't already public.

Example Usage
=====================

The required options are idNumber, shelfNumber, container. Everything else will default to what is shown below.

limit is the maximum number of books to show
pageCurl is whether or not to show a page curl on the image
imageSize is the size of the image retrieved. Possible options are thumb or smallThumb
layout is the template to use to display the books. It can be any file name that is contined in layouts. The included templates are grid, description, and column

    googleBookshelves.showShelf(
      {
        idNumber: "113720634485746776434",
        shelfNumber: 3,
        container: "#readingNow",
        limit: 10,
        pageCurl: false,
        imageSize: "thumb",
        layout: "grid"
      }
    );

To-do List
=====================

- Make sure it loads in books correctly

Dependencies
=====================
It requires jquery for the ajax call, and handlebars for the templating.

Copyright
=====================

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
