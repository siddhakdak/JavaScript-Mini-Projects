function generate() {
  var quotes = {
    "-Oscar Wilde":
      '"To live is the rarest thing in the world. Most people exist, that is all."',
    "-Emily Dickinson":
      '"That it will never come again is what makes life so sweet."',
    "-George Eliot": '"It is never too late to be what you might have been."',
    "-Ralph Waldo Emerson":
      '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."',
  };

  var authors = Object.keys(quotes);
 var author = authors[Math.floor(Math.random() * authors.length)];

var quote = quotes[author];

document.getElementById("quote").innerHTML = quote;

document.getElementById("author").innerHTML = author;

}
