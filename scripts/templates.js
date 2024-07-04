function generateBookAreaHTML(book, i) {
      return /*html*/ `
        <div class="book-section">
            <section class="title-section">
                <h3>${book.name}</h3>
            </section>
            <div class="separator"><div>
            <section class="cover-section">
                <img class="cover" src="coverimg/book.png">
            </section>
            <div class="separator"><div>
            <section class="info-section">
                <div class="price-likes-container">
                    <h4>${book.price.toFixed(2)} €</h4>
                    <div class="likes-container">
                        <p>${book.likes}</p>
                        <div id="${i}-like-button-container"></div>
                    </div>
                </div>
                <div class="info-container">
                    <table class="info-table">
                        <tr>
                            <td class="font-weight-bold">Author</td>
                            <td>: ${book.author}</td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold">Erscheinungsjahr</td>
                            <td>: ${book.publishedYear}</td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold">Genre</td>
                            <td>: ${book.genre}</td>
                        </tr>
                    </table>
                </div>
            </section>
            <div class="separator"></div>
            <section class="comment-section">
                <h5 class="comment-section-headline">Kommentare:</h5>
                <div class="comment-table-container">
                    <table>
                        <tbody id="${i}-comment-table">
                        </tbody>
                    </table>
                </div>
                <div class="add-comment-container">
                    <input class="add-comment-input" placeholder="Schreibe einen Kommentar..." id="${i}-add-comment-input">
                    <img onclick="addComment(${i})" id="${i}-add-comment-button" class="add-comment-button" src="graphics/telegram-pfeil.png">
                </div>
            </section>
            
        </div>
    `;
}

function generateCommentTableHTML(book, i, commentIndex) {
      return /*html*/ `
        <tr>
            <td>[${book.comments[commentIndex].name}]</td>
            <td>: ${book.comments[commentIndex].comment}</td>
        </tr>
    `;
}
