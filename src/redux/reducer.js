import STATE from "./initState";
import ACTION from "./action";
const updateLocalStorage = (state)=>{
    localStorage.setItem("state",JSON.stringify(state));
    return state;
}
const initData = localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")):STATE;
const reducer = (state = initData, action)=>{
    switch(action.type){
        case ACTION.UPDATE_CART: return updateLocalStorage({...state,cart:action.payload,loading:true});
        case ACTION.UPDATE_FAVORITES: return updateLocalStorage({...state,favorites:action.payload});
        case ACTION.SHOW_LOADING: return updateLocalStorage({...state,loading:true});
        case ACTION.HIDE_LOADING: return updateLocalStorage({...state,loading:false});
        default: return state;
    }
}
export default reducer;