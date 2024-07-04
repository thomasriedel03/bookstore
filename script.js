function render() {
      getSavedArrays();

      document.getElementById('book-area').innerHTML = '';
      for (let i = 0; i < books.length; i++) {
            let book = books[i];
            document.getElementById('book-area').innerHTML += generateBookAreaHTML(book, i);

            renderComments(book, i);
      }
}

function renderComments(book, i) {
      document.getElementById(`${i}-comment-table`).innerHTML = '';

      for (let commentIndex = 0; commentIndex < book.comments.length; commentIndex++) {
            document.getElementById(`${i}-comment-table`).innerHTML += generateCommentTableHTML(book, i, commentIndex);
      }
}

function getSavedArrays() {}
