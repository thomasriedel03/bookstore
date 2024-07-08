function render() {
      document.getElementById('book-area').innerHTML = '';
      for (let i = 0; i < books.length; i++) {
            const book = books[i];
            getSavedArrays(book, i);
            document.getElementById('book-area').innerHTML += generateBookAreaHTML(book, i);

            renderLikes(book, i);
            renderComments(book, i);
      }
}

function renderLikes(book, i) {
      if (book.liked === true) {
            document.getElementById(`${i}-like-button-container`).innerHTML = /*html*/ `
                  <img src="graphics/ausgefülltes_rotes_herz.png" class="like-button" onclick="toggleLike(${i})">
            `;
      } else {
            document.getElementById(`${i}-like-button-container`).innerHTML = /*html*/ `
                  <img src="graphics/herz.png" class="like-button not-liked" onclick="toggleLike(${i})">
            `;
      }
}

function toggleLike(i) {
      let book = books[i];

      if (book.liked === true) {
            book.liked = false;
            book.likes = +book.likes - 1;
      } else {
            book.liked = true;
            book.likes = +book.likes + 1;
      }

      setArray(`${i}-liked`, book.liked);
      setArray(`${i}-likes`, book.likes);

      render();
}

function renderComments(book, i) {
      document.getElementById(`${i}-comment-table`).innerHTML = '';

      for (let commentIndex = 0; commentIndex < book.comments.length; commentIndex++) {
            document.getElementById(`${i}-comment-table`).innerHTML += generateCommentTableHTML(book, i, commentIndex);
      }
}

function getSavedArrays(book, i) {
      if (getArray(`${i}-comments`) !== null) {
            book.comments = getArray(`${i}-comments`);
      }

      if (getArray(`${i}-liked`) !== null && getArray(`${i}-likes`) !== null) {
            book.liked = getArray(`${i}-liked`);
            book.likes = getArray(`${i}-likes`);
      }
}

function addComment(i) {
      let book = books[i];
      let commentInput = document.getElementById(`${i}-add-comment-input`).value;

      book.comments.unshift({
            'name': 'Du',
            'comment': `${commentInput}`,
      });

      setArray(`${i}-comments`, book.comments);

      render();
}
