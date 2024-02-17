function scrollToBook(targetBookId) {
   // Scroll smoothly to the target book content
   var targetBook = document.getElementById(targetBookId);

   if (targetBook) {
       var targetBookContent = targetBook.querySelector('.ebook-store-content');
       
       if (targetBookContent) {
           targetBookContent.scrollIntoView({
               behavior: 'smooth',
               block: 'start'
           });
       }
   }
}

document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");

    productList.addEventListener("click", function (event) {
        const clickedProduct = event.target.closest(".product");

        // Check if a product card was clicked
        if (clickedProduct && productList.contains(clickedProduct)) {
            // Get the data-link attribute containing the page URL
            const pageLink = clickedProduct.getAttribute("data-link");

            // Navigate to the specified page
            if (pageLink) {
                window.location.href = pageLink;
            }
        }
    });
});
