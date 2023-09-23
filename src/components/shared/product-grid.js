import { Card,  Button } from "react-bootstrap";
export function ProductGrid(props){
    const product = props.product;
    return (
        <Card>
            <Card.Img variant="top" src={product.thumbnail}/>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Button variant="outline-primary">Add To Cart</Button>
            </Card.Body>          
        </Card>
    )
}