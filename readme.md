Google Bookshelves Widget
=====================
This plugin allows you to display the books in your Google Books Library

Description
=====================

This is currently a work in progress.

With this plugin you can add show off your books from any of the shelves on your Google Books Library. It uses the Google Boooks API to show your Reading Now, Favorites, Have Read, To Read, or your custom shelves. You can also choose the maximum number of books that you want to display.

Example Usage
=====================

    googleBookshelves.showShelf(
      {
        idNumber: "113720634485746776434",
        shelf: "Reading Now",
        container: "#readingNow",
        limit: 10,
        random: false,
        pageCurl: false,
        imageSize: "thumb"
      }
    );

To-do List
=====================

- Make sure it loads in books correctly

Dependencies
=====================
It does require jquery for the ajax call.

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
