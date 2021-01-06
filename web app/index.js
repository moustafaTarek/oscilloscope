const express = require("express")
const router = express.Router()
const app = express()
const bodyParser = require("body-parser")
const path = require("path")
const cors = require("cors")


let sample=0;
let time=0;
const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const port =  new SerialPort("COM1", { baudRate: 9600 }); //Connect serial port to port COM3. Because my Arduino Board is connected on port COM3. See yours on Arduino IDE -> Tools -> Port
const parser = port.pipe(new Readline({delimiter: '\r\n'})); //Read the line only when new line comes.
parser.on('data', (temp) => { //Read data
    console.log(temp);
    sample=temp;
});


const points = []

setInterval(() => {
    points.push({
        x: time   * 1,
        y: sample * 1,
    })
    time += 1
}, 1000)

app.use(cors())
app.use(bodyParser.json())
app.use(express.static("./"))

app.get("/points", (req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.send(points)
});

app.get("/", (req, res) => {
    res.sendFile(path.join("index.html"))
});

app.listen(4000)
