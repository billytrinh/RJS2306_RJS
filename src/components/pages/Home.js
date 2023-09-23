import { Col, Row} from "react-bootstrap";
import { ProductGrid } from "../shared/product-grid";
import Slider from "../shared/slider";
import { useEffect, useState } from "react";

function Home(){
    const [products,setProducts] = useState([]);

    const loadProduct = ()=>{
        // lay sp tu api ve
        // set gia tri vao products
        const url = `https://dummyjson.com/products?limit=12`;
        fetch(url).then(data=>data.json())
        .then(data=>{
            setProducts(data.products);
        })
    }
    useEffect(()=>{  // sử dụng hàm useEffect -> nó đang chạy luôn
        // các việc mà nó sẽ làm khi có sự kiện phát ra
        // console.log("A");
        // nếu hàm này đang lắng nghe sự thay đổi của biến products thì có nên gọi api và set giá trị cho products hay ko?
        // KO ĐC LÀM VẬY TRONG NÀY -> vòng lặp vô hạn
    },products); // sự kiện: lắng nghe sự thay đổi của các state

    useEffect(()=>{
        // đây mới là nơi lấy data từ api về set lần đầu tiên cho các state
       loadProduct();
    },[]);// chả lắng nghe thằng state nào hết => tự động chạy duy nhất 1 lần ngay sau khi tạo thành giao diện ( onload )
    return (
        <>  
            <Slider />
            <div className="container">
                <Row>
                    {
                        products.map((e,i)=>{
                            return (
                            <Col xs={3} className="mb-3 mt-3">
                                <ProductGrid product={e} />
                            </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </>
    )
}
export default Home;