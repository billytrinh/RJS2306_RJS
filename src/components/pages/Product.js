import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import ACTION from "../../redux/action";
import { connect } from "react-redux";
// import Context from "../../context/context";
// import ACTION from "../../context/action";
// Global state: state dành cho tòan bộ web, tức là component nào cũng có thể sử dụng
function Product(props){
    const {id} = useParams();
    const [product,setProduct] = useState({}); // local state (private memory)
    // const [cart,setCart] = useState([]);
    // const {state,dispatch} = useContext(Context);// kết nối và lấy state từ context chung (global memory)
    const loadProduct = async ()=>{
        try {
            const url = `product/${id}`;
            const rs = await api.get(url);
            setProduct(rs.data);
        } catch (error) {
            
        }
    } 
    // SPA - Single page application
    useEffect(()=>{
        loadProduct();
    },id) 
    const addToCart = ()=>{
        // setCart([...cart,product]);
        // const x = cart; x.push(product); setCart(x);
        const cart = props.state.cart;
        cart.push(product);
        // setState({...state,cart:cart});
        // dispatch({type:ACTION.UPDATE_CART,payload:cart});

        props.dispatch(cart);

        setTimeout(()=>{
            // dispatch({type:ACTION.HIDE_LOADING})
        },1000)
    }
    return (
        <div className="container">
            <h1>{product.title}</h1>
            <h3>{product.price}</h3>
            <p><span>{product.qty}</span> 
            <button onClick={addToCart} type="button" className="btn btn-primary">Add To Cart</button>
            <button onClick={addToCart} type="button" className="btn btn-primary">Add To Favorites</button>
            </p>
        </div>
    )
}
const mapStateToProps = (state,ownProps) =>{
    return {
        state: state
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        dispatch: (cart)=> dispatch({type: ACTION.UPDATE_CART,payload: cart})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product);