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
      // JavaScript for banner auto-change with animation
      const bannerImages = ["idsu2.png", "idsbo2.png", "idsu2.png", "idsbo2.png", "idsu2.png"];
      let currentBannerIndex = 0;

      function changeBanner(direction) {
          currentBannerIndex += direction;

          if (currentBannerIndex < 0) {
              currentBannerIndex = bannerImages.length - 1;
          } else if (currentBannerIndex >= bannerImages.length) {
              currentBannerIndex = 0;
          }

          const bannerElement = document.getElementById("banner");
          bannerElement.style.opacity = 0;  // Set opacity to 0 for fade-out effect

          setTimeout(() => {
              bannerElement.src = bannerImages[currentBannerIndex];
              bannerElement.style.opacity = 1;  // Set opacity to 1 for fade-in effect
          }, 500);  // Wait for 500 milliseconds (same as transition duration)
      }

      setInterval(() => {
          changeBanner(1);
      }, 6000);  // Change banner every 3000 milliseconds (3 seconds)
