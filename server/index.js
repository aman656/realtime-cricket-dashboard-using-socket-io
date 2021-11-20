import cors from "cors"
import path from "path";
import { createServer } from "http";
import { Server } from "socket.io";
import express from 'express'
import mongoose  from 'mongoose'

const app = express()
const PORT = process.env.PORT || 5000
app.use(cors(  {  origin: ["http://localhost:3000", "http://localhost:5000"]}))
app.use(express.json())

const scoreModel = mongoose.model("score",{
    teamBat:String,
    teamBowl:String,
    score:String,
    wicket:String,
    over:String,
})


mongoose.connect("mongodb+srv://user_003:user1234@cluster0.w8zo3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
app.get("/", (req, res, next) => {
    res.send("Started");
})



app.get('/score',async(req,res)=>{
    try{
        const getting  =await scoreModel.find()
        res.status(200).send(getting)
    }catch(error){
        res.status(404).send({message:error})
    }
})

app.post('/score',(req,res,next)=>{
    const update = new scoreModel({
        batting:req.body.batting,
        bowling:req.body.bowling,
        score:req.body.score,
        wicket:req.body.wicket,
        over:req.body.over
    })
    update.save().then(()=>{
        console.log("Score Saved")

        io.emit('score',{
            batting:req.body.batting,
            bowling:req.body.bowling,
            score:req.body.score,
            wicket:req.body.wicket,
            over:req.body.over
        })
        res.send("Saved")
    })
})

const server = createServer(app)

const io = new Server(server,{cors:{origin:"*",methods:"*"}})



io.on("connection", (socket) => {
    console.log("New client connected with id: ", socket.id);

    // to emit data to a certain client
    socket.emit("topic 1", "some data")

    // collecting connected users in a array
    // connectedUsers.push(socket)

    socket.on("disconnect", (message) => {
        console.log("Client disconnected with id: ", message);
    });
});

// setInterval(() => {

//     // to emit data to all connected client
//     // first param is topic name and second is json data
//     io.emit("Test topic", { event: "ADDED_ITEM", data: "some data" });
//     console.log("emiting data to all client");

// }, 2000)

server.listen(PORT, function () {
    console.log("server is running on", PORT);
})
String