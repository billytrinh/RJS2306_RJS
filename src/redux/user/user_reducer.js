import USER_ACTION from "./user_action";
const updateLocalStorage = (state)=>{
    localStorage.setItem("user",JSON.stringify(state));
    return state;
}
const STATE = {
    user:{},
    jwt:"" // jason web token
}
const initData = localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):STATE;
const user_reducer = (state = initData, action)=>{
    switch(action.type){
        case USER_ACTION.LOGIN: return updateLocalStorage({...state,user:action.payload.user,jwt: action.payload.token});
        // case USER_ACTION.LOGIN: return updateLocalStorage({...state,user:action.payload.user,jwt: action.payload.token});
        default: return state;
    }
}
export default user_reducer;