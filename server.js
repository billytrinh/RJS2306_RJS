const express=  require("express");
const app = express();
const port = 4000;
const {check,validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
app.listen(port,function(){
    console.log("Server is running...");
})
// connect db
const mongoose = require("mongoose");
const url_db= `mongodb+srv://root:Xc49RKSaqvVFtQfN@cluster0.hfbob.azure.mongodb.net/demo`
mongoose.connect(url_db).then(()=>{
    console.log("Connected DB");
}).catch(err=>{
    console.log(err);
})
// CORS policy (cross origin policy)
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(express.urlencoded({extended:true}))
// middleware
const checkAuth = (req,res,next)=>{
    if(req.headers && req.headers.authorization && req.headers.authorization.split(" ")[0]=== "Bearer"){
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,"RESTFULAPIs",function(err,decode){
            if(err) req.user = undefined;
            req.user = decode;
            return next();
        });
    }else{
        req.user = undefined;
        return res.status(401).json({message:"Unauthorized user"});
    }
}
app.use("/checkout",checkAuth);



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
    if(!errors.isEmpty()){
        return res.status(401).json({errors:errors.array()});
    }
    try {
        // b1 - tìm xem email có ko 0-> nếu ko có trả về 401
        const email = req.body.email;
        const userModel = require("./server/user");
        const u = await userModel.findOne({email:email});
        if(u == null){
            res.status(401).json({message:"Email or password is not correct"});
            return;
        }
        // b2 - đối chiếu password bằng verify -> sai trả về 401
        const verify = await bcrypt.compare(req.body.password,u.password);
        if(!verify){
            res.status(401).json({message:"Email or password is not correct"});
            return;
        }
        // b3 - đúng -> trả về thông tin user
        return res.json({
            email:u.email,
            full_name:u.full_name,
            token: jwt.sign({email:u.email,full_name:u.full_name,_id:u._id},'RESTFULAPIs')
        });
    } catch (error) {
        return res.status(401).send(error.message);
    }
})
const registerValidator = ()=>{
    return [
        check("full_name","Họ và tên không được để trống").not().isEmpty(),
        check("email","Email không được để trống").not().isEmpty(),
        check("email","Email phải đúng định dạng").isEmail(),
        check("password","Mật khẩu phải từ 6 ký tự").isLength({min:6})
    ];
}
app.post("/auth/register",registerValidator(),async function(req,res){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(401).json({errors:errors.array()});
    }
    try {
        const data = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(data.password,salt);
        data.password = hashed;
        const userModel = require("./server/user");
        // them user vao db
        const u = new userModel(data);
        u.save();
        res.json({message:"Done"})
    } catch (error) {
        res.status(401).json({message:error.message});
    }
})

app.post("/checkout",  function(req,res){
    res.json({message:"DONE"});
})

