import Product from "./Product";
function Category(props){
    const cat = props.cat;
    const products = [
        {
            name:"Iphone 13",
            price: 1200,
            qty: 0,
            image:"/images/logo192.png"
        },
        {
            name:"Iphone 14",
            price: 1500,
            qty: 10,
            image:"/images/logo192.png"
        },
        {
            name:"Iphone 15",
            price: 1800,
            qty: 5,
            image:"/images/logo192.png"
        }
    ];
    return (
        <div>
            <h2>{cat.name}</h2>
            <p>Số lượng sản phẩm: {cat.count}</p>
            <div className="row">
                <Product product={products[0]}/>
                <Product product={products[1]}/>
                <Product product={products[2]}/>
            </div>
        </div>
    );
}
export default Category;