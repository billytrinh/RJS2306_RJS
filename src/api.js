import axios from "axios";

const api =  axios.create({
    baseURL: `https://dummyjson.com/`,
    headers:{}
});
export const updateJWT = (token)=>{  // lần sau sử dụng api sẽ được đính kèm token vào sẵn
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
export default api;

// synchronize - lệnh viết trước thì xong trước
// JS - Asynchronize - bất đồng bộ - Promise

// -> xử lý bất đồng bộ là gì?
// T1(5s)  T2 T3 T4 => bắt T2 T3 T4 phải chờ T1 làm xong thì mới được làm
// async (báo phạm vi hàm có xử lý bất đồng bộ) 
// await bắt các lệnh sau lệnh này phải chờ nó làm xong
// await T1; T2;T3;T4