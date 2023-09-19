// state - trạng thái dữ liệu
import { useState } from "react";
function Product(props){ //properties
    const pr = props.product;
    const [like,setLike] = useState(false); // sẽ có 1 biến like và 1 hàm setLike để thay đổi giá trị của biến like
    // khi biến like thay đổi giá trị, giao diện sử dụng like sẽ tự động cập nhật theo
    // state: gía trị riêng cho mỗi component
    const change = ()=>{ // khai bao 1 function
        setLike(!like);   
    }
    return (
        <div className="col-4 mb-3">
            <div className="card">
                <img src={pr.image}/>
                <div className="card-body">
                    <h2>{pr.name}</h2>
                    <p>Sản phẩm sắp ra mắt vào tháng 10 tới đây</p>
                    <p>Giá đề xuất: {pr.price}$</p>
                    <p>{pr.qty>0?`Số lượng: ${pr.qty}`:"Hết hàng"}</p>

                    <a onClick={change}><i className={like?"bi bi-heart-fill text-danger":"bi bi-heart"}></i></a>
                </div>
            </div>
        </div>
    );
}
export default Product;