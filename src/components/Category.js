import Product from "./Product";
import React,{ useState } from "react";
function Category(props){
    const cat = props.cat;
    const [products,setProducts] = useState([]);// khởi tạo products là 1 state có giá trị ban đầu là [] rỗng
    // const [name,setName] = useState("");// tạo 1 state để control ô input name
    // const changeName = (e)=>{ // đặt vào sự kiện viết trong input - e viết tắt của event (sự kiện xảy ra trên phần tử)
    //    const v = e.target.value; // giá trị vừa nhập trong input
    //    setName(v);     
    // }
    // const [image,setImage] = useState("");
    // const changeImage = (e)=>{
    //     const v = e.target.value;
    //     setImage(v);
    // }
    const [pr,setPr] = useState({
        name:"",
        image:"",
        price:0,
        qty:0
    });
    const handleInput = (e)=>{
        const v = e.target.value;
        const k = e.target.name;
        // pr[k] = v;
        // setPr(pr);
        setPr({...pr,[k]:v});
    }
    const submitProduct = (e)=>{
        // products.push(pr);
        // setProducts(products);
        setProducts(products=> [...products,pr]);
        e.preventDefault();
    }
    return (
        <div className="row">
             <h2>{cat.name} COunt:{products.length}</h2>
            <div className="col-3">
                <form action="#" onSubmit={submitProduct} method="post">
                    <div className="mb-3">
                        <label>Name</label>
                        <input onChange={handleInput} value={pr.name} type="text" name="name" className="form-control"/>
                        <p>Giá trị đang nhập:  {pr.name}</p>
                    </div>
                    <div className="mb-3">
                        <label>Image</label>
                        <input onChange={handleInput} value={pr.image} type="text" name="image" className="form-control"/>
                        <p>Giá trị vừa nhập: {pr.image}</p>
                    </div>
                    <div className="mb-3">
                        <label>Price</label>
                        <input onChange={handleInput} value={pr.price} type="number" name="price" className="form-control"/>
                        <p>Giá trị vừa nhập: {pr.price}</p>
                    </div>
                    <div className="mb-3">
                        <label>Qty</label>
                        <input onChange={handleInput} value={pr.qty} type="number" name="qty" className="form-control"/>
                        <p>Giá trị vừa nhập: {pr.qty}</p>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <div className="col-9">
                
                <div className="row">
                    {
                    products.map((e,i)=>{ 
                        // e <=> products[i]
                            return (<Product key={i} product={e}/>)
                    })  
                    }
                    
                </div>
            </div>
        </div>
    );
}
export default Category;