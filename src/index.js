const express=require("express")
const cors=require("cors")
const app = express()

const cookieParser = require("cookie-parser");
app.use(cookieParser());

require('dotenv').config()
app.use(express.json())
const userController=require("./controllers/Auth.controller");
// const hotpickController=require("./controllers/Hotpick.controller")
// const commentController=require("./controllers/Comment.controller")
// const KindMomentController=require("./controllers/Kindmoment.controller")
// const mealdealController=require("./controllers/Mealdeal.controller")

app.use(cors());



app.get("/",(req,res)=>{
    return res.status(200).json("Hello world")
})
app.use("/api",userController);
// app.use("/hotpick",hotpickController)
// app.use("/comment",commentController)
// app.use("/kindmoment",KindMomentController)
// app.use("/mealdeal",mealdealController)
const connect=require("./configs/db")



const port=process.env.PORT || 7000
app.listen(port,async()=>{
    try {
        await connect();
        console.log(`Listening on port ${port}`)
    } catch (error) {
        console.log({"error":error.message})
    }
});