import { Route, Routes } from "react-router-dom";
import Header from "./components/layouts/header";
import Menu from "./components/layouts/menu";
import Home from "./components/pages/Home";
import Category from "./components/pages/Category";
import Product from "./components/pages/Product";
import Weather from "./components/pages/Weather";
// import { AppProvider } from "./context/context";
// import { useReducer, useState } from "react";
// import STATE from "./context/initState";
// import reducer from "./context/reducer";
import Cart from "./components/pages/Cart";
import { connect } from "react-redux";
import Login from "./components/pages/Login";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu as AntMenu } from 'antd';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];

function App(props) { // jsx
  // const initData = localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")):STATE;
  // const [state,dispatch] = useReducer(reducer,initData);

  const loading = props.loading;

  const onClick = (e) => {
    console.log('click', e);
  };
  return (
    // <AppProvider value={{state,dispatch}}>
    <>
      <div style={{display:loading?"block":"none"}} className="bg-fade"></div>
      <div className="app">
        <Header />
        <Menu/>
        <main>
          <Container>
          <Row>
            <Col xs={3}>
            <AntMenu
              onClick={onClick}
              style={{
                width: 256,
              }}
              mode="vertical"
              items={items}
            />
            </Col>
            <Col xs={9}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/category/:slug" element={<Category/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/weather" element={<Weather/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            </Col>
            </Row>
            </Container>
        </main>
      </div>
      </>
      // </AppProvider>
  );
}
const mapStateToProps = (state,ownProps)=>{
  return {
    loading: state.loading
  }
}
export default connect(mapStateToProps,null)(App);
