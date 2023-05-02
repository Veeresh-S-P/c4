
const express = require("express");
const cookieParser = require('cookie-parser');
const { connection } = require("./db");
const { userRoute } = require("./routes/user.route");
const { ipRoute } = require("./routes/ip.route");
const { authorization } = require("./middleware/jwt.middleware");
const { blacklist } = require("./middleware/blacklist.middleware");


const app = express();
app.use(express.json());
app.use(cookieParser());


app.get("/",(req,res)=>{
    res.send("Welcome to backend homepage")
})

app.use("/user", userRoute);


app.use(blacklist);
app.use(authorization);

app.use("/ipinfo",ipRoute);

app.listen(1001,()=>{
    console.log("app is running at port 1001");
})
