import { useContext } from "react";
import { authContext } from "../../Context/auth";
import "./Product.css";

export default function Product({ product }) {

    const { auth } = useContext(authContext);
    return (
        <div className="product-card">
            <img src={product.picture} alt={product.name} className="product-image" />
            <span className="name">{product.name}</span>
            <span className="price">{product.price}</span>
        </div>
    );
}