const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const multer = require("multer")
const path = require("path")

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose.connect(process.env.MONGODB_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true
}).then(console.log("Connected to database")).catch((err)=>{console.log(err)});

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "images");
    }, 
    filename: (req, file, cb)=>{
        cb(null, req.body.name);
    }
})

const upload = multer({storage: storage});
app.post("/backend/upload", upload.single("file"), (req, res)=>{
    res.status(200).json("File uploaded!")
});

app.use("/backend/auth", authRoute)
app.use("/backend/users", userRoute)
app.use("/backend/posts", postRoute)
app.use("/backend/categories", categoryRoute)

app.listen("5000", ()=>{
    console.log("Server is running..");
})


