import { NavLink } from "react-router-dom";
import {Navbar,NavDropdown,Nav} from 'react-bootstrap';
import { useEffect, useState } from "react";
import api from "../../api";
export default function Menu(props){
    const [categories,setCategories] = useState([]);
    const loadCategories = async ()=>{
        const url = `products/categories`;
       try {
        const rs = await api.get(url);
        setCategories(rs.data);
       } catch (error) {
        
       }

    
    }
    useEffect(()=>{
        loadCategories();
    },[]);
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <Navbar.Collapse id="navbar-dark-example">
                            <Nav>
                                <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Category"
                                menuVariant="dark"
                                >
                                    {
                                        categories.map((e,i)=>{
                                            return (<NavDropdown.Item key={i} className="text-capitalize">
                                                <NavLink to={`/category/${e}`}>{e}</NavLink>
                                            </NavDropdown.Item>)
                                        })
                                    }
                                
                               
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/product" className="nav-link">Product</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/cart" className="nav-link">Cart</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/weather" className="nav-link">Weather</NavLink>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
    );
}