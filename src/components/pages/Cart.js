import { useContext } from "react";
import { Table } from "react-bootstrap";
import Context from "../../context/context";

function Cart(){
    const {state,dispatch}= useContext(Context);
    return (
        <div className="container">
            <h1>Cart</h1>
            <Table hover={true} striped={true}>
                <thead>
                    <th>No</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                </thead>
                <tbody>
                    {
                        state.cart.map((e,i)=>{
                            return (
                                <tr>
                                    <td>#{i+1}</td>
                                    <td><img src={e.thumbnail} width={100}/></td>
                                    <td>{e.title}</td>
                                    <td>1</td>
                                    <td>{e.price}</td>
                                    <td>{e.price*1}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}
export default Cart;