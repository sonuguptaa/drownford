document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const productList = document.getElementById("product-list");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase().trim();

        // Iterate through product cards and show/hide with fade effect based on search term
        const productCards = productList.getElementsByClassName("product-card");
        for (const card of productCards) {
            const productTitle = card.getElementsByTagName("h2")[0].innerText.toLowerCase();
            const productDescription = card.getElementsByTagName("p")[0].innerText.toLowerCase();
            const isMatch = productTitle.includes(searchTerm) || productDescription.includes(searchTerm);

            // Apply fade effect
            if (isMatch) {
                fadeIn(card);
            } else {
                fadeOut(card);
            }
        }
    });

    function fadeIn(element) {
        element.style.opacity = 0;
        element.style.display = "block";

        const fadeInInterval = setInterval(function () {
            element.style.opacity = parseFloat(element.style.opacity) + 0.1;
            if (parseFloat(element.style.opacity) >= 1) {
                clearInterval(fadeInInterval);
            }
        }, 50);
    }

    function fadeOut(element) {
        element.style.opacity = 1;

        const fadeOutInterval = setInterval(function () {
            element.style.opacity = parseFloat(element.style.opacity) - 0.1;
            if (parseFloat(element.style.opacity) <= 0) {
                element.style.display = "none";
                clearInterval(fadeOutInterval);
            }
        }, 50);
    }
});





document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const productList = document.getElementById("product-list");

    searchInput.addEventListener("input", function () {
        // Your existing search logic
    });

    productList.addEventListener("click", function (event) {
        const clickedCard = event.target.closest(".product-card");

        // Check if a product card was clicked
        if (clickedCard && productList.contains(clickedCard)) {
            // Toggle the "clicked" class for animation
            clickedCard.classList.toggle("clicked");
            
            // Remove the "clicked" class from other product cards to reset animation
            const productCards = productList.getElementsByClassName("product-card");
            for (const card of productCards) {
                if (card !== clickedCard) {
                    card.classList.remove("clicked");
                }
            }
        }
    });
});
