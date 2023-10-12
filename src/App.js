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
function App(props) { // jsx
  // const initData = localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")):STATE;
  // const [state,dispatch] = useReducer(reducer,initData);

  const loading = props.loading;
  return (
    // <AppProvider value={{state,dispatch}}>
    <>
      <div style={{display:loading?"block":"none"}} className="bg-fade"></div>
      <div className="app">
        <Header />
        <Menu/>
        <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/category/:slug" element={<Category/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/weather" element={<Weather/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
           
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
