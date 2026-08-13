import React, { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

const App = () => {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // State for shopping cart
  const [cart, setCart] = useState([]);

  // State for selected category
  const [category, setCategory] = useState("all");

  // Toggle between light mode and dark mode
  const toggleDarkMode = () => {
    setDarkMode((previousMode) => !previousMode);
  };

  // Add a product to the cart
  const addToCart = (product) => {
    setCart((previousCart) => [...previousCart, product]);
  };

  // Handle category dropdown changes
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <h1>🛒 Shopping App</h1>

      <p>
        Choose your products, filter by category, and add items to your cart.
      </p>

      {/* Dark mode button */}
      <DarkModeToggle
        darkMode={darkMode}
        onToggle={toggleDarkMode}
      />

      {/* Category filter */}
      <div className="filter-section">
        <label htmlFor="category-filter">
          Filter by Category:
        </label>

        <select
          id="category-filter"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      {/* Product list */}
      <ProductList
        category={category}
        onAddToCart={addToCart}
      />

      {/* Shopping cart */}
      <Cart cart={cart} />
    </div>
  );
};

export default App;