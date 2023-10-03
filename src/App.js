import { Route, Routes } from "react-router-dom";
import Header from "./components/layouts/header";
import Menu from "./components/layouts/menu";
import Home from "./components/pages/Home";
import Category from "./components/pages/Category";
import Product from "./components/pages/Product";
import Weather from "./components/pages/Weather";
import { AppProvider } from "./context/context";
import { useReducer, useState } from "react";
import STATE from "./context/initState";
import reducer from "./context/reducer";

function App() { // jsx
  const [state,dispatch] = useReducer(reducer,STATE);
  return (
    <AppProvider value={{state,dispatch}}>
      <div className="app">
        <Header />
        <Menu/>
        <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/category/:slug" element={<Category/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/weather" element={<Weather/>}/>
            </Routes>
           
        </main>
      </div>
      </AppProvider>
  );
}

export default App;
