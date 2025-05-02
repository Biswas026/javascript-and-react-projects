fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    const productContainer = document.querySelector(".product-container");
    const cartCountElement = document.getElementById("cart-count");
    const searchInput = document.getElementById("search");
    const suggestionList = document.getElementById("suggestion-list");

    let cartCount = 0;

    // Render product cards
    data.forEach((item) => {
      productContainer.innerHTML += `
        <div class="product-card">
          <div class="product-image">
            <img src="${item.image}" alt="product-image">
          </div>
          <div class="product-details">
            <h2 class="product-title">${item.title}</h2>
            <p class="product-price">$${item.price}</p>
            <button class="add-to-cart">Add to Cart</button>
          </div>
        </div>
      `;
    });

    // Add to cart logic
    document.querySelectorAll(".add-to-cart").forEach((btn) => {
      btn.addEventListener("click", () => {
        cartCount++;
        cartCountElement.innerText = cartCount;
      });
    });

    // Suggestion logic
    searchInput.addEventListener("input", () => {
      const value = searchInput.value.trim().toLowerCase();
      suggestionList.innerHTML = "";

      if (value === "") {
        suggestionList.style.display = "none";
        return;
      }

      const filtered = data.filter(item =>
        item.title.toLowerCase().includes(value)
      );

      if (filtered.length > 0) {
        filtered.forEach(item => {
          const li = document.createElement("li");
          li.classList.add("list-group-item");
          li.textContent = item.title;

          li.addEventListener("click", () => {
            searchInput.value = item.title;
            suggestionList.style.display = "none";
          });

          suggestionList.appendChild(li);
        });
        suggestionList.style.display = "block";
      } else {
        suggestionList.style.display = "none";
      }
    });

    document.addEventListener("click", (e) => {
      if (!document.querySelector(".search-container").contains(e.target)) {
        suggestionList.style.display = "none";
      }
    });

  })
  .catch(() => console.log("error"));
