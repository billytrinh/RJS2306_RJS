const express=  require("express");
const app = express();
const port = 4000;
const {check,validationResult} = require("express-validator");

app.listen(port,function(){
    console.log("Server is running...");
})
// CORS policy (cross origin policy)
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(express.urlencoded({extended:true}))

app.get("/products",async function(req,res){ 
    try {
        const limit = req.query.limit?req.query.limit:12; // query parameters
        const url = `https://dummyjson.com/products?limit=${limit}`;
        const rs = await fetch(url);
        const data = await rs.json();
        return res.send(data);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});
app.get("/product/:id",async function(req,res){
    try {
        const id = req.params.id?req.params.id:1; // path parameters
        const url = `https://dummyjson.com/product/${id}`;
        const rs = await fetch(url);
        const data = await rs.json();
        return res.send(data);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

const loginValidator = ()=>{
    return [
        check("email","Email không được để trống").not().isEmpty(),
        check("email","Email phải đúng định dạng").isEmail(),
        check("password","Mật khẩu phải từ 6 ký tự").isLength({min:6})
    ];
}
app.post("/auth/login",loginValidator(),async function(req,res){
    const errors = validationResult(req);
    console.log(errors);
    if(!errors.isEmpty()){
        return res.status(401).json({errors:errors.array()});
    }
    try {
        const url = 'http://139.180.186.20:3003/auth/login';
        const user = req.body;// {email:.., password:..}
        const rs = await fetch(url,{
            method:"POST",// GET POST PUT DELETE
            mode: "cors",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        const data = await rs.json();
        
        return res.send(data);
    } catch (error) {
        return res.status(401).send(error.message);
    }
})