import { useState } from "react";
import { useParams } from "react-router-dom";

function Product(){
    const {id} = useParams();
    const [product,setProduct] = useState({});
    return (
        <div className="container">
            <h1>Product Page</h1>
        </div>
    )
}
export default Product;