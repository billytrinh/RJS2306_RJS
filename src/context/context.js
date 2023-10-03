import React from "react";

const Context = React.createContext(); // tạo 1 biến chứa giá trị của global state

export const AppProvider = Context.Provider;
export default Context;

// Global state
// context : có sẵn trong React
// redux: là 1 package bên ngoài, cần cài đặt và độc lập với react