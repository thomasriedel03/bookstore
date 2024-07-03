function render() {
      getSavedArrays();

      document.getElementById('book-area').innerHTML = '';
      for (let i = 0; i < books.length; i++) {
            let book = books[i];
            document.getElementById('book-area').innerHTML += generateBookAreaHTML(book, i);
      }
}

function getSavedArrays() {}
