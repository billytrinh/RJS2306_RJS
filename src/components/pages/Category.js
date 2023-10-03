import { useEffect, useState } from "react";
import { Row,Col } from "react-bootstrap";
import { ProductGrid } from "../shared/product-grid";
import { useParams } from "react-router-dom";
import api from "../../api";

function Category(){
    // phải tìm cách lấy đc slug trên link -> thì mới lấy đc các sản phẩm của danh mục đó
    const {slug} = useParams();   
    const [products,setProducts] = useState([]);
    const loadProduct = async ()=>{
        const url = `products/category/${slug}`;
        try {
            const rs = await api.get(url);
            setProducts(rs.data.products);    
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        loadProduct();
    },slug);
    return (
        <div className="container">
            <h1 className="text-capitalize">{slug}</h1>
            <Row>
            {
                products.map((e,i)=>{
                    return (
                    <Col xs={3} key={i} className="mb-3 mt-3">
                        <ProductGrid product={e} />
                    </Col>
                    )
                })
            }
            </Row>
        </div>
    )
}
export default Category;