
function Product(props){ //properties
    const pr = props.product;
    return (
        <div className="col-4">
            <img src={pr.image}/>
            <h2>{pr.name}</h2>
            <p>Sản phẩm sắp ra mắt vào tháng 10 tới đây</p>
            <p>Giá đề xuất: {pr.price}$</p>
            <p>{pr.qty>0?`Số lượng: ${pr.qty}`:"Hết hàng"}</p>
        </div>
    );
}
export default Product;