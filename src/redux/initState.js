const STATE = { // tạo ra 1 giá trị mặc định ban đầu cho GLOBAL STATE
    cart: [],
    favorites:[],
    loading: false,
    user:{
        email:'',
        name:'',
        password:''
    } // register / login
}
export default STATE;