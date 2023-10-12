import { useState } from "react";
import { Button, Col, Form, FormGroup, FormLabel, InputGroup, Row } from "react-bootstrap";
import api from "../../api";

function Login(props){
    const [user,setUser] = useState({email:"",password:''});
    const handleChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const url = 'auth/login';
            const rs = await api.post(url,user);
            console.log(rs);
        } catch (error) {
            
        }
        
    }
    return (
        <div className="container">
            <Row>
                <Col xs={6}>
            <Form method="post" onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                    <FormLabel content="">Email</FormLabel>
                    <input name="email" onChange={handleChange} value={user.email} type="email" placeholder="email" className="form-control"/>
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel content="">Password</FormLabel>
                    <input name="password"  onChange={handleChange} value={user.password} type="password" placeholder="password" className="form-control"/>
                </FormGroup>
                <FormGroup>
                <Button type="submit" className="btn btn-primary" content="">Login</Button>
                </FormGroup>
            </Form>
            </Col>
            </Row>
        </div>
    )
}
export default Login;