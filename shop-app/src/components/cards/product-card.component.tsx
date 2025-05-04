import "./product-card.css";

import { CardProps } from "../../models/props/card.prop.class";

const ProductCard = ({ cardProps }: { cardProps: CardProps }) => {
  return (
    <div
      className="product-card"
    >
      <div className="image-container">
        <img
          src={cardProps.image}
          className={`${!cardProps.inStock ? "out-of-stock" : ""}`}
          alt={cardProps.productName}
        />
        {cardProps.inStock && (
          <button
            className="action-button product-in-cart"
          >
            <span className="bi bi-cart"></span>
          </button>
        )}
      </div>

      {!cardProps.inStock && (
        <div className="product-out-of-stock">
          <p>OUT OF STOCK</p>
        </div>
      )}

      <div className="product-card-body">
        <span className="product-card-title">{cardProps.productName}</span>
        <span className="price-regular-font">{cardProps.productPricing}</span>
      </div>
    </div>
  );
};

export default ProductCard;
