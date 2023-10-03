import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
// Global state: state dành cho tòan bộ web, tức là component nào cũng có thể sử dụng
function Product(){
    const {id} = useParams();
    const [product,setProduct] = useState({}); // local state (private memory)
    const [cart,setCart] = useState([]);
    const loadProduct = async ()=>{
        try {
            const url = `product/${id}`;
            const rs = await api.get(url);
            setProduct(rs.data);
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        loadProduct();
    },id) 
    const addToCart = ()=>{
        setCart([...cart,product]);
        // const x = cart; x.push(product); setCart(x);

    }
    return (
        <div className="container">
            <h2>{cart.length}</h2>
            <h1>{product.title}</h1>
            <h3>{product.price}</h3>
            <p><span>{product.qty}</span> 
            <button onClick={addToCart} type="button" className="btn btn-primary">Add To Cart</button>
            </p>
        </div>
    )
}
export default Product;