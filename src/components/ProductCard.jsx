import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>

      <p>Price: {product.price}</p>

      <p>Category: {product.category}</p>

      <button
        data-testid={`product-${product.id}`}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;