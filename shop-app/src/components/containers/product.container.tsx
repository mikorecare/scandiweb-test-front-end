import "./product.container.css";
import React from 'react'

const ProductContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="product-container">{children}</div>
  )
}

export default ProductContainer;