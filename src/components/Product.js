import { FaTimes } from "react-icons/fa";

const Product = ({ product, onDelete, onToggle }) => {
  return (
    <div className={`product`} onDoubleClick={() => onToggle(product._id)}>
      <div>
        <img src={product.imageuri} alt="" className="product-image" />
      </div>
      <div className="product-info">
        <h3>
          {product.productname}
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => onDelete(product._id)}
          />
        </h3>
        <p>{product.description}</p>
        <p>{product.availablein}</p>
      </div>
    </div>
  );
};

export default Product;
