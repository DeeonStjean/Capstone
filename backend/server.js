// bring in express for our server setup
import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import weather from "./routes/weather.js"
// bring in the function that will make the connection to the database
import connectDB from './config.js'


// create our express app
const app = express();

// setup a cors middleware for our express app
app.use(cors());
// data from client stored in request.body and formatted as json
app.use(express.json());

// choosing a port 
const port = 5000;

//route
app.use("/weather",weather);

app.get("/", (req, res) => {
    res.send("Work in progress!");
});

app.use((req, res) => {
    res.status(404);
    res.json({ error: "Resource Not Found" });
});

app.listen(port,() => {
    console.log("Port {server running on port");
    connectDB();
});