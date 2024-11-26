const products = [
    { name: "Smartphone", category: "electronics", price: 299 },
    { name: "Laptop", category: "electronics", price: 899 },
    { name: "Jeans", category: "clothing", price: 45 },
    { name: "T-shirt", category: "clothing", price: 25 },
    { name: "Novel", category: "books", price: 15 },
    { name: "Cookbook", category: "books", price: 35 },
  ];
  
  const categoryFilter = document.getElementById("category");
  const priceFilter = document.getElementById("price");
  const productList = document.getElementById("product-list");
  
  function filterProducts() {
    const category = categoryFilter.value;
    const price = priceFilter.value;
  
    const filteredProducts = products.filter((product) => {
      const matchesCategory =
        category === "all" || product.category === category;
      const matchesPrice =
        price === "all" ||
        (price === "low" && product.price < 50) ||
        (price === "medium" && product.price >= 50 && product.price <= 100) ||
        (price === "high" && product.price > 100);
  
      return matchesCategory && matchesPrice;
    });
  
    displayProducts(filteredProducts);
  }
  
  function displayProducts(products) {
    productList.innerHTML = "";
  
    if (products.length === 0) {
      productList.innerHTML = "<li>No products match your filters.</li>";
      return;
    }
  
    products.forEach((product) => {
      const productItem = document.createElement("li");
      productItem.innerHTML = `
        <span>${product.name}</span>
        <span>$${product.price}</span>
      `;
      productList.appendChild(productItem);
    });
  }
  

  filterProducts();
  

  categoryFilter.addEventListener("change", filterProducts);
  priceFilter.addEventListener("change", filterProducts);
  