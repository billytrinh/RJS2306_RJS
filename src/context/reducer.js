import ACTION from "./action";
const reducer = (state,action) =>{ 
    // giả định rằng trong action sẽ có 2 thông tin là type(Kiểu tác động) và payload (dữ liệu)
    switch(action.type){
        case ACTION.UPDATE_CART: return {...state,cart:action.payload};
        case ACTION.UPDATE_FAVORITES: return {...state,favorites:action.payload};
    }
}
export default reducer;