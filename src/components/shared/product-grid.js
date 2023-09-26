import { Card,  Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export function ProductGrid(props){
    const product = props.product;
    return (
        <Card>
            <Card.Img variant="top" src={product.thumbnail}/>
            <Card.Body>
                <Card.Title><NavLink to={`product/${product.id}`}>{product.title}</NavLink></Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Button variant="outline-primary">Add To Cart</Button>
            </Card.Body>          
        </Card>
    )
}