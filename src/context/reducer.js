import ACTION from "./action";
const reducer = (state,action) =>{ 
    // giả định rằng trong action sẽ có 2 thông tin là type(Kiểu tác động) và payload (dữ liệu)
    switch(action.type){
        case ACTION.UPDATE_CART: return {...state,cart:action.payload,loading:true};
        case ACTION.UPDATE_FAVORITES: return {...state,favorites:action.payload};
        case ACTION.SHOW_LOADING: return {...state,loading:true};
        case ACTION.HIDE_LOADING: return {...state,loading:false};
    }
}
export default reducer;