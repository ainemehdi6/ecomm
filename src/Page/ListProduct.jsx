import { useEffect, useState, useContext } from "react";
import { getAll } from "../Service/product";
import Product from "../Component/Product/Product";
import { authContext } from "../Context/auth";
import Login from "./Login/Login";
import "./ListProduct.css";

export default function ListProduct() {
    const [listProduct, setListProduct] = useState([]);
    const { auth } = useContext(authContext);

    useEffect(() => {
        getAll()
            .then((data) => setListProduct(data));
    }, [setListProduct]);

    return (
        <div>
            {auth.token !== null && (
                <div className="product-list">
                    {listProduct.map(product => (
                        <Product product={product} key={"product-" + product.id} />
                    ))}
                </div>
            )}
            {auth.token === null && (
                <>
                    <span>Vous devez être connecté pour voir les produits</span>
                    <Login />
                </>
            )}
        </div>
    );
}
