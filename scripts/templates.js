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
                    <h4>${book.price} €</h4>
                    <div class="likes-container">
                        <p>${book.likes}</p>
                        <div id="${i}-like-button"></div>
                    </div>
                </div>
                <div class="info-container">
                    <table>
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
            
        </div>
    `;
}
