import React from "react";

const Context = React.createContext(); // tạo 1 biến chứa giá trị của global state

export const AppProvider = Context.Provider;
export default Context;