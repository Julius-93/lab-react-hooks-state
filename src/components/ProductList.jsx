import React from "react";
import ProductCard from "./ProductCard";

// Product data supplied by the lab
export const sampleProducts = [
  {
    id: 1,
    name: "Apple",
    price: "$1.00",
    category: "Fruits",
    inStock: true,
  },
  {
    id: 2,
    name: "Milk",
    price: "$2.50",
    category: "Dairy",
    inStock: false,
  },
];

const ProductList = ({ category, onAddToCart }) => {
  // Show all products when "all" is selected.
  // Otherwise, only show products matching the selected category.
  const filteredProducts =
    category === "all"
      ? sampleProducts
      : sampleProducts.filter(
          (product) => product.category === category
        );

  return (
    <div>
      <h2>Available Products</h2>

      {filteredProducts.length === 0 ? (
        <p>No products available.</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;