const express=require("express");
const cors=require("cors");

const db=require("./config/db");
const projectRoutes=require("./routes/projectRoutes");
const contactRoutes=require("./routes/contactRoutes");

const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/projects",projectRoutes);
app.use("/api/contact",contactRoutes);

app.get('/',(req,res)=>{
    res.send("Portfolio backend is running");
});

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
});